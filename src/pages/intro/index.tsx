import { useEffect } from 'react';
import Taro, { useShareAppMessage } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { Button, Collapse } from '@nutui/nutui-react-taro';
// import { getCurrentUser, slientLoginWithLoad } from '@utils/session'
import { ArrowDown } from '@nutui/icons-react-taro';
import type { IHomeData, IExpert, IQuestion } from '@interfaces/home';
import { getWinIntroData } from '@services/home';
import introImage from '@assets/intro.png';
import expertsImage from '@assets/experts.png';
import useSetState from '@hooks/useSetState';
import styles from './index.module.scss';

type State = {
  experts: IExpert[]
  questions: IQuestion[]
}

const Index = () => {
  const [state, setState] = useSetState<State>({
    experts: [],
    questions: [],
  })

  useShareAppMessage(() => {
    return {
      path: 'pages/intro/index',
      title: '码仙之路',
      imageUrl: '',
    }
  })

  const load = async() => {
    Taro.showLoading({ title: '加载中...' })
    const data: IHomeData | null = await getWinIntroData();
    if (data) {
      setState({
        experts: (data?.experts ?? []) as IExpert[],
        questions: (data?.questions ?? []) as IQuestion[],
      });
    }
    Taro.hideLoading();
  }

  useEffect(() => {
    setTimeout(() => {
      // slientLoginWithLoad(load);
      load();
    }, 200)
  }, [])

  const onPaySuccess = () => {
    Taro.showLoading({ title: '加载中...' });
    Taro.showToast({ title: '支付成功' });
    setTimeout(() => {
      Taro.switchTab({ url: '/pages/index/index' });
    }, 1000);
    Taro.hideLoading()
  }

  return (
    <View className={styles.intro}>
      <Image className={styles.image} src={introImage} mode="widthFix" />
      <Image
        className={styles.image}
        src={expertsImage}
        mode="widthFix"
      />
      <View className={styles.cell}>
        <Text className={styles.title}>常见问题</Text>
      </View>

      {!!state.questions.length && (
        <Collapse
          // defaultActiveName={state.questions.map((_: IQuestion, itemIndex: number) => String(itemIndex + 1))}
          expandIcon={<ArrowDown size={16} />}
        >
          {state.questions.map((item: IQuestion, itemIndex: number) => (
            <Collapse.Item
              key={`question${itemIndex}`}
              title={item.question}
              name={String(itemIndex + 1)}
            >
              <Text dangerouslySetInnerHTML={{ __html: item.answer }} />
            </Collapse.Item>
          ))}
        </Collapse>
      )}
      <View className={styles.pay}>
        {/* <Button className={styles.btn} type="primary" fill="outline" onClick={onPaySuccess}>¥ 9.9 元 / 月</Button> */}
        <Button className={styles.btn} color="#d55f5b"  block onClick={onPaySuccess}>¥ 99 元 / 年</Button>
      </View>
    </View>
  )
}

export default Index
