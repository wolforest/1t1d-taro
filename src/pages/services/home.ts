import qs from 'query-string'
import { request } from '@utils/request'
import type { Response } from '@utils/request'
import type { IHomeData, IDocumentListParams, IArticleDetailParams } from '@interfaces/home'

export async function getWinIntroData(): Promise<IHomeData | null> {
  const res = await request({
    url: `/win/public/miniIntro`,
    method: 'GET',
    session: false
  })
  if (res.success) {
    return res.data as IHomeData
  }
  return null
}
export async function getDocumentTreeData(): Promise<Response<any> | null> {
  const res = await request({
    url: 'document/detail/byNo/240107030111111111100001?ownerId=1',
    method: 'GET',
  })
  if (res.success) {
    return res as Response<any>
  }
  return null
}

export async function getDocumentListByTagData(data: IDocumentListParams): Promise<Response<any> | null> {
  const res = await request({
    url: `/document/list/byTag`,
    method: 'GET',
    data
  })
  if (res.success) {
    return res as Response<any>
  }
  return null
}

export async function getDocumentListData(data: IDocumentListParams): Promise<Response<any> | null> {
  const res = await request({
    url: `/document/list/byList`,
    method: 'GET',
    data
  })
  if (res.success) {
    return res as Response<any>
  }
  return null
}

export async function getArticleDetailData(data: IArticleDetailParams): Promise<Response<any> | null> {
  const res = await request({
    url: `/bookmark/detail/byNo?${qs.stringify(data)}`,
    method: 'GET',
    // data
  })
  if (res.success) {
    return res as Response<any>
  }
  return null
}

export async function getDocumenteDetailData(data: IArticleDetailParams): Promise<Response<any> | null> {
  const res = await request({
    url: `/document/detail/byNo/${data.docNo}`,
    method: 'GET',
    data
  })
  if (res.success) {
    return res as Response<any>
  }
  return null
}


