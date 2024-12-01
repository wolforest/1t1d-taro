import { View, Text } from '@tarojs/components';

function HelloTaro({ name, count }) {
  return (
    <View>
      <Text>{`Hello, ${name}!`}</Text>
      <Text>{`子组件接收到的count: ${count}`}</Text>
    </View>
  );
}

export default HelloTaro;

// function HelloTaro({ name }) {
//   return (
//     <View>
//       <Text>{`Hello, ${name}!`}</Text>
//     </View>
//   );
// }

// export default HelloTaro;



// function HelloTaro() {
//   return (
//     <View>
//       <Text>Hello, Taro!</Text>
//     </View>
//   );
// }

// export default HelloTaro;
