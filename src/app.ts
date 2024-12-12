import { useDidShow, useDidHide } from '@tarojs/taro'
import { silentLogin } from '@utils/session'

// 全局样式
import './app.scss'

function App(props) {
  const load = async () => {
    silentLogin()
  }

  // 对应 onShow
  useDidShow(() => {
    load();
  })

  // 对应 onHide
  useDidHide(() => {})

  return props.children
}

export default App
