import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { Image, Ellipsis, Tag, Space } from "@nutui/nutui-react-taro"
import { Follow, Message } from '@nutui/icons-react-taro'
import qs from 'query-string';
import styles from './index.module.scss'

type IProps = {
  data: any
  docType: string
}

const Index = ({ data, docType }: IProps) => {
  const { cover , title, introduction, tag } = data;

  const onCommentClick = (event: any) => {
    event.stopPropagation();
    Taro.showToast({ title: '评论功能开发中' })
  }

  const onFollowClick = (event: any) => {
    // TODO: 调用取消收藏接口, 刷新收藏列表
    event.stopPropagation();
    Taro.showToast({ title: data?.collected ? '取消收藏' : '收藏成功' })
  }

  const onClick = () => {
    if (data.docType !== 90) {
      return Taro.navigateTo({
        url: `/pages/document/index?${qs.stringify({
          ownerId: data.ownerId,
          docNo: data.docNo,
          title: data.title,
          docType,
        })}`
      })
    }
    return Taro.navigateTo({
      url: `/pages/article/index?${qs.stringify({
        ownerId: data.ownerId,
        docNo: data.docNo,
        title: data.title,
        docType
      })}`
    })
  }

  return (
    <View className={styles.articleRow} onClick={onClick}>
      <Image className={styles.logo} mode="widthFix" width={100} src={cover || 'https://1t1d.com/images/no-picture.png'} />
      <View className={styles.info}>
        <Ellipsis className={styles.title} content={title} direction="end" rows="1" />
        <Ellipsis className={styles.introduction} content={introduction} direction="end" rows="2" />
        <Space className={styles.tags}>
          {tag.user?.map((item) => (
              <Tag key={item} background="#E9E9E9" color="#999999">{item}</Tag>
          ))}
        </Space>
        <View className={styles.actions}>
          <View className={styles.item} onClick={onCommentClick}>
            <Message size={14} color={data?.commented ? '#d55f5b' : '#666'} />
            <Text className={styles.text}>评论</Text>
          </View>
          <View className={styles.item} onClick={onFollowClick}>
            <Follow size={14} color={data?.collected ? '#d55f5b' : '#666'} />
            <Text className={styles.text}>收藏</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Index
