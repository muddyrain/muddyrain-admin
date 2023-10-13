import { ImageError } from '@/assets'
import { Image } from 'antd'
import { TablerProps } from 'muddyrain/dist/tabler'

export const columns: TablerProps['columns'] = [
  {
    title: '标题',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '主题',
    dataIndex: 'theme',
    width: 200,
  },
  {
    title: '创建者',
    dataIndex: 'user',
    width: 200,
    render: text => {
      return text.nickName || text.userName || '-'
    },
  },
  {
    title: '创建时间',
    dataIndex: 'formatted_create_time',
    width: 200,
  },
]
