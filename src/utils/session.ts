import Taro from '@tarojs/taro';
import { request, getSessionToken, updateSessionInfo } from './request';

export type User = {
  id: string;
  name: string;
  avatar: string;
  mobile: string;
  roles: string[];
};

/**
 * Check if the user is logged in by validating the session token and session status.
 * @returns {Promise<boolean>} True if logged in, false otherwise.
 */
export async function isLogin(): Promise<boolean> {
  const token = await getSessionToken();
  if (!token) return false;

  return new Promise((resolve) => {
    Taro.checkSession({
      success: async () => {
        const user = await getCurrentUser();
        resolve(!!user);
      },
      fail: () => resolve(false),
    });
  });
}

/**
 * Fetch the current user session information.
 * @returns {Promise<User | null>} User data if successful, null otherwise.
 */
export async function getCurrentUser(): Promise<User | null> {
  const res = await request({ url: '/session' });
  return res.success ? (res.data as User) : null;
}

/**
 * Perform silent login using the WeChat code.
 * @returns {Promise<boolean>} True if login successful, false otherwise.
 */
export async function silentLogin(): Promise<boolean> {
  const { code } = await Taro.login();
  const res = await request({
    url: '/auth/login/wechat/code',
    method: 'POST',
    withToken: false,
    data: {
      appName: 'mxMini',
      code,
    },
  });
  if (res.success) {
    updateSessionInfo(res.data);
  }

  return res.success;
}

/**
 * Retry login using an existing session token.
 * @returns {Promise<string | undefined>} New access token if successful, undefined otherwise.
 */
export async function retryLogin(): Promise<string | undefined> {
  const token = await getSessionToken();

  const res = await request({
    url: '/auth/login/wechat/token',
    method: 'POST',
    withToken: false,
    data: {
      accessToken: token,
    },
  });

  if (res.success) {
    updateSessionInfo(res.data);
  }

  return res.data?.token?.accessToken;
}

/**
 * Perform silent login and load additional data if necessary.
 * @param {Function} load Callback function to load additional data after login.
 */
export async function slientLoginWithLoad(load: () => void): Promise<void> {
  const loggedIn = await isLogin();
  if (!loggedIn) {
    await silentLogin();
  }
  load();
}
