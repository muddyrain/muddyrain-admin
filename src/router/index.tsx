import { RoutesProps } from '@/constant/types'
import { ArticlePage } from '@/pages/blog-management'
import { HomePage } from '@/pages/home'
import { LoginPage } from '@/pages/login'
import { UserPage } from '@/pages/settings'
export const routes: RoutesProps[] = [
  {
    path: '/login',
    name: '登录',
    element: <LoginPage />,
    pure: true,
    hideMenu: true,
  },
  {
    path: '/',
    name: '首页',
    element: <HomePage />,
  },
  {
    path: '/settings',
    name: '系统设置',
    children: [
      {
        path: '/user',
        name: '用户管理',
        element: <UserPage />,
      },
    ],
  },
  {
    path: '/blog-management',
    name: '文章管理',
    children: [
      {
        path: '/article',
        name: '文章管理',
        element: <ArticlePage />,
      },
    ],
  },
]
