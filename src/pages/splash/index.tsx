import { useEffect } from 'react'
// import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Image } from "@nutui/nutui-react-taro"
import guideImage from '@assets/guide.png'
import styles from './index.module.scss'

function Index() {
  useEffect(() => {
    setTimeout(() => {
      // 模拟数据请求, 请求完数据后, 跳转到下一个业务页面
      // Taro.redirectTo({ url: '/pages/intro/index' })
    }, 2000);
  }, [])
  return (
    <View className={styles.splash}>
      <Image
        className={styles.image}
        src={guideImage}
      />
    </View>
  )
}

export default Index
