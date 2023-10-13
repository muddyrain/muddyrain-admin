import { Former, Tabler } from '@/components'
import { FC, useEffect } from 'react'
import { columns } from './columns'
import { getArticleList } from '@/api'
import { useSetState } from 'ahooks'
import type { ArticleType } from '@/types'
import { Button, Space } from 'antd'
import { RestOutlined, SearchOutlined } from '@ant-design/icons'

export const Article: FC = () => {
  const [state, dispatch] = useSetState({
    data: [] as ArticleType[],
    loading: false,
    page: 1,
    pageSize: 10,
    total: 0,
    updater: +new Date(),
  })
  const { data, page, pageSize, total, loading, updater } = state
  const [$form] = Former.useForm()
  const getList = async () => {
    dispatch({
      loading: true,
    })
    const res = await getArticleList({
      page,
      pageSize,
    })
    dispatch({
      data: res.data || [],
      loading: false,
      total: res.total || 0,
    })
  }
  const onRefresh = () => {
    dispatch({
      updater: +new Date(),
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
        itemClassName="w-1/3"
        layout="flex"
        form={$form}
        dataSource={[
          {
            label: '用户名',
            key: 'userName',
            view: 'Input',
          },
        ]}
      />
      <Space className="flex w-full justify-end mb-2">
        <Button
          icon={<SearchOutlined />}
          type="primary"
          onClick={() => {
            onRefresh()
          }}
        >
          查询
        </Button>
        <Button
          icon={<RestOutlined />}
          onClick={() => {
            $form.resetFields()
            onRefresh()
          }}
        >
          重置
        </Button>
      </Space>
      <Tabler
        columns={columns}
        rowKey="id"
        bordered
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
