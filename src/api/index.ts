import { fetch } from '@/service'
import { PaginationType } from '@/types'

export const getUserList = async (data: PaginationType) => fetch.get('/user', { params: data })
export const getArticleList = async (data: PaginationType) =>
  fetch.get('/article', { params: data })

export const loginApi = async (data: { username: string; password: string }) =>
  fetch.post('/user/login', data)
