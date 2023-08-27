import { RoutesProps } from '@/constant/types'
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
]
