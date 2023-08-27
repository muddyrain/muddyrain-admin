import { Former, Tabler } from '@/components'
import { FC, useEffect, useState } from 'react'
import { columns } from './columns'
import { getUserList } from '@/api'

export const User: FC = () => {
  const [state, dispatch] = useState({
    list: [],
  })
  const getList = async () => {
    const res = await getUserList()
    console.log(res)
  }
  useEffect(() => {
    getList()
  }, [])
  return (
    <>
      <Former
        submitText={null}
        resetText={null}
        dataSource={[
          {
            label: '用户名',
            key: 'userName',
            view: 'Input',
          },
        ]}
      />
      <Tabler columns={columns} dataSource={[]} />
    </>
  )
}
