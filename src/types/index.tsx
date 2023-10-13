/**
 * @description: 用户信息类型
 */
export interface UserType {
  id: number
  userName: string
  password: string
}
/**
 * @description: 文章信息类型
 */
export interface ArticleType {
  id: number
}

export interface PaginationType {
  page: number
  pageSize: number
}
