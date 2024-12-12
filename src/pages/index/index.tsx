import { useEffect, useRef } from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import { Tabs, InfiniteLoading, Radio, Popup } from "@nutui/nutui-react-taro";
import { Loading, ArrowDown, ArrowUp, FaceSmile } from '@nutui/icons-react-taro'
import DocumentRow from '@components/DocumentRow'
import cx from 'classnames'
import { getDocumentListData, getDocumentTreeData, getDocumentListByTagData } from '@services/home'
import useSetState from '@hooks/useSetState'
import styles from './index.module.scss'

type ITab = {
  key: string
  title: string
}

type State = {
  tabs: ITab[]
  tabValue: string
  hasNextPage: boolean
  dataList: any[]
  visible: boolean
  current: number
  pageSize: number
  category: any[]
  tags: any[]
  radioValue: string
  currentSwiperIndex: number
}

function Index() {
  const radioGroupRef = useRef<any>(null);
  const tabs = [
    {
      key: "bc454cc216af4f359654160fe702114d",
      title: "中文精选"
    },
    {
      key: "202e9587d10c4625a1b15f71954a2bda",
      title: "英文精选"
    },
    {
      key: "240106030111111111100001",
      title: "知识清单"
    },
  ];

  const [state, setState] = useSetState<State>({
    tabs,
    tabValue: tabs[0]?.key,
    hasNextPage: true,
    dataList: [],
    visible: false,
    current: 1,
    pageSize: 10,
    category: [],
    tags: [],
    radioValue: '',
    currentSwiperIndex: 0
  })

  const loadList = async (value = state.tabValue, current = state.current, preDataList: any = [], args: any = {}) => {
    let fetchFun: any = () => {};
    let params: any = {}
    let newValue = args?.hasTag ? args?.radioValue : value
    if (isDocumentList(value)) {
      fetchFun = getDocumentListData;
      params = {
        current,
        pageSize: state.pageSize,
        listNo: newValue,
        ownerId: 1,
      }
    } else {
      fetchFun = getDocumentListByTagData;
      params = {
        current,
        pageSize: state.pageSize,
        docKey: newValue,
        ownerId: 1,
      }
    }
    const ret = await fetchFun(params);
    setState({
      current: ret?.current,
      hasNextPage: ret?.hasNextPage,
      dataList: [...preDataList.concat(ret?.list ?? [])]
    })
  }

  const loadTabs = async() => {
    const ret: any = await getDocumentTreeData();
    const category = ret?.data?.property?.category || []
    let tabsArray: any = state.tabs;
    if (category?.length) {
      const [,,...otherTabs] = state.tabs;
      tabsArray = category.map((item: any) => ({
        key: item.key,
        title: item.title
      })).concat(otherTabs)
    }
    setState({
      category: ret?.data?.property?.category || [],
      tabs: tabsArray,
      tabValue: tabsArray?.[0]?.key,
      tags: category?.[0]?.children?.map?.((tag: any) => ({
        key: tag.key,
        title: tag.title
      }))
    })

    loadList(tabsArray?.[0]?.key, 1)
  }

  const load = () => {
    loadTabs();
  }

  useEffect(() => {
    load();
  }, [])

  const isDocumentList = (value = state.tabValue) => ![0, 1].includes(tabs.findIndex((tab: any) => tab.key === value));

  const onLoadMore = async () => {
    loadList(state.tabValue, state.current + 1, state.dataList)
  }

  const onTabsChange = (value: string) => {
    if (state.tabValue === value)  return;
    const index = state.tabs.findIndex(tab => tab.key === value);
    setState({
      tabValue: value,
      visible: false,
      radioValue: '',
      currentSwiperIndex: index,
      tags: state.category.find((item: any) => item.key === value)?.children?.map?.((tag: any) => ({
        key: tag.key,
        title: tag.title
      }))
    });
    loadList(value, 1);
  }

  const onRadioChange = (value: string) => {
    if (state.radioValue === value) return;

    loadList(state.tabValue, 1, [], { hasTag: true, radioValue: value })
    setState({ radioValue: value, visible: false });
  }

  const getDocType = () => {
    return isDocumentList() ? 'document' : 'article'
  }

  const onVisibleClick = (event: any) => {
    event.stopPropagation();
    setState({ visible: !state.visible });
  }

  const renderTags = (allowWrap = false, arrowDown = true) => {
    if (!isDocumentList() && state.tags?.length) {
      return (
        <View className={cx(styles.tags, { [styles.allowWrap]: allowWrap })}>
          <Radio.Group
            ref={radioGroupRef}
            value={state.radioValue}
            direction="horizontal"
            onChange={onRadioChange}
            className={styles.radioGroup}
          >
            {state.tags?.map?.((tag: any) => (
              <Radio
                key={tag.key}
                shape="button"
                value={tag.key}
                id={tag.key}
                className={styles.radioButton}
              >
                {tag.title}
              </Radio>
            ))}
          </Radio.Group>
          <View className={styles.arrow} onClick={onVisibleClick}>
            {arrowDown ? (
              <ArrowDown size="16" />
            ) : (
              <ArrowUp size="16" />
            )}
          </View>
        </View>
      )
    }
  }

  const handleSwiperChange = (e: any) => {
    const { current } = e.detail;
    const newTabValue = state.tabs[current].key;
    setState({
      currentSwiperIndex: current,
      tabValue: newTabValue,
      visible: false,
      radioValue: '',
      tags: state.category.find((item: any) => item.key === newTabValue)?.children?.map?.((tag: any) => ({
        key: tag.key,
        title: tag.title
      }))
    });
    loadList(newTabValue, 1);
  }

  const renderLoading = () => {
    return (
      <View className={styles.loadingWrapper}>
        <Loading className={styles.loadingIcon} />
        <Text className={styles.loadingText}>加载中</Text>
      </View>
    )
  }

  const renderLoadMore = () => {
    return (
      <View className={styles.loadMoreWrapper}>
        <FaceSmile className={styles.loadMoreIcon} />
        <Text className={styles.loadMoreText}>没有更多了～</Text>
      </View>
    )
  }

  const renderPopup = () => {
    if (!state.visible) return null;

    return (
      <Popup
        key={`popup-${state.tabValue}`}
        overlayClassName={styles.popupOverlay}
        className={styles.popupContent}
        visible={state.visible}
        destroyOnClose={false}
        overlay
        position="top"
        zIndex={1000}
        style={{ top: '44px' }}
        onClose={() => {
          setState({ visible: false })
        }}
      >
        {renderTags(true, false)}
      </Popup>
    )
  }

  const renderContent = () => {
    return (
      <Swiper
        className={cx(styles.swiper, { [styles.noTags]: isDocumentList() })}
        current={state.currentSwiperIndex}
        onChange={handleSwiperChange}
      >
        {state.tabs.map((tab, index) => (
          <SwiperItem key={tab.key}>
            <ul
              className={styles.tabPaneContent}
              id={`infiniteLoading-${index}`}
            >
              <InfiniteLoading
                target={`infiniteLoading-${index}`}
                loadingText={renderLoading()}
                loadMoreText={renderLoadMore()}
                hasMore={state.hasNextPage}
                onLoadMore={onLoadMore}
              >
                {state.dataList.map((item, idx) => (
                  <DocumentRow
                    key={`dataItem-${idx}-${item.docNo}`}
                    data={item}
                    docType={getDocType()}
                  />
                ))}
              </InfiniteLoading>
            </ul>
          </SwiperItem>
        ))}
      </Swiper>
    )
  }

  return (
    <View className={styles.home}>
      <Tabs
        tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}
        value={state.tabValue}
        onChange={onTabsChange}
        activeType="smile"
      >
        {state.tabs.map((item: ITab) => (
          <Tabs.TabPane
            key={item.key}
            title={item.title}
            value={item.key}
          >
            {renderTags()}
          </Tabs.TabPane>
        ))}
      </Tabs>
      {renderContent()}
      {renderPopup()}
    </View>
  )
}

export default Index
