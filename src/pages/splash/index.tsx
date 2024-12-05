import { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Image } from "@nutui/nutui-react-taro"
import guideImage from '@assets/guide.png'
import styles from './index.module.scss'

// function Index() {
//   // 伪代码：权限校验后跳转
//   // const checkAuthAndRedirect = (targetUrl) => {
//   //   if (!isLoggedIn()) {
//   //     // 跳转登录页， 登录成功之后， 跳转targetUrl
//   //     Taro.redirectTo({
//   //       url: `/pages/login/login?targetUrl=${targetUrl}`,
//   //     });
//   //   } else {
//   //     Taro.redirectTo({
//   //       url: targetUrl,
//   //     });
//   //   }
//   // }

//   // checkAuthAndRedirect('/pages/intro/index');


//   // 伪代码：表单验证后跳转
//   // const submitForm = (formData) => {
//   //   if (validateForm(formData)) {
//   //     Taro.redirectTo({
//   //       url: `/pages/success/index?formId=${formData.id}`,
//   //     });
//   //   } else {
//   //     Taro.showToast({ title: '表单验证失败', icon: 'error' });
//   //   }
//   // }

//   useEffect(() => {
//     setTimeout(() => {
//       // 模拟数据请求, 请求完数据后, 跳转到下一个业务页面
//       Taro.redirectTo({
//         url: '/pages/index/index',
//       });
//     }, 2000);
//   }, [])
//   return (
//     <View className={styles.splash}>
//       <Image
//         className={styles.image}
//         src={guideImage}
//       />
//     </View>
//   )
// }

// export default Index

// function Index() {
//   useEffect(() => {
//     setTimeout(() => {
//       // 模拟数据请求, 请求完数据后, 跳转到下一个业务页面
//       Taro.redirectTo({
//         url: '/pages/index/index',
//       });
//     }, 2000);
//   }, [])
//   return (
//     <View className={styles.splash}>
//       <Image
//         className={styles.image}
//         src={guideImage}
//       />
//     </View>
//   )
// }

// export default Index

function Index() {
  useEffect(() => {
    setTimeout(() => {
      // 模拟数据请求, 请求完数据后, 跳转到下一个业务页面
      Taro.redirectTo({ url: '/pages/intro/index' })
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
