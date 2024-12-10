export default defineAppConfig({
  pages: [
    'pages/splash/index',
    'pages/intro/index',
    'pages/index/index',
    'pages/favorites/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    selectedColor: '#d55f5b',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '',
        iconPath: 'assets/home_icon.png',
        selectedIconPath: 'assets/home_icon_active.png',
      },
      {
        pagePath: 'pages/favorites/index',
        text: '',
        iconPath: 'assets/favorites_icon.png',
        selectedIconPath: 'assets/favorites_icon_active.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '',
        iconPath: 'assets/mine_icon.png',
        selectedIconPath: 'assets/mine_icon_active.png',
      },
    ],
  },
})
