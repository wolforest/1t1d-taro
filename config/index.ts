import path from 'path';
const config = {
  projectName: '1t1d-taro',
  date: '2024-11-16',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    '@tarojs/plugin-html',
    // 引入 npm 安装的插件
    '@tarojs/plugin-mock',
    // 引入 npm 安装的插件，并传入插件参数
    [
      '@tarojs/plugin-mock',
      {
        mocks: {
          '/api/win/public/miniIntro': {
            "success": true,
            "code": "SUCCESS",
            "codeType": 0,
            "message": "",
            "data": {
                "questions": [
                    {
                        "question": "你将获得什么？",
                        "answer": "1. 中英文技术干货，精选，日更\n2. 最全的『书型』共创软件知识库\n3. 推荐就可以挣点小钱，坚持会有惊喜\n 详情请访问 https://1t1d.com"
                    },
                    {
                        "question": "怎样学习最高效？",
                        "answer": "内卷时代，时间被严重碎片化\n这时最有效的学习方式是\n碎片化学习 + 体系化沉淀"
                    },
                    {
                        "question": "我们怎么实现体系化？",
                        "answer": "精选 -> 清单: 一维信息分组 \n清单 -> 专题: 多维知识沉淀\n专题 -> 小书: 微创新才是真创新"
                    },
                    {
                        "question": "为什么要立刻开始？",
                        "answer": "早鸟价当然不是理由\n知识库是学习机会，更是创作机会\n知识是一颗树，每个节点先到先得。"
                    }
                ],
                "prices": [
                    {
                        "price": 9.9,
                        "name": "￥99/年"
                    }
                ]
            }
          }
        }
      }
    ]
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: { enable: false }
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    // esnextModules: ['nutui-react'],
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  alias: {
    '@utils': path.join(__dirname, './../src/utils'),
    '@components': path.join(__dirname, './../src/components'),
    '@hooks': path.join(__dirname, './../src/hooks'),
    '@assets': path.join(__dirname, './../src/assets'),
    '@services': path.join(__dirname, './../src/services'),
    '@interfaces': path.join(__dirname, './../src/interfaces'),
    $: path.join(__dirname, './../src')
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
