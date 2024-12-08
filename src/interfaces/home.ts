export type IExpert = {
  name: string
  title: string
  avatar: string
  intro: string
}

export type IQuestion = {
  question: string
  answer: string
}

export type IHomeData = {
  experts?: IExpert
  questions?: IQuestion
}

export type IDocumentListParams = {
  current: number
  pageSize: number
  ownerId?: number | string
  listNo?: string
  docNo?: string
  docType?: number
}


export type IArticleDetailParams = {
  ownerId?: number | string
  docNo?: string
}
