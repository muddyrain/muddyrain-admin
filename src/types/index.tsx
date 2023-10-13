/**
 * @description: 用户信息类型
 */
export interface UserType {
  id: number
  userName: string
  password: string
}

export interface PaginationType {
  page: number
  pageSize: number
}
