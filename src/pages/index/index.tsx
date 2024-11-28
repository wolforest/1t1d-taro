import Taro from '@tarojs/taro';
import { useState } from 'react';
import { View, Input, Button } from '@tarojs/components'
import './index.scss'

// hello world
// function Index() {
//   return (
//     <View className='home-page'>
//       Taro Hello World! {age}
//     </View>
//   )
// }

// 场景 1：计数器
// function Index() {
//   return (
//     <View className='home-page'>
//       Taro Hello World! {age}
//     </View>
//   )
// }

// function Index() {
//   const [age, setAge] = useState(18);

//   return (
//     <View className='home-page'>
//       Taro Hello World! {age}
//       <Button onClick={() => setAge(19)}>点击age变成19</Button>
//     </View>
//   )
// }

// // 场景 1：计数器
// function Index() {
//   const [count, setCount] = useState(0); // 初始化状态为 0

//   return (
//     <View>
//       <Text>当前计数：{count}</Text>
//       <Button onClick={() => setCount(count + 1)}>增加</Button>
//       <Button onClick={() => setCount(count - 1)}>减少</Button>
//     </View>
//   );

// }

// function Index() {
//   const [isOn, setIsOn] = useState(false); // 初始化状态为 false

//   return (
//     <View>
//       <Button onClick={() => setIsOn(!isOn)}>
//         {isOn ? '关' : '开'}
//       </Button>
//       <Text>状态：{isOn ? '已开启' : '已关闭'}</Text>
//     </View>
//   );

// }

// function Index() {
//   const [inputValue, setInputValue] = useState(''); // 初始化为空字符串

//   return (
//     <View>
//       <Input
//         value={inputValue}
//         placeholder="请输入内容"
//         onInput={(e) => setInputValue(e.target.value)}
//       />
//       <Text>您输入的内容：{inputValue}</Text>
//     </View>
//   );
// }

// function Index() {
//   const [items, setItems] = useState([]); // 初始化为空数组

//   const addItem = () => {
//     const newItem = `项目 ${items.length + 1}`;
//     setItems([ ...items, newItem ]); // 使用扩展运算符追加新项目
//   };

//   return (
//     <View>
//       <Button onClick={addItem}>添加项目</Button>
//       {items.map((item, index) => (
//         <Text key={index}>{item}</Text>
//       ))}
//     </View>
//   );
// }

function Index() {
  const [username, setUsername] = useState(''); // 用户名状态
  const [email, setEmail] = useState(''); // 邮箱状态

  const handleSubmit = () => {
    if (!username || !email) {
      Taro.showToast({ title: '请输入完整信息', icon: 'none' });
      return;
    }

    console.log('提交成功：', { username, email });
    Taro.showToast({ title: '提交成功', icon: 'success' });

    // 清空表单内容
    setUsername('');
    setEmail('');
  };

  return (
    <View>
      <Input
        placeholder="请输入用户名"
        value={username}
        onInput={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="请输入邮箱"
        value={email}
        onInput={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleSubmit}>提交</Button>
    </View>
  );
}

export default Index
