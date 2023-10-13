import { ImageError } from '@/assets'
import { Image } from 'antd'
import { TablerProps } from 'muddyrain/dist/tabler'

export const columns: TablerProps['columns'] = [
  {
    title: '用户名',
    dataIndex: 'userName',
    width: 200,
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    width: 200,
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
    width: 200,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    width: 200,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 200,
  },
  {
    title: '头像',
    dataIndex: 'userName',
    width: 200,
    render(value) {
      return <Image src={value} fallback={ImageError} width={100} height={100} />
    },
  },
  {
    title: '创建时间',
    dataIndex: 'formatted_create_time',
    width: 200,
  },
]
