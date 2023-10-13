import { fetch } from '@/service'

export const getUserList = async () => fetch.get('/user')

export const loginApi = async (data: { username: string; password: string }) =>
  fetch.post('/user/login', data)
