import { request } from '@utils/request'
import type { Response } from '@utils/request'
import type { IDocumentListParams } from '@interfaces/home'

export async function getFavoritesListData(data: IDocumentListParams): Promise<Response<any> | null> {
  const res = await request({
    // url: 'document/list/byOwner',
    // url: 'document/list/byTag', // TODO: 临时加下首页数据测试, 后期以收藏接口返回内容为准
    url: 'document/list/byType', // TODO: 临时加下首页数据测试, 后期以收藏接口返回内容为准
    method: 'GET',
    data: {
      // docKey: '9d0848ebf2db4e348682eeca0f7a8675', // TODO: 临时加下首页数据测试, 后期以收藏接口返回内容为准
      // ownerId: 1, // TODO: 临时加下首页数据测试, 后期以收藏接口返回内容为准
      docType: 90,
      ...data,
    }
  })
  if (res.success) {
    return res as Response<any>
  }
  return null
}



