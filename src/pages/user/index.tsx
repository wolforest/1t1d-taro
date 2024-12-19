import { Button } from '@tarojs/components'

const Index = () => {
  const onGetPhoneNumber = async (e) => {
    if (e.detail.errMsg === 'getPhoneNumber:ok') {
      // 获取成功，发送code到服务端解密
      const code = e.detail.code
      console.log('手机号授权code:', code)
      console.log('手机号授权detail:', e.detail)
    }
  }

  return (
    <Button openType="getPhoneNumber" onGetPhoneNumber={onGetPhoneNumber}>
      授权手机号
    </Button>

  )
}

// import { Input, Form, Button } from '@tarojs/components'

// const Index = () => {
//   const onSubmit = (e) => {
//     const nickname = e.detail.value.nickname
//     console.log('用户输入的昵称:', nickname)
//   }

//   return (
//     <Form onSubmit={onSubmit}>
//       <Input type="nickname" name="nickname" placeholder="请输入昵称" />
//       <Button formType="submit">确认</Button>
//     </Form>
//   )
// }

// import { Button } from '@tarojs/components'

// const Index = () => {
//   const onChooseAvatar = (e) => {
//     const url = e?.detail?.avatarUrl
//     // 注意：这里获取的是临时链接，需要上传到自己的服务器
//     console.log('临时头像链接:', url)
//   }

//   return (
//     <Button openType="chooseAvatar" onChooseAvatar={onChooseAvatar}>
//       授权头像
//     </Button>
//   )
// }

export default Index;
