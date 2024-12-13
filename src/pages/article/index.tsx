// import React from 'react'
// import '@tarojs/taro/html.css';
import '@tarojs/taro/html5.css';
import Taro, { useRouter, useLoad } from '@tarojs/taro'
import { useEffect } from 'react';
import { View, Text } from '@tarojs/components'
import { getArticleDetailData } from '@services/home'
import useSetState from '@hooks/useSetState'
import styles from './index.module.scss'
import './webpage.css';

(Taro as any).options.html.transformElement = (el) => {
  if (el.nodeName === 'image') {
    el.setAttribute('mode', 'widthFix')
    el.setAttribute('class', 'image-full-width')
    const originalStyle = el.getAttribute('style') || ''
    const styleWithoutWidth = originalStyle.replace(/width\s*:\s*[^;]+;?/g, '')
    el.setAttribute('style', `${styleWithoutWidth}width: 100% !important;`)
  }
  return el
}

type State = {
  detail: any
  docNo: string
  docType: string
  ownerId: string
}

const Index = () => {
  const router = useRouter();
  const params: any = (router?.params || {}) as unknown as any;
  const [state, setState] = useSetState<State>({
    detail: '',
    docNo: String(decodeURIComponent(params?.docNo)),
    docType: String(decodeURIComponent(params?.docType)),
    ownerId: String(decodeURIComponent(params?.ownerId))
  })

  useLoad(() => {
    Taro.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffffff',
      animation: {
          duration: 400,
          timingFunc: 'easeIn'
      }
    })
  })

  const load = async () => {
    // const fetchFun = state.docType === 'article' ? getArticleDetailData : getDocumenteDetailData
    const fetchFun = getArticleDetailData
    const ret = await fetchFun({
      docNo: state.docNo,
      ownerId: state.ownerId,
    });

    let detail: string = ret?.data?.detail?.detail ?? '';
    if (detail) {
      detail = detail.replace(/&nbsp;/g, ' ');
      detail = detail.replace(/<br [^>]*\>/g, "\n");
    }

    setState({
      detail: detail,
    })

    if (ret?.data?.title) {
      Taro.setNavigationBarTitle({
        title: ret?.data?.title
      })
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <View className={styles.article}>
      {state.detail ? (
        <View
          className={`${styles.content} ${styles.article_html} taro_html`}
          dangerouslySetInnerHTML={{ __html: state.detail ?? '' }}
        />
      ) : (
        <Text className={styles.empty}>暂无数据</Text>
      )}
    </View>
  )
}

export default Index
