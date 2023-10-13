import { Former, Tabler } from '@/components'
import { FC, useEffect } from 'react'
import { columns } from './columns'
import { getUserList } from '@/api'
import { useSetState } from 'ahooks'
import type { UserType } from '@/types'

export const User: FC = () => {
  const [state, dispatch] = useSetState({
    data: [] as UserType[],
    loading: false,
    page: 1,
    pageSize: 10,
    total: 0,
    updater: +new Date(),
  })
  const { data, page, pageSize, total, loading, updater } = state
  const getList = async () => {
    dispatch({
      loading: true,
    })
    const res = await getUserList({
      page,
      pageSize,
    })
    dispatch({
      data: res.data || [],
      loading: false,
      total: res.total || 0,
    })
  }
  useEffect(() => {
    getList()
  }, [page, pageSize, updater])
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
      <Tabler
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{
          total,
          current: page,
          pageSize,
          onChange: (page, pageSize) => {
            dispatch({
              page,
              pageSize,
            })
          },
        }}
        dataSource={data}
      />
    </>
  )
}
