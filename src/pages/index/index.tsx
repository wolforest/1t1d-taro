import { useState, useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss'

function Index() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // 每秒增加 1
    }, 1000);

    return () => clearInterval(timer); // 清理定时器
  }, []); // 空依赖数组

  return (
    <View>
      <Text>计时器：{time} 秒</Text>
    </View>
  );
}

export default Index;


// function Index() {
//   const [data, setData] = useState(null);

//   async function fetchData() {
//     const response = await Taro.request({ url: 'https://api.example.com/data' });
//     setData(response.data);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []); // 空依赖数组，表示仅在组件挂载时运行一次

//   return (
//     <View>
//       {data ? <Text>数据：{data.name}</Text> : <Text>加载中...</Text>}
//     </View>
//   );
// }

// export default Index;

// function Index() {

//   // 模拟卸载 componentWillUnmount
//   useEffect(() => {
//     // 清理函数（类似 componentWillUnmount）
//     return () => {
//       console.log('组件卸载'); // 在组件卸载时触发
//     };
//   }, []);

//   return (
//     <View className='home-page'>
//       Hello useEffect!
//     </View>
//   );
// }

// export default Index;


// function Index() {
//   const [count, setCount] = useState(0);

//   // 模拟更新 componentDidUpdate
//   useEffect(() => {
//     console.log('组件更新');  // 当组件更新时触发
//   }, [count]); // 依赖 count，count 变化时重新执行 effect

//   return (
//     <View>
//       <Text>当前计数：{count}</Text>
//       <Button onClick={() => setCount(count + 1)}>增加</Button>
//       <Button onClick={() => setCount(count - 1)}>减少</Button>
//     </View>
//   );
// }

// export default Index;


// function Index() {

//   // 模拟 componentDidMount
//   useEffect(() => {
//     console.log('组件挂载');  // 当组件挂载时触发
//   }, []);

//   return (
//     <View className='home-page'>
//       Hello useEffect!
//     </View>
//   );
// }

// export default Index;


// function Index() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`当前 count 值为：${count}`);
//   }, [count]); // 依赖 count，当 count 变化时触发

//   return (
//     <View>
//       <Text>当前计数：{count}</Text>
//       <Button onClick={() => setCount(count + 1)}>增加</Button>
//       <Button onClick={() => setCount(count - 1)}>减少</Button>
//     </View>
//   );
// }

// export default Index;

// useEffect 的基础用法

// function Index() {
//   useEffect(() => {
//     console.log(`fetch api data`);
//   }, []);
//   return (
//     <View className='home-page'>
//       Hello useEffect!
//     </View>
//   )
// }

