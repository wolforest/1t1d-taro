import { useState } from 'react';
import { View, Button, Text } from '@tarojs/components'
import HelloTaro from './HelloTaro';


function Index() {
  const [count, setCount] = useState(0); // 初始化状态为 0

  return (
    <View>
      <Text>当前计数：{count}</Text>
      <Button onClick={() => setCount(count + 1)}>增加</Button>
      <Button onClick={() => setCount(count - 1)}>减少</Button>
      <HelloTaro name="Taro" count={count} />
    </View>
  );
}

export default Index


// function Index() {
//   return (
//     <View>
//       <HelloTaro name="Taro"/>
//     </View>
//   );
// }

// export default Index;

// function Index() {
//   return (
//     <View>
//       <HelloTaro />
//     </View>
//   );
// }

// export default Index;
