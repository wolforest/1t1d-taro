import qs from 'query-string';
import Taro from '@tarojs/taro';
import { isObject } from '@utils/lang';
import { retryLogin } from '@utils/session';

// 类型定义
export type TaroRequestOptions = Parameters<typeof Taro.request>[0];

export type Dict = Record<string, unknown>;

export type RequestOptions = Pick<TaroRequestOptions, 'url' | 'method' | 'data'> & {
  withToken?: boolean;
  withShowError?: boolean;
  withNeedLogin?: boolean;
};

export type Response<T> = {
  success: boolean;
  code: string;
  codeType: number;
  message: string;
  data?: T;
  list?: T[];
  total?: number;
  pageSize?: number;
  current?: number;
  pages?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
};

// 常量
const TOKEN_KEY = 'session-token';
const USER_KEY = 'session-user';
const whiteCode: string[] = [];

// 工具函数
const isWhiteCode = (code: string): boolean => whiteCode.includes(code);

const joinUrl = (url: string, query: Dict): string => {
  const queryString = qs.stringify(query);
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${queryString}`;
};

const showError = (response: any, withShowError = true): void => {
  const { data = {} } = response || {};
  const { success, code, message } = data;
  if (withShowError && !success && !isWhiteCode(code)) {
    Taro.showToast({ title: message || '接口异常', icon: 'none' });
  }
};

// 主请求函数
export async function request<T = Dict>(opts: RequestOptions): Promise<Response<T>> {
  const { withToken = true, withShowError = true, withNeedLogin = true, method = 'GET' } = opts;

  const token = withToken ? await getSessionToken() : undefined;
  if (withToken && !token) {
    throw new Error('No token, login required');
  }

  const makeRequest = async (authToken?: string): Promise<any> => {
    const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
    const apiUrl = getApiUrl(opts.url);
    const url = method === 'GET' && isObject(opts.data) ? joinUrl(apiUrl, opts.data) : apiUrl;

    return Taro.request({
      url,
      method,
      header: headers,
      data: method !== 'GET' ? opts.data : undefined,
    }).catch((error) => {
      Taro.showToast({ title: error.message || '接口异常', icon: 'none' });
      return null;
    });
  };

  let response = await makeRequest(token);

  if (withNeedLogin && response?.data?.code === 'NEED_LOGIN') {
    const newToken = await retryLogin();
    response = await makeRequest(newToken);
  }

  showError(response, withShowError);

  return response?.data || {
    success: false,
    message: response?.errMsg || 'Request error',
  };
}

// API URL 生成函数
export function getApiUrl(api: string): string {
  return `${API_DOMAIN}/api/${api.replace(/^\//, '')}`;
}

export function getUploadApiUrl(api = '/asset/upload'): string {
  return `${API_DOMAIN}/api/${api.replace(/^\//, '')}`;
}

// Session 管理函数
export async function getSessionToken(): Promise<string | undefined> {
  return new Promise((resolve) => {
    Taro.getStorage({
      key: TOKEN_KEY,
      success: (res) => resolve(res.data as string),
      fail: () => resolve(undefined),
    });
  });
}

export function updateSessionToken(token: string): void {
  Taro.setStorageSync(TOKEN_KEY, token);
}

export function updateSessionUser(user: any): void {
  Taro.setStorageSync(USER_KEY, user);
}

export function updateSessionInfo(data: { token: { accessToken: string }; user: any }): void {
  updateSessionToken(data.token.accessToken);
  updateSessionUser(data.user);
}

export function getUserInfoWithStorage(): any {
  return Taro.getStorageSync(USER_KEY);
}
