import { fetch } from '@/service'

export const getUserList = async () => fetch.get('/user')
