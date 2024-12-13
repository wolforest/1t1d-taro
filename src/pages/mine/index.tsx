// import React from 'react'
import { View, Text, Button } from '@tarojs/components'
import { Avatar } from '@nutui/nutui-react-taro'
import { UserAdd, Share, Order, Shop, Service } from '@nutui/icons-react-taro'
import { getUserInfoWithStorage } from '@utils/request'
import useSetState from '@hooks/useSetState'
import Taro from '@tarojs/taro'
import styles from './index.module.scss'

type State = {
  user: {
    avatar: string
    name: string
    membership: boolean
    membershipEndDate: string
  }
}

const actionItems = [
  {
    id: 'share',
    icon: Share,
    text: '分享好友',
  },
  {
    id: 'news',
    icon: Order,
    text: '最新动态',
    onClick: () => Taro.navigateTo({ url: '/pages/webview/index?url=https://1t1d.com' }),
  },
  {
    id: 'aboutUs',
    icon: Shop,
    text: '关于我们',
    onClick: () => Taro.navigateTo({ url: '/pages/webview/index?url=https://1t1d.com/index/info?key=aboutUs' }),
  },
  {
    id: 'aboutUs',
    icon: Service,
    text: '联系我们',
    onClick: () => Taro.navigateTo({ url: '/pages/webview/index?url=https://1t1d.com/index/info?key=aboutUs' }),
  },
  {
    id: 'aboutUs',
    icon: UserAdd,
    text: '加入我们',
    onClick: () => Taro.navigateTo({ url: '/pages/webview/index?url=https://1t1d.com/index/info?key=aboutUs' }),
  },
]

function Index() {
  const user = getUserInfoWithStorage()
  const [state] = useSetState<State>({
    user: {
      avatar: user?.avatar ?? 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png',
      name: user?.name ?? '好学的小码仙',
      membership: user?.membership ?? true,
      membershipEndDate: user?.membershipEndDate ?? '2024-12-31',
    },
  })

  return (
    <View className={styles.mine}>
      {/* 头像和昵称 */}
      <View className={styles.profile}>
        <Avatar size="90" src={state.user.avatar} />
        <Text className={styles.nick}>{state.user.name}</Text>
      </View>

      {/* 会员卡信息 */}
      <View className={styles.membershipCard}>
        <Text className={styles.membershipTitle}>会员卡</Text>
        <Text className={styles.membershipStatus}>
          {state.user.membership ? '已开通' : '未开通'}
        </Text>
        {state.user.membership && (
          <Text className={styles.membershipDate}>
            有效期至：{state.user.membershipEndDate}
          </Text>
        )}
        <View
          className={styles.renewButton}
          onClick={() => Taro.showToast({ title: '续费功能开发中', icon: 'none' })}
        >
          续费 ¥ 99 元 / 年
        </View>
      </View>

      {/* 功能选项 */}
      <View className={styles.actionList}>
        {actionItems.map((item) => (
          item.id === 'share' ? (
            <Button
              key={item.id}
              openType="share"
              className={styles.actionItemShare}
            >
              <item.icon className={styles.icon} />
              <Text className={styles.text}>{item.text}</Text>
              <View className={styles.arrow} />
            </Button>
          ) : (
            <View
              key={item.id}
              className={styles.actionItem}
              onClick={item.onClick}
            >
              <item.icon className={styles.icon} />
              <Text className={styles.text}>{item.text}</Text>
              <View className={styles.arrow} />
            </View>
          )
        ))}
      </View>
    </View>
  )
}

export default Index
