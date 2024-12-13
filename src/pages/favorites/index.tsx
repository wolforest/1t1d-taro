// import React from 'react'
import { useRouter } from '@tarojs/taro'
import { useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import { InfiniteLoading } from "@nutui/nutui-react-taro";
import { Loading, FaceSmile } from '@nutui/icons-react-taro'
import DocumentRow from '@components/DocumentRow'
import useSetState from '@hooks/useSetState'
import { getFavoritesListData } from '@services/favorites'
import styles from './index.module.scss'

type State = {
  hasNextPage: boolean
  dataList: any[]
  visible: boolean
  current: number
  pageSize: number
  docNo: string
  docType: string
}

const Index = () => {
  const router = useRouter();
  const params: any = (router?.params || {}) as unknown as any;
  const [state, setState] = useSetState<State>({
    hasNextPage: true,
    dataList: [],
    visible: false,
    current: 1,
    pageSize: 10,
    docNo: String(decodeURIComponent(params?.docNo)),
    docType: String(decodeURIComponent(params?.docType)),
  })

  const load = async (current = state.current, preDataList: any = []) => {
    const ret = await getFavoritesListData({
      current,
      pageSize: state.pageSize,
    });
    setState({
      current: ret?.current || 1,
      hasNextPage: !!ret?.hasNextPage,
      dataList: [...preDataList.concat(ret?.list ?? [])]
    })
  }

  useEffect(() => {
    load()
  }, [])

  const onLoadMore = async () => {
    load(state.current + 1, state.dataList)
  }

  const renderContent = () => {
    return (
      <ul
        className={styles.tabPaneContent}
        id="favoritesInfiniteLoading"
      >
        <InfiniteLoading
          target="favoritesInfiniteLoading"
          loadingText={
            <>
              <Loading />
              <Text>加载中</Text>
            </>
          }
          loadMoreText={
            <>
              <FaceSmile />
              <Text>没有更多了～</Text>
            </>
          }
          hasMore={state.hasNextPage}
          onLoadMore={onLoadMore}
        >
          {state.dataList.map((item, index) => {
            return (
              <DocumentRow
                key={`docDataItem${index}${item.docNo}`}
                data={{
                  ...item,
                  collected: true, // TODO: 临时加上已收藏标识, 后期以收藏接口返回为准
                }}
                docType={state.docType}
              />
            )
          })}
        </InfiniteLoading>
      </ul>
    )
  }

  return (
    <View className={styles.favorites}>
      {renderContent()}
    </View>
  )
}

export default Index
