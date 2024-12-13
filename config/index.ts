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
    '@tarojs/plugin-mock',
    [
      '@tarojs/plugin-mock',
      {
        mocks: {
          '/api/document/detail/byNo/tree': {
            "success": true,
            "code": "SUCCESS",
            "codeType": 0,
            "message": "",
            "data": {
                "id": 599,
                "docNo": "240107030111111111100001",
                "ownerId": 1,
                "sourceNo": "",
                "creatorId": 0,
                "status": 0,
                "docType": 2020,
                "language": 0,
                "title": "精选日更",
                "subtitle": "",
                "url": "",
                "cover": "",
                "media": {},
                "property": {
                    "category": [
                        {
                            "key": "bc454cc216af4f359654160fe702114d",
                            "title": "中文文章精选",
                            "children": [
                                {
                                    "key": "9d0848ebf2db4e348682eeca0f7a8675",
                                    "title": "编程思想",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "f0abb3846f8d4d918d3eb319f051b9b8",
                                    "title": "后端",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "a53b27eab32e462fb7adcb72eb65cd05",
                                    "title": "前端",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "5396ab4bf53541dab8a4c1a71dd6c59a",
                                    "title": "Andriod",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "79fd7efc55d449da88b542721ed3ea6e",
                                    "title": "iOS",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "b747cd4c6f3e4f45876723845a5d9cb3",
                                    "title": "跨平台",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "f1cfdc911f3e45e9b7c034e8916b7e69",
                                    "title": "软件工程",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "d76f3e891aeb4781ab129180d82155d5",
                                    "title": "大数据",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "629265b9f42f49faa9129741e8a51a74",
                                    "title": "人工智能",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "f80326b39dbb4255a74a6f5c717ebb5e",
                                    "title": "软件测试",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "4d1681dfb00544c0951d9a71695a8d22",
                                    "title": "系统运维",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "8caa12dbb1f740f0b49eabc1a7acc772",
                                    "title": "编码人生",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "f824c4ed4e914a909721574b80094b64",
                                    "title": "算法与应用",
                                    "parent": "bc454cc216af4f359654160fe702114d",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                }
                            ]
                        },
                        {
                            "key": "202e9587d10c4625a1b15f71954a2bda",
                            "title": "英文文章精选",
                            "children": [
                                {
                                    "key": "e7182d52c0994df3948a094827365c94",
                                    "title": "Principles",
                                    "parent": "202e9587d10c4625a1b15f71954a2bda",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "770c2eb17bb94bd399e1956d2dce53f4",
                                    "title": "Backend",
                                    "parent": "202e9587d10c4625a1b15f71954a2bda",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "42e3a18defec448cb06e684644ad917c",
                                    "title": "FrontEnd",
                                    "parent": "202e9587d10c4625a1b15f71954a2bda",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "21d7e588eebf4a4389ef4cae0f4eb32a",
                                    "title": "AI",
                                    "parent": "202e9587d10c4625a1b15f71954a2bda",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "5391be44e30246b5b3001d54df884c20",
                                    "title": "Mobile",
                                    "parent": "202e9587d10c4625a1b15f71954a2bda",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "94590930ba5640839df12b7df6ae78af",
                                    "title": "DevOps",
                                    "parent": "202e9587d10c4625a1b15f71954a2bda",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "2da8d5e09b90495cb2d75204fd490ad0",
                                    "title": "Python",
                                    "parent": "202e9587d10c4625a1b15f71954a2bda",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "99c7de84c614494da671371452a6c98d",
                                    "title": "Alogrithm",
                                    "parent": "202e9587d10c4625a1b15f71954a2bda",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "1fe7a6e9f1da44cd9f81900199ba3fff",
                                    "title": "Coding life",
                                    "parent": "202e9587d10c4625a1b15f71954a2bda",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "19d55c4a684d402d9a5f852c73413c1e",
                                    "title": "Software Engineering",
                                    "parent": "202e9587d10c4625a1b15f71954a2bda",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                }
                            ]
                        },
                        {
                            "key": "32e9f2af01264b21b50273a6a47cd89b",
                            "title": "每天一点",
                            "docType": 2000,
                            "children": [
                                {
                                    "key": "9d5e5c5cc1384e1db46f31e1857e82e8",
                                    "title": "技术图书",
                                    "parent": "32e9f2af01264b21b50273a6a47cd89b",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "de407f906cc142c78e1c3a234593a7ee",
                                    "title": "技术课程",
                                    "parent": "32e9f2af01264b21b50273a6a47cd89b",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "c8347e5c34914578887e280a4a040ab8",
                                    "title": "视频推荐",
                                    "parent": "32e9f2af01264b21b50273a6a47cd89b",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "ff2e6b10cb5e4e08b2c0502cb6e3e5b3",
                                    "title": "开源项目",
                                    "parent": "32e9f2af01264b21b50273a6a47cd89b",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                },
                                {
                                    "key": "6bd1d21c996647ffaedc5fdb9d881cb4",
                                    "title": "博客/公众号",
                                    "parent": "32e9f2af01264b21b50273a6a47cd89b",
                                    "docType": 2000,
                                    "children": [],
                                    "property": {
                                        "searchTags": [],
                                        "subscribeTags": []
                                    }
                                }
                            ]
                        }
                    ]
                },
                "permission": {},
                "tag": {},
                "detailInfo": {},
                "introduction": "",
                "version": 92,
                "deleteFlag": 0,
                "lastEditor": 0,
                "createdAt": "2024-10-09T00:00:00",
                "updatedAt": "2024-11-08T00:00:00",
                "detail": null
            }
          },
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
          },
          '/api/document/list/byTag': {
            "success": true,
            "code": "SUCCESS",
            "codeType": 0,
            "message": "",
            "data": null,
            "list": [
                {
                    "id": 7050,
                    "docNo": "241206030111118611100001",
                    "ownerId": 1,
                    "sourceNo": "10cc073468275ec3718be744d622adb1",
                    "creatorId": 2,
                    "status": 0,
                    "docType": 90,
                    "language": 0,
                    "title": "自己写插件-实现时间戳自由",
                    "subtitle": "",
                    "url": "https://mp.weixin.qq.com/s/z9PosaypLAums1C1eKXvRg",
                    "cover": "https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/a79a639d-e4af-4540-a934-c2e79e34d462.jpeg",
                    "media": {},
                    "property": {
                        "list": {},
                        "作者": "京东科技：张环",
                        "sourceKey": "eeefd9c1903fb24489b4419597c8ee2e",
                        "公众号": "京东云开发者"
                    },
                    "permission": {},
                    "tag": {
                        "tags": [
                            "谷歌插件",
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05",
                            "oi_1",
                            "tp_90"
                        ],
                        "user": [
                            "谷歌插件"
                        ],
                        "category": [
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05"
                        ]
                    },
                    "detailInfo": {},
                    "introduction": "受这篇文章《人人都能手写的chrome插件，帮我省了1000多块钱》启发，再加自己空闲时间学了一些前端的皮毛，以及实际工作需求，多种契机决定自己动手完成一个时间戳转换的谷歌插件。",
                    "version": 0,
                    "deleteFlag": 0,
                    "lastEditor": 0,
                    "createdAt": "2024-12-06T19:01:09.453669",
                    "updatedAt": "2024-12-06T19:01:09.453466",
                    "detail": null
                },
                {
                    "id": 7048,
                    "docNo": "241206030111118601100001",
                    "ownerId": 1,
                    "sourceNo": "ab910a1eea09669992489ad9d211bb6f",
                    "creatorId": 2,
                    "status": 0,
                    "docType": 90,
                    "language": 0,
                    "title": "Taro小程序开发性能优化实践",
                    "subtitle": "",
                    "url": "https://mp.weixin.qq.com/s/fIL-wCeXinjbWmGD5pT6mg?poc_token=HCbZUmejC_Dmx4VQ7i-8W974yhn3wfKVsVlLMdhi",
                    "cover": "https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/be76fdb3-fe5e-473c-8f05-501e0feeb933.jpeg",
                    "media": {},
                    "property": {
                        "list": {},
                        "作者": "京东零售：姜海",
                        "sourceKey": "c3b029a686c7178cf30b9a824ccf0bae",
                        "公众号": "京东云开发者"
                    },
                    "permission": {},
                    "tag": {
                        "tags": [
                            "性能优化",
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05",
                            "oi_1",
                            "tp_90"
                        ],
                        "user": [
                            "性能优化"
                        ],
                        "category": [
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05"
                        ]
                    },
                    "detailInfo": {},
                    "introduction": "我们团队在利用Taro进行秒送频道小程序的同时，一直在探索性能优化的最佳实践。随着需求的不断迭代，项目中的性能问题难免日积月累，逐渐暴露出来影响用户体验。",
                    "version": 0,
                    "deleteFlag": 0,
                    "lastEditor": 0,
                    "createdAt": "2024-12-06T19:00:09.713548",
                    "updatedAt": "2024-12-06T19:00:09.713406",
                    "detail": null
                },
                {
                    "id": 7031,
                    "docNo": "241205030111118511100001",
                    "ownerId": 1,
                    "sourceNo": "416403710456e32b41210abbaae101c1",
                    "creatorId": 2,
                    "status": 0,
                    "docType": 90,
                    "language": 0,
                    "title": "没试过从0开始实现Raft，就千万别说你会……",
                    "subtitle": "",
                    "url": "https://mp.weixin.qq.com/s/iTNoSpD3hxWgaNBpo0W2aw",
                    "cover": "https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/c3d4f78d-e551-4aa3-b191-331e13a6f67d.jpeg",
                    "media": {},
                    "property": {
                        "list": {},
                        "作者": "古月方块",
                        "sourceKey": "9fb7b601eab596231b9543d6d5492124",
                        "公众号": "dbaplus社群"
                    },
                    "permission": {},
                    "tag": {
                        "tags": [
                            "raft",
                            "算法",
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "f824c4ed4e914a909721574b80094b64",
                            "oi_1",
                            "tp_90"
                        ],
                        "user": [
                            "raft",
                            "算法"
                        ],
                        "category": [
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "f824c4ed4e914a909721574b80094b64"
                        ]
                    },
                    "detailInfo": {},
                    "introduction": "不谈理论！万字长文实战从零开始实现Raft。",
                    "version": 0,
                    "deleteFlag": 0,
                    "lastEditor": 0,
                    "createdAt": "2024-12-05T15:47:01.691825",
                    "updatedAt": "2024-12-05T15:47:01.691664",
                    "detail": null
                },
                {
                    "id": 7013,
                    "docNo": "241204030111118421100001",
                    "ownerId": 1,
                    "sourceNo": "01d58fbdc685354fa80c8ff531344e53",
                    "creatorId": 2,
                    "status": 0,
                    "docType": 90,
                    "language": 0,
                    "title": "前端进阶必须会的Zod ！今天我想和大家分享一个我最近在使用的TypeScript库 —— Zod。简单来说,Zod是一 - 掘金",
                    "subtitle": "",
                    "url": "https://juejin.cn/post/7426923218952847412",
                    "cover": "https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/fbe05398-8aa4-4a76-b7fb-b2ec231375f1.jpeg",
                    "media": {},
                    "property": {
                        "list": {},
                        "sourceKey": "cdfb2f52069595d44d545d000ef73fd2"
                    },
                    "permission": {},
                    "tag": {
                        "tags": [
                            "类型校验",
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05",
                            "oi_1",
                            "tp_90"
                        ],
                        "user": [
                            "类型校验"
                        ],
                        "category": [
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05"
                        ]
                    },
                    "detailInfo": {},
                    "introduction": "今天我想和大家分享一个我最近在使用的TypeScript库 —— Zod。简单来说,Zod是一个用于数据验证的库,它可以让你的TypeScript代码更加安全和可靠。---\ntheme: z-blue\n---\n大家好,我是白露。\n\n今天我想和大家分享一个我最近在使用的TypeScript库 —— Zod。简单来说,Zo",
                    "version": 0,
                    "deleteFlag": 0,
                    "lastEditor": 0,
                    "createdAt": "2024-12-04T09:55:04.718155",
                    "updatedAt": "2024-12-04T09:55:04.717965",
                    "detail": null
                },
                {
                    "id": 7011,
                    "docNo": "241204030111118411100001",
                    "ownerId": 1,
                    "sourceNo": "8d09cd82663d32a6d22fea5e737a1bfb",
                    "creatorId": 2,
                    "status": 0,
                    "docType": 90,
                    "language": 0,
                    "title": "阿里面试：写一个倒计时功能刷掉了80% 的人本文将探讨如何实现高性能、稳定且准确的倒计时器。我们将深入分析定时器API的 - 掘金",
                    "subtitle": "",
                    "url": "https://juejin.cn/post/7343921389084426277",
                    "cover": "https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/49abdb05-17dd-4f1f-95b0-159367c990a1.jpeg",
                    "media": {},
                    "property": {
                        "list": {},
                        "sourceKey": "a10da79286b77305c0adc1c7c1e7a1b4"
                    },
                    "permission": {},
                    "tag": {
                        "tags": [
                            "面试",
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05",
                            "oi_1",
                            "tp_90"
                        ],
                        "user": [
                            "面试"
                        ],
                        "category": [
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05"
                        ]
                    },
                    "detailInfo": {},
                    "introduction": "本文将探讨如何实现高性能、稳定且准确的倒计时器。我们将深入分析定时器API的选择、事件循环的影响、以及时间同步技术，提供最佳实践和代码示例，确保倒计时的精确性和效率。",
                    "version": 0,
                    "deleteFlag": 0,
                    "lastEditor": 0,
                    "createdAt": "2024-12-04T09:51:36.690535",
                    "updatedAt": "2024-12-04T09:51:36.690363",
                    "detail": null
                },
                {
                    "id": 7007,
                    "docNo": "241204030111118391100001",
                    "ownerId": 1,
                    "sourceNo": "6bb8317ebcb3d6c01dd792a3c2191b02",
                    "creatorId": 2,
                    "status": 0,
                    "docType": 90,
                    "language": 0,
                    "title": "每位开发者必须知道的20个 TypeScript 技巧 🚀本文介绍20个实用的 TypeScript 技巧，提升编码效 - 掘金",
                    "subtitle": "",
                    "url": "https://juejin.cn/post/7433410016746848297",
                    "cover": "https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/ef379896-c0a6-4f05-92d1-388502396632.jpeg",
                    "media": {},
                    "property": {
                        "list": {},
                        "sourceKey": "40f339ef84b2342a945e6d001fea6e28"
                    },
                    "permission": {},
                    "tag": {
                        "tags": [
                            "typescript",
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05",
                            "oi_1",
                            "tp_90"
                        ],
                        "user": [
                            "TypeScript"
                        ],
                        "category": [
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05"
                        ]
                    },
                    "detailInfo": {},
                    "introduction": "本文介绍20个实用的 TypeScript 技巧，提升编码效率和代码质量，助力开发者更好地管理数据和类型。---\ntheme: smartblue\n---\nTypeScript 是现代 JavaScript 开发中不可或缺的工具，它提供了类型安全和丰富的特性。许多开发者掌握了基本用法，但还有一些鲜为人知的技巧可以让你的",
                    "version": 0,
                    "deleteFlag": 0,
                    "lastEditor": 0,
                    "createdAt": "2024-12-04T09:29:54.624515",
                    "updatedAt": "2024-12-04T09:29:54.624351",
                    "detail": null
                },
                {
                    "id": 7005,
                    "docNo": "241204030111118381100001",
                    "ownerId": 1,
                    "sourceNo": "7685f1fd8e14820335c5198c7584b692",
                    "creatorId": 2,
                    "status": 0,
                    "docType": 90,
                    "language": 0,
                    "title": "别再用模板语法和'+'来拼接url了在前端开发中，我们经常需要处理URL，例如在发起HTTP请求时构建API端点，或在页 - 掘金",
                    "subtitle": "",
                    "url": "https://juejin.cn/post/7392788843097931802",
                    "cover": "https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/482338c0-756c-4548-a89c-abe9b084e0ff.jpeg",
                    "media": {},
                    "property": {
                        "list": {},
                        "sourceKey": "676ab388013f0a9fae809d0e3263fd7d"
                    },
                    "permission": {},
                    "tag": {
                        "tags": [
                            "javascript",
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05",
                            "oi_1",
                            "tp_90"
                        ],
                        "user": [
                            "JavaScript"
                        ],
                        "category": [
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05"
                        ]
                    },
                    "detailInfo": {},
                    "introduction": "在前端开发中，我们经常需要处理URL，例如在发起HTTP请求时构建API端点，或在页面导航时构建动态链接、拼接动态参数。 过去，我们习惯于使用模板语法和字符串拼接来构建这些URL，现在在代码中依然可在前端开发中，我们经常需要处理URL，例如在发起HTTP请求时构建API端点，或在页面导航时构建动态链接、拼接动态参数。\n",
                    "version": 0,
                    "deleteFlag": 0,
                    "lastEditor": 0,
                    "createdAt": "2024-12-04T09:29:06.693368",
                    "updatedAt": "2024-12-04T09:29:06.693209",
                    "detail": null
                },
                {
                    "id": 7003,
                    "docNo": "241204030111118371100001",
                    "ownerId": 1,
                    "sourceNo": "57b4b716e54263071f9ef80055a5f796",
                    "creatorId": 2,
                    "status": 0,
                    "docType": 90,
                    "language": 0,
                    "title": "只写后台管理的前端要怎么提升自己本人写了五年的后台管理。每次面试前就会头疼，因为写的页面除了表单就是表格。抱怨过苦恼过也 - 掘金",
                    "subtitle": "",
                    "url": "https://juejin.cn/post/7360528073631318027",
                    "cover": "https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/78542174-830c-4804-a7ef-7bd56e9e0893.jpeg",
                    "media": {},
                    "property": {
                        "list": {},
                        "sourceKey": "456e8bc33f35e10e643d2b5c45664087"
                    },
                    "permission": {},
                    "tag": {
                        "tags": [
                            "面试",
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05",
                            "oi_1",
                            "tp_90"
                        ],
                        "user": [
                            "面试"
                        ],
                        "category": [
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05"
                        ]
                    },
                    "detailInfo": {},
                    "introduction": "本人写了五年的后台管理。每次面试前就会头疼，因为写的页面除了表单就是表格。抱怨过苦恼过也后悔过，但是站在现在的时间点回想以前，发现有很多事情可以做的更好，于是有了这篇文---\ntheme: lilsnake\n---\n\n本人写了五年的后台管理。每次面试前就会头疼，因为写的页面除了表单就是表格。抱怨过苦恼过也后悔过，但是站",
                    "version": 0,
                    "deleteFlag": 0,
                    "lastEditor": 0,
                    "createdAt": "2024-12-04T09:12:37.229394",
                    "updatedAt": "2024-12-04T09:12:37.229237",
                    "detail": null
                },
                {
                    "id": 6999,
                    "docNo": "241203030111118351100001",
                    "ownerId": 1,
                    "sourceNo": "a0a969f5cc6659265272e0eedc8df83f",
                    "creatorId": 2,
                    "status": 0,
                    "docType": 90,
                    "language": 0,
                    "title": "短信接口被爆破了，一晚上差点把公司干破产了某晚，公司短信接口遭到恶意爆破攻击，导致大量验证码请求，差一点让公司陷入财务危 - 掘金",
                    "subtitle": "",
                    "url": "https://juejin.cn/post/7413322738315378697",
                    "cover": "https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/ca2a3195-36db-4657-b94e-7e9811b4d988.jpeg",
                    "media": {},
                    "property": {
                        "list": {},
                        "sourceKey": "d7c530244d55591c73ee2426f698971e"
                    },
                    "permission": {},
                    "tag": {
                        "tags": [
                            "2fa",
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05",
                            "oi_1",
                            "tp_90"
                        ],
                        "user": [
                            "2FA"
                        ],
                        "category": [
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05"
                        ]
                    },
                    "detailInfo": {},
                    "introduction": "某晚，公司短信接口遭到恶意爆破攻击，导致大量验证码请求，差一点让公司陷入财务危机。本文深入探讨验证码爆破攻击的原理、常见手段，以及如何通过安全策略和技术手段提升防护，避免类似事件再次发生 背景\n\n某天夜里，你正睡着觉，与周公神游。\n\n老板打来电话：“小李，快看一下，系统出故障了，一个小时发了200条短信，再搞下去，我要",
                    "version": 0,
                    "deleteFlag": 0,
                    "lastEditor": 0,
                    "createdAt": "2024-12-03T13:16:48.94118",
                    "updatedAt": "2024-12-03T13:16:48.941011",
                    "detail": null
                },
                {
                    "id": 6997,
                    "docNo": "241203030111118341100001",
                    "ownerId": 1,
                    "sourceNo": "31e871105b6fc518e84f28988fbede53",
                    "creatorId": 2,
                    "status": 0,
                    "docType": 90,
                    "language": 0,
                    "title": "程序员设计不出精美的 UI 界面？让 V0 来帮你大家好，我是双越，也是 wangEditor 作者。 本文分享一下前端 - 掘金",
                    "subtitle": "",
                    "url": "https://juejin.cn/post/7438647233219903542",
                    "cover": "https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/3190034e-79e2-4110-8f75-22546dff7827.jpeg",
                    "media": {},
                    "property": {
                        "list": {},
                        "sourceKey": "7db7d5be40d5a978a120c609fa59c111"
                    },
                    "permission": {},
                    "tag": {
                        "tags": [
                            "ai赋能",
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05",
                            "oi_1",
                            "tp_90"
                        ],
                        "user": [
                            "AI赋能"
                        ],
                        "category": [
                            "240107030111111111100001",
                            "bc454cc216af4f359654160fe702114d",
                            "a53b27eab32e462fb7adcb72eb65cd05"
                        ]
                    },
                    "detailInfo": {},
                    "introduction": "大家好，我是双越，也是 wangEditor 作者。 本文分享一下前端实用的 AI 工具 v0.dev 以及我在【划水AI】中的实际应用经验，一键生成 UI 代码，美观且专业。",
                    "version": 0,
                    "deleteFlag": 0,
                    "lastEditor": 0,
                    "createdAt": "2024-12-03T13:14:07.544472",
                    "updatedAt": "2024-12-03T13:14:07.544319",
                    "detail": null
                }
            ],
            "total": 1365,
            "pageSize": 10,
            "current": 1,
            "pages": 137,
            "hasNextPage": true,
            "hasPrePage": false,
            "minId": 0,
            "maxId": 0,
            "empty": false
          },
          'POST /api/auth/login/wechat/code': {
            "success": true,
            "code": "SUCCESS",
            "codeType": 0,
            "message": "",
            "data": {
                "success": true,
                "newAccount": false,
                "code": "VALIDATION_SUCCESS",
                "message": "VALIDATION_SUCCESS",
                "accountId": 10000000000013,
                "user": {
                    "accountId": 10000000000013,
                    "name": "好学的小码仙",
                    "avatar": null,
                    "photo": null,
                    "introduction": null,
                    "property": {},
                    "space": {
                        "accountId": 10000000000013,
                        "spaceId": 10000000000013,
                        "spaceType": 1,
                        "accountName": null,
                        "name": "好学的小码仙",
                        "icon": null,
                        "cover": null,
                        "introduction": null,
                        "property": null,
                        "permission": null
                    },
                    "spaceList": []
                },
                "token": {
                    "id": null,
                    "accountId": 10000000000013,
                    "status": null,
                    "clientId": null,
                    "accessToken": "035556d2b8d84b659fb4c855e832b727",
                    "refreshToken": "95195bf211464ce6a65d94ddffdab439",
                    "scope": {},
                    "expiredAt": null,
                    "refreshExpiredAt": null,
                    "version": null,
                    "deleteFlag": null,
                    "lastEditor": null,
                    "createdAt": "2024-12-12T14:30:23.204402983",
                    "updatedAt": null
                }
            }
          },
          '/api/document/list/byList': {
            "success": true,
            "code": "SUCCESS",
            "codeType": 0,
            "message": "",
            "data": null,
            "list": [],
            "total": 0,
            "pageSize": 0,
            "current": 1,
            "pages": 1,
            "hasNextPage": false,
            "hasPrePage": false,
            "minId": 0,
            "maxId": 0,
            "empty": true
          },
          '/api/bookmark/detail/byNo': {
            "success": true,
            "code": "SUCCESS",
            "codeType": 0,
            "message": "",
            "data": {
                "id": 7056,
                "docNo": "241211030111118641100001",
                "ownerId": 1,
                "sourceNo": "a8d06f904ba0a091a13cc2499c2ca739",
                "creatorId": 2,
                "status": 0,
                "docType": 90,
                "language": 0,
                "title": "轻松突破文件IO瓶颈：内存映射mmap技术",
                "subtitle": "",
                "url": "https://mp.weixin.qq.com/s/NGlPzL6VL_0v94kHoZB4XA",
                "cover": "https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/160183a1-bbe5-4ff6-a2b4-d42cdef5f326.jpeg",
                "media": {},
                "property": {
                    "list": {},
                    "作者": "往事敬秋风",
                    "sourceKey": "5e14dfb6cff7440570271a2e769b3b10",
                    "公众号": "深度Linux"
                },
                "permission": {},
                "tag": {
                    "tags": [
                        "内存映射",
                        "mmap",
                        "240107030111111111100001",
                        "bc454cc216af4f359654160fe702114d",
                        "f0abb3846f8d4d918d3eb319f051b9b8",
                        "oi_1",
                        "tp_90"
                    ],
                    "user": [
                        "内存映射",
                        "mmap"
                    ],
                    "category": [
                        "240107030111111111100001",
                        "bc454cc216af4f359654160fe702114d",
                        "f0abb3846f8d4d918d3eb319f051b9b8"
                    ]
                },
                "detailInfo": {},
                "introduction": "在现代应用程序中，文件I/O操作常常成为性能瓶颈。尤其是对于需要频繁读取或写入大量数据的场景，传统的文件读写方式可能无法满足高效性的要求。在这种背景下，内存映射技术（mmap）应运而生。",
                "version": 0,
                "deleteFlag": 0,
                "lastEditor": 0,
                "createdAt": "2024-12-11T13:51:25.473968",
                "updatedAt": "2024-12-11T13:51:25.473824",
                "detail": {
                    "id": 7060,
                    "ownerId": 2,
                    "docNo": "a8d06f904ba0a091a13cc2499c2ca739",
                    "detailType": 0,
                    "detailFormat": 10,
                    "detailStatus": 0,
                    "attachment": {},
                    "detail": "<p style=\"visibility: visible;\" data-style=\"\"><span style=\"font-size: var(--articleFontsize); letter-spacing: 0.034em; visibility: visible;\" data-style=\"\">在现代应用程序中，文件I/O操作常常成为性能瓶颈。尤其是对于需要频繁读取或写入大量数据的场景，传统的文件读写方式可能无法满足高效性的要求。在这种背景下，内存映射技术（mmap）应运而生。通过将文件直接映射到进程的地址空间，mmap可以显著提高文件访问的速度和效率。</span><br style=\"visibility: visible;\" data-style=\"\"></p><section class=\"mp_profile_iframe_wrp\" style=\"visibility: visible;\" data-style=\"\"><mp-common-profile class=\"js_uneditable custom_select_card mp_profile_iframe mp_common_widget js_wx_tap_highlight\" data-pluginname=\"mpprofile\" data-id=\"Mzg4NDQ0OTI4Ng==\" data-headimg=\"http://mmbiz.qpic.cn/mmbiz_png/dkX7hzLPUR0Ao40RncDiakbKx1Dy4uJicoqwn5GZ5r7zSMmpwHdJt32o95wdQmPZrBW038j8oRSSQllpnOUDlmUg/300?wx_fmt=png&amp;wxfrom=19\" data-nickname=\"深度Linux\" data-alias=\"\" data-signature=\"研究领域：Windows&amp;Linux平台、C/C++后端开发、嵌入式和Linux系统内核等。\" data-from=\"0\" data-is_biz_ban=\"0\" data-service_type=\"1\" data-origin_num=\"243\" data-isban=\"0\" data-biz_account_status=\"0\" style=\"visibility: visible;\" data-index=\"0\" data-style=\"\"></mp-common-profile></section><p style=\"visibility: visible;\" data-style=\"\"><span style=\"font-size: var(--articleFontsize); letter-spacing: 0.034em; visibility: visible;\" data-style=\"\">今天，我们将深入探讨内存映射（mmap）技术，它不仅能帮助我们轻松突破文件I/O瓶颈，还能让我们的程序在处理大数据时更加灵活和高效。我们会从基础概念开始讲解，逐步深入到实际应用案例和最佳实践。无论你是刚接触这一领域的新手还是希望优化现有系统的开发者，相信都能从中受益匪浅。</span><span style=\"font-size: var(--articleFontsize); letter-spacing: 0.034em; visibility: visible;\" data-style=\"\"></span></p><h2 data-tool=\"mdnice编辑器\" style=\"margin-top: 30px; margin-bottom: 15px; white-space: normal; -webkit-tap-highlight-color: transparent; outline: 0px; color: rgb(0, 0, 0); letter-spacing: normal; text-align: left; font-family: Optima, &quot;Microsoft YaHei&quot;, PingFangSC-regular, serif; background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(255, 255, 255); border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(239, 112, 96); align-items: unset; border-style: none none solid; border-width: 1px 1px 2px; border-radius: 0px; box-shadow: none; display: flex; flex-direction: unset; height: auto; justify-content: unset; line-height: 1.1em; overflow: unset; text-shadow: none; transform: none; width: auto; -webkit-box-reflect: unset; visibility: visible;\" data-style=\"\"><span style=\"margin-right: 5px; padding: 3px 10px 1px; -webkit-tap-highlight-color: transparent; outline: 0px; font-size: 22px; color: rgb(255, 255, 255); background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(239, 112, 96); line-height: 1.5em; letter-spacing: 0em; align-items: unset; border-style: none; border-width: 1px; border-color: rgb(0, 0, 0); border-radius: 3px 3px 0px 0px; box-shadow: none; display: inline-block; font-weight: bold; flex-direction: unset; float: unset; height: auto; justify-content: unset; overflow: unset; text-indent: 0em; text-shadow: none; transform: none; width: auto; -webkit-box-reflect: unset; visibility: visible;\" data-style=\"\">一、mmap技术简介</span></h2><p style=\"visibility: visible;\" data-style=\"\"><span style=\"font-size: var(--articleFontsize); letter-spacing: 0.034em; visibility: visible;\" data-style=\"\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(25, 27, 31); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: medium; letter-spacing: normal; text-align: start; visibility: visible;\" data-style=\"\">mmap 即 memory map，也就是内存映射。</span><span style=\"background-color: rgb(255, 255, 255); color: rgb(25, 27, 31); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: medium; letter-spacing: normal; text-align: start; visibility: visible;\" data-style=\"\">mmap 是一种内存映射文件的方法，即</span><span style=\"color: rgb(25, 27, 31); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: medium; letter-spacing: normal; text-align: start; font-weight: 600; visibility: visible;\" data-style=\"\">将一个文件或者其它对象映射到进程的地址空间，实现文件磁盘地址和进程虚拟地址空间中一段虚拟地址的一一对映关系</span><span style=\"background-color: rgb(255, 255, 255); color: rgb(25, 27, 31); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: medium; letter-spacing: normal; text-align: start; visibility: visible;\" data-style=\"\">。</span><span style=\"background-color: rgb(255, 255, 255); color: rgb(25, 27, 31); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: medium; letter-spacing: normal; text-align: start; visibility: visible;\" data-style=\"\">实现这样的映射关系后，进程就可以采用指针的方式读写操作这一段内存，而系统会自动回写脏页面到对应的文件磁盘上，即完成了对文件的操作而不必再调用 read、write 等系统调用函数。</span><span style=\"background-color: rgb(255, 255, 255); color: rgb(25, 27, 31); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: medium; letter-spacing: normal; text-align: start; visibility: visible;\" data-style=\"\">相反，内核空间对这段区域的修改也直接反映用户空间，从而可以实现不同进程间的文件共享。</span></p><p data-pid=\"lOszj62f\" style=\"margin-top: 1.4em; margin-bottom: 1.4em; color: rgb(25, 27, 31); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: medium; letter-spacing: normal; text-align: start; white-space: normal; background-color: rgb(255, 255, 255); visibility: visible;\" data-style=\"\"><span style=\"font-weight: 600; visibility: visible;\" data-style=\"\">如下图所示：</span></p><figure data-size=\"normal\" style=\"margin-top: 1.4em; margin-bottom: 1.4em; visibility: visible;\" data-style=\"\"><img class=\"rich_pages wxw-img\" data-imgfileid=\"100006786\" data-ratio=\"0.5486111111111112\" data-src=\"\" data-type=\"other\" data-w=\"720\" height=\"395\" style=\"display: block; margin-right: auto; margin-left: auto; cursor: zoom-in; animation: 0.5s ease-in 0s 1 normal none running animation-1yvu044; width: 677px !important; height: auto !important; visibility: visible !important;\" width=\"720\" data-original-style=\"display: block;margin-right: auto;margin-left: auto;cursor: zoom-in;animation: 0.5s ease-in 0s 1 normal none running animation-1yvu044;width: 690px;\" data-index=\"1\" src=\"https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/4134b341-0000-4353-adc2-7634c9e19624.jpeg\" _width=\"677px\" crossorigin=\"anonymous\" alt=\"Image\" data-fail=\"0\" source-src=\"https://mmbiz.qpic.cn/mmbiz_jpg/dkX7hzLPUR0TghzOe4aJHRAmicX4ibic2xbpKRCOfkW3ElxicSldziaOrr7M29sqdsDfk4SRNIRXg2ZrBx1MgLOupTA/640?wx_fmt=other&amp;from=appmsg\" data-style=\"\"><span style=\"background-color: rgb(255, 255, 255);color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;\" data-style=\"\">mmap的作用，在应用这一层，是让你把文件的某一段，当作内存一样来访问。</span><span style=\"background-color: rgb(255, 255, 255);color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;\" data-style=\"\">将文件映射到物理内存，将进程虚拟空间映射到那块内存。</span><span style=\"background-color: rgb(255, 255, 255);color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;\" data-style=\"\">这样，进程不仅能像访问内存一样读写文件，多个进程映射同一文件，还能保证虚拟空间映射到同一块物理内存，达到内存共享的作用。</span></figure><p data-pid=\"8QOL5ucC\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">mmap 是 Linux 中用处非常广泛的一个系统调用，它将一个文件或者其它对象映射进内存。文件被映射到多个页上，如果文件的大小不是所有页的大小之和，最后一个页不被使用的空间将会清零。mmap 必须以 PAGE_SIZE 为单位进行映射，而内存也只能以页为单位进行映射，若要映射非 PAGE_SIZE 整数倍的地址范围，要先进行内存对齐，强行以 PAGE_SIZE 的倍数大小进行映射。</p><p data-pid=\"f4yTi5wy\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">其函数原型为：void *mmap (void start, size_t length, int prot, int flags, int fd, off_t offset);int munmap(void start, size_t length);。下面介绍一下内存映射的步骤：</p><ul class=\"list-paddingleft-1\" style=\"list-style-type: disc;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">用 open 系统调用打开文件，并返回描述符 fd。</p></li><li data-style=\"\"><p data-style=\"\">用 mmap 建立内存映射，并返回映射首地址指针 start。</p></li><li data-style=\"\"><p data-style=\"\">对映射（文件）进行各种操作，如显示（printf）、修改（sprintf）等。</p></li><li data-style=\"\"><p data-style=\"\">用 munmap (void *start, size_t length) 关闭内存映射。</p></li><li data-style=\"\"><p data-style=\"\">用 close 系统调用关闭文件 fd。</p></li></ul><h2 data-tool=\"mdnice编辑器\" style=\"margin-top: 30px;margin-bottom: 15px;white-space: normal;-webkit-tap-highlight-color: transparent;outline: 0px;color: rgb(0, 0, 0);letter-spacing: normal;text-align: left;font-family: Optima, &quot;Microsoft YaHei&quot;, PingFangSC-regular, serif;background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(255, 255, 255);border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(239, 112, 96);align-items: unset;border-style: none none solid;border-width: 1px 1px 2px;border-radius: 0px;box-shadow: none;display: flex;flex-direction: unset;height: auto;justify-content: unset;line-height: 1.1em;overflow: unset;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;\" data-style=\"\"><span style=\"margin-right: 5px;padding: 3px 10px 1px;-webkit-tap-highlight-color: transparent;outline: 0px;font-size: 22px;color: rgb(255, 255, 255);background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(239, 112, 96);line-height: 1.5em;letter-spacing: 0em;align-items: unset;border-style: none;border-width: 1px;border-color: rgb(0, 0, 0);border-radius: 3px 3px 0px 0px;box-shadow: none;display: inline-block;font-weight: bold;flex-direction: unset;float: unset;height: auto;justify-content: unset;overflow: unset;text-indent: 0em;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;\" data-style=\"\">二、mmap工作原理</span></h2><p data-pid=\"pZKRSEBF\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">mmap函数创建一个新的vm_area_struct结构，并将其与文件/设备的物理地址相连。</p><p data-pid=\"uYoOuGob\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">vm_area_struct：</span>linux使用vm_area_struct来表示一个独立的虚拟内存区域，一个进程可以使用多个vm_area_struct来表示不用类型的虚拟内存区域（如堆，栈，代码段，MMAP区域等）。</p><p data-pid=\"kD3cCDbu\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">vm_area_struct结构中包含了区域起始地址。同时也包含了一个vm_opt指针，其内部可引出所有针对这个区域可以使用的系统调用函数。从而，进程可以通过vm_area_struct获取操作这段内存区域所需的任何信息。</p><p data-pid=\"dGuVEa2I\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">进程通过vma操作内存，而vma与文件/设备的物理地址相连，系统自动回写脏页面到对应的文件磁盘上（或写入到设备地址空间），实现内存映射文件。</p><p data-pid=\"As8C4ujw\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">内存映射文件的原理：</span></p><p data-pid=\"VkZ0xnqx\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">首先创建虚拟区间并完成地址映射，此时还没有将任何文件数据拷贝至主存。当进程发起读写操作时，会访问虚拟地址空间，通过查询页表，发现这段地址不在物理页上，因为只建立了地址映射，真正的数据还没有拷贝到内存，因此引发缺页异常。缺页异常经过一系列判断，确定无非法操作后，内核发起请求调页过程。</p><p data-pid=\"yJ4DkN75\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">最终会调用nopage函数把所缺的页从文件在磁盘里的地址拷贝到物理内存。之后进程便可以对这片主存进行读写，如果写操作修改了内容，一定时间后系统会自动回写脏页面到对应的磁盘地址，完成了写入到文件的过程。另外，也可以调用msync()来强制同步，这样所写的内存就能立刻保存到文件中。</p><p data-pid=\"kTwBmgzo\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">mmap内存映射的实现过程，总的来说可以分为三个阶段：</span></p><p data-pid=\"EF5OMrBE\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">⑴进程启动映射过程，并在虚拟地址空间中为映射创建虚拟映射区域</p><ul class=\"list-paddingleft-1\" style=\"list-style-type: square;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">进程在用户空间调用库函数mmap，原型：void *mmap(void *start, size_t length, int prot, int flags, int fd, off_t offset);</p></li><li data-style=\"\"><p data-style=\"\">在当前进程的虚拟地址空间中，寻找一段空闲的满足要求的连续的虚拟地址</p></li><li data-style=\"\"><p data-style=\"\">为此虚拟区分配一个vm_area_struct结构，接着对这个结构的各个域进行了初始化</p></li><li data-style=\"\"><p data-style=\"\">将新建的虚拟区结构（vm_area_struct）插入进程的虚拟地址区域链表或树中</p></li></ul><p data-pid=\"RUncEsdM\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">⑵调用内核空间的系统调用函数mmap（不同于用户空间函数），实现文件物理地址和进程虚拟地址的一一映射关系</p><ul class=\"list-paddingleft-1\" style=\"list-style-type: square;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">为映射分配了新的虚拟地址区域后，通过待映射的文件指针，在文件描述符表中找到对应的文件描述符，通过文件描述符，链接到内核“已打开文件集”中该文件的文件结构体（struct file），每个文件结构体维护着和这个已打开文件相关各项信息。</p></li><li data-style=\"\"><p data-style=\"\">通过该文件的文件结构体，链接到file_operations模块，调用内核函数mmap，其原型为：int mmap(struct file *filp, struct vm_area_struct *vma)，不同于用户空间库函数。</p></li><li data-style=\"\"><p data-style=\"\">内核mmap函数通过虚拟文件系统inode模块定位到文件磁盘物理地址。</p></li><li data-style=\"\"><p data-style=\"\">通过remap_pfn_range函数建立页表，即实现了文件地址和虚拟地址区域的映射关系。此时，这片虚拟地址并没有任何数据关联到主存中。</p></li></ul><p data-pid=\"vKUOwfVT\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">⑶进程发起对这片映射空间的访问，引发缺页异常，实现文件内容到物理内存（主存）的拷贝</p><p data-pid=\"4Wy0aYLF\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">注：前两个阶段仅在于创建虚拟区间并完成地址映射，但是并没有将任何文件数据的拷贝至主存。真正的文件读取是当进程发起读或写操作时。</p><ul class=\"list-paddingleft-1\" style=\"list-style-type: square;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">进程的读或写操作访问虚拟地址空间这一段映射地址，通过查询页表，发现这一段地址并不在物理页面上。因为目前只建立了地址映射，真正的硬盘数据还没有拷贝到内存中，因此引发缺页异常。</p></li><li data-style=\"\"><p data-style=\"\">缺页异常进行一系列判断，确定无非法操作后，内核发起请求调页过程。</p></li><li data-style=\"\"><p data-style=\"\">调页过程先在交换缓存空间（swap cache）中寻找需要访问的内存页，如果没有则调用nopage函数把所缺的页从磁盘装入到主存中。</p></li><li data-style=\"\"><p data-style=\"\">之后进程即可对这片主存进行读或者写的操作，如果写操作改变了其内容，一定时间后系统会自动回写脏页面到对应磁盘地址，也即完成了写入到文件的过程。</p></li></ul><p data-pid=\"fF8OaCqB\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">注：修改过的脏页面并不会立即更新回文件中，而是有一段时间的延迟，可以调用msync()来强制同步, 这样所写的内容就能立即保存到文件里了。</p><h2 data-tool=\"mdnice编辑器\" style=\"margin-top: 30px;margin-bottom: 15px;white-space: normal;-webkit-tap-highlight-color: transparent;outline: 0px;color: rgb(0, 0, 0);letter-spacing: normal;text-align: left;font-family: Optima, &quot;Microsoft YaHei&quot;, PingFangSC-regular, serif;background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(255, 255, 255);border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(239, 112, 96);align-items: unset;border-style: none none solid;border-width: 1px 1px 2px;border-radius: 0px;box-shadow: none;display: flex;flex-direction: unset;height: auto;justify-content: unset;line-height: 1.1em;overflow: unset;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;\" data-style=\"\"><span style=\"margin-right: 5px;padding: 3px 10px 1px;-webkit-tap-highlight-color: transparent;outline: 0px;font-size: 22px;color: rgb(255, 255, 255);background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(239, 112, 96);line-height: 1.5em;letter-spacing: 0em;align-items: unset;border-style: none;border-width: 1px;border-color: rgb(0, 0, 0);border-radius: 3px 3px 0px 0px;box-shadow: none;display: inline-block;font-weight: bold;flex-direction: unset;float: unset;height: auto;justify-content: unset;overflow: unset;text-indent: 0em;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;\" data-style=\"\">三、mmap的 I/O模型</span></h2><p data-pid=\"grHBwwHD\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">mmap 也是一种零拷贝技术，其 I/O 模型如下图所示：、</p><figure data-size=\"normal\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><img class=\"rich_pages wxw-img js_img_placeholder wx_img_placeholder\" data-imgfileid=\"100006788\" data-ratio=\"0.5708333333333333\" data-src=\"\" data-type=\"other\" data-w=\"720\" height=\"411\" style=\"display: block; margin-right: auto; margin-left: auto; cursor: zoom-in; animation: 0.5s ease-in 0s 1 normal none running animation-1yvu044; width: 677px !important; height: 386.454px !important;\" width=\"720\" data-original-style=\"display: block;margin-right: auto;margin-left: auto;cursor: zoom-in;animation: 0.5s ease-in 0s 1 normal none running animation-1yvu044;width: 690px;\" data-index=\"2\" src=\"https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/7ade40a2-2f37-4b9b-9b5e-a22133626ca0.jpeg\" _width=\"677px\" crossorigin=\"anonymous\" alt=\"Image\" source-src=\"https://mmbiz.qpic.cn/mmbiz_jpg/dkX7hzLPUR0TghzOe4aJHRAmicX4ibic2xbPkbCNWY5NJSjPkyQqzbRrADt2vJuuTcaXxLx3PqTs425aEUpYtpeMw/640?wx_fmt=other&amp;from=appmsg\" data-style=\"\"></figure><pre style=\"overflow-wrap: initial;background: rgb(248, 248, 250);border-radius: 4px;font-size: 0.9em;overflow: auto;padding: calc(0.888889em);word-break: initial;\" data-style=\"\"><code style=\"background-color: inherit;border-radius: 0px;font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;lucida console&quot;, &quot;Courier New&quot;, monospace;font-size: inherit;\" data-style=\"\">#include &lt;sys/mman.h&gt;<br data-style=\"\">void *mmap(<br data-style=\"\"></code><p data-style=\"\"><code style=\"background-color: inherit;border-radius: 0px;font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;lucida console&quot;, &quot;Courier New&quot;, monospace;font-size: inherit;\" data-style=\"\">void *start,</code></p><p data-style=\"\"><code style=\"background-color: inherit;border-radius: 0px;font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;lucida console&quot;, &quot;Courier New&quot;, monospace;font-size: inherit;\" data-style=\"\">size_t length,</code></p><p data-style=\"\"><code style=\"background-color: inherit;border-radius: 0px;font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;lucida console&quot;, &quot;Courier New&quot;, monospace;font-size: inherit;\" data-style=\"\">int prot,</code></p><p data-style=\"\"><code style=\"background-color: inherit;border-radius: 0px;font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;lucida console&quot;, &quot;Courier New&quot;, monospace;font-size: inherit;\" data-style=\"\">int flags,</code></p><p data-style=\"\"><code style=\"background-color: inherit;border-radius: 0px;font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;lucida console&quot;, &quot;Courier New&quot;, monospace;font-size: inherit;\" data-style=\"\">int fd, off_t offset</code></p><p data-style=\"\"><code style=\"background-color: inherit;border-radius: 0px;font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;lucida console&quot;, &quot;Courier New&quot;, monospace;font-size: inherit;\" data-style=\"\">)</code></p></pre><figure data-size=\"normal\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><img class=\"rich_pages wxw-img js_img_placeholder wx_img_placeholder\" data-imgfileid=\"100006789\" data-ratio=\"0.6327769347496206\" data-src=\"\" data-type=\"other\" data-w=\"659\" height=\"417\" style=\"display: block; margin-right: auto; margin-left: auto; cursor: zoom-in; animation: 0.5s ease-in 0s 1 normal none running animation-1yvu044; width: 677px !important; height: 428.39px !important;\" width=\"659\" data-original-style=\"display: block;margin-right: auto;margin-left: auto;cursor: zoom-in;animation: 0.5s ease-in 0s 1 normal none running animation-1yvu044;width: 690px;\" data-index=\"3\" src=\"https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/860fab23-ac44-4e6f-a4db-3bd2ab477177.jpeg\" _width=\"677px\" crossorigin=\"anonymous\" alt=\"Image\" source-src=\"https://mmbiz.qpic.cn/mmbiz_jpg/dkX7hzLPUR0TghzOe4aJHRAmicX4ibic2xbw3mJv5ZRIeiaSHGzYb4o1W5OGBkHktVkrr5yrVoA5pMxKOuv9ibTORkA/640?wx_fmt=other&amp;from=appmsg\" data-style=\"\"></figure><p data-pid=\"c3aVdhFb\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">mmap 技术有如下特点：</span></p><ul class=\"list-paddingleft-1\" style=\"list-style-type: square;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">利用 DMA 技术来取代 CPU 来在内存与其他组件之间的数据拷贝，例如从磁盘到内存，从内存到网卡；</p></li><li data-style=\"\"><p data-style=\"\">用户空间的 mmap file 使用虚拟内存，实际上并不占据物理内存，只有在内核空间的 kernel buffer cache 才占据实际的物理内存；</p></li><li data-style=\"\"><p data-style=\"\">mmap() 函数需要配合 write() 系统调动进行配合操作，这与 sendfile() 函数有所不同，后者一次性代替了 read() 以及 write()；因此 mmap 也至少需要 4 次上下文切换；</p></li><li data-style=\"\"><p data-style=\"\">mmap 仅仅能够避免内核空间到用户空间的全程 CPU 负责的数据拷贝，但是内核空间内部还是需要全程 CPU 负责的数据拷贝；</p></li></ul><p data-pid=\"3ubaEpUs\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">利用 mmap() 替换 read()，配合 write() 调用的整个流程如下：</span></p><ul class=\"list-paddingleft-1\" style=\"list-style-type: square;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">用户进程调用 mmap()，从用户态陷入内核态，将内核缓冲区映射到用户缓存区；</p></li><li data-style=\"\"><p data-style=\"\">DMA 控制器将数据从硬盘拷贝到内核缓冲区（可见其使用了 Page Cache 机制）；</p></li><li data-style=\"\"><p data-style=\"\">mmap() 返回，上下文从内核态切换回用户态；</p></li><li data-style=\"\"><p data-style=\"\">用户进程调用 write()，尝试把文件数据写到内核里的套接字缓冲区，再次陷入内核态；</p></li><li data-style=\"\"><p data-style=\"\">CPU 将内核缓冲区中的数据拷贝到的套接字缓冲区；</p></li><li data-style=\"\"><p data-style=\"\">DMA 控制器将数据从套接字缓冲区拷贝到网卡完成数据传输；</p></li><li data-style=\"\"><p data-style=\"\">write() 返回，上下文从内核态切换回用户态。</p></li></ul><p style=\"margin-top: 16px;\" data-style=\"\">通过mmap实现的零拷贝I/O进行了4次用户空间与内核空间的上下文切换，以及3次数据拷贝；其中3次数据拷贝中包括了2次DMA拷贝和1次CPU拷贝</p><h3 data-into-catalog-status=\"\" style=\"font-variant-numeric: inherit;font-variant-east-asian: inherit;font-weight: 600;font-stretch: inherit;font-size: 1.1em;line-height: 1.5;font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;margin-top: calc(1.90909em);margin-bottom: calc(1.27273em);clear: left;color: rgb(25, 27, 31);letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">3.1mmap与常规文件操作的区别</h3><p data-pid=\"gNGH6nRt\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">常规文件操作在进行读写时，为了提高效率和保护磁盘，采用了页缓存机制。读文件时，首先将文件页从磁盘拷贝到页缓存中，由于页缓存处于内核空间，用户进程无法直接寻址，所以还需要将页缓存中的数据页再次拷贝到内存对应的用户空间中。写操作也类似，待写入的 buffer 在内核空间不能直接访问，必须先拷贝至内核空间对应的主存，再写回磁盘，同样需要两次数据拷贝。</p><p data-pid=\"xVml8AJw\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">而 mmap 在创建虚拟内存区域和建立映射时无文件拷贝操作。当后续访问数据引发缺页异常时，仅需一次数据拷贝，就可以从磁盘中将数据传入内存的用户空间中，供进程使用。</p><p data-pid=\"xNJs8He4\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">例如，在使用 mmap 操作文件中，以实现进程间通信为例，多个进程可以使用 mmap 来共享内存段，通过已经建立好的映射关系，在访问数据时只进行一次数据拷贝，实现进程间快速通信。</p><p data-pid=\"MTcYGX8P\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">总而言之，常规文件操作需要从磁盘到页缓存再到用户主存的两次数据拷贝。而 mmap 操控文件，只需要从磁盘到用户主存的一次数据拷贝过程。mmap 的关键点在于实现了用户空间和内核空间的数据直接交互，省去了空间不同数据不通的繁琐过程，因此效率更高。</p><h3 data-into-catalog-status=\"\" style=\"font-variant-numeric: inherit;font-variant-east-asian: inherit;font-weight: 600;font-stretch: inherit;font-size: 1.1em;line-height: 1.5;font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;margin-top: calc(1.90909em);margin-bottom: calc(1.27273em);clear: left;color: rgb(25, 27, 31);letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">3.2mmap不是银弹</h3><p data-pid=\"ZxsCX8bI\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">mmap 不是银弹，这意味着 mmap 也有其缺陷，在相关场景下的性能存在缺陷：</p><ul class=\"list-paddingleft-1\" style=\"list-style-type: disc;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">由于 MMAP 使用时必须实现指定好内存映射的大小，因此 mmap 并不适合变长文件；</p></li><li data-style=\"\"><p data-style=\"\">如果更新文件的操作很多，mmap 避免两态拷贝的优势就被摊还，最终还是落在了大量的脏页回写及由此引发的随机 I/O 上，所以在随机写很多的情况下，mmap 方式在效率上不一定会比带缓冲区的一般写快；</p></li><li data-style=\"\"><p data-style=\"\">读/写小文件（例如 16K 以下的文件），mmap 与通过 read 系统调用相比有着更高的开销与延迟；同时 mmap 的刷盘由系统全权控制，但是在小数据量的情况下由应用本身手动控制更好；</p></li><li data-style=\"\"><p data-style=\"\">mmap 受限于操作系统内存大小：例如在 32-bits 的操作系统上，虚拟内存总大小也就 2GB，但由于 mmap 必须要在内存中找到一块连续的地址块，此时你就无法对 4GB 大小的文件完全进行 mmap，在这种情况下你必须分多块分别进行 mmap，但是此时地址内存地址已经不再连续，使用 mmap 的意义大打折扣，而且引入了额外的复杂性；</p></li></ul><h2 data-tool=\"mdnice编辑器\" style=\"margin-top: 30px;margin-bottom: 15px;white-space: normal;-webkit-tap-highlight-color: transparent;outline: 0px;color: rgb(0, 0, 0);letter-spacing: normal;text-align: left;font-family: Optima, &quot;Microsoft YaHei&quot;, PingFangSC-regular, serif;background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(255, 255, 255);border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(239, 112, 96);align-items: unset;border-style: none none solid;border-width: 1px 1px 2px;border-radius: 0px;box-shadow: none;display: flex;flex-direction: unset;height: auto;justify-content: unset;line-height: 1.1em;overflow: unset;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;\" data-style=\"\"><span style=\"margin-right: 5px;padding: 3px 10px 1px;-webkit-tap-highlight-color: transparent;outline: 0px;font-size: 22px;color: rgb(255, 255, 255);background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(239, 112, 96);line-height: 1.5em;letter-spacing: 0em;align-items: unset;border-style: none;border-width: 1px;border-color: rgb(0, 0, 0);border-radius: 3px 3px 0px 0px;box-shadow: none;display: inline-block;font-weight: bold;flex-direction: unset;float: unset;height: auto;justify-content: unset;overflow: unset;text-indent: 0em;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;\" data-style=\"\">四、mmap技术的优势</span></h2><h3 data-into-catalog-status=\"\" style=\"font-variant-numeric: inherit;font-variant-east-asian: inherit;font-weight: 600;font-stretch: inherit;font-size: 1.1em;line-height: 1.5;font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;margin-top: calc(1.90909em);margin-bottom: calc(1.27273em);clear: left;color: rgb(25, 27, 31);letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">4.1简化用户进程编程</h3><p data-pid=\"DpPAzxxw\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">在用户空间看来，通过 mmap 机制以后，磁盘上的文件仿佛直接就在内存中，把访问磁盘文件简化为按地址访问内存。这样一来，应用程序自然不需要使用文件系统的 write（写入）、read（读取）、fsync（同步）等系统调用，因为现在只要面向内存的虚拟空间进行开发。但是，这并不意味着我们不再需要进行这些系统调用，而是说这些系统调用由操作系统在 mmap 机制的内部封装好了。</p><p data-pid=\"mw4Fs7CO\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">①基于缺页异常的懒加载</span></p><p data-pid=\"L6EmI9Wv\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">出于节约物理内存以及 mmap 方法快速返回的目的，mmap 映射采用懒加载机制。具体来说，通过 mmap 申请 1000G 内存可能仅仅占用了 100MB 的虚拟内存空间，甚至没有分配实际的物理内存空间。当你访问相关内存地址时，才会进行真正的 write、read 等系统调用。CPU 会通过陷入缺页异常的方式来将磁盘上的数据加载到物理内存中，此时才会发生真正的物理内存分配。</p><p data-pid=\"vYcLkP-S\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">②数据一致性由 OS 确保</span></p><p data-pid=\"NTYo5RLU\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">当发生数据修改时，内存出现脏页，与磁盘文件出现不一致。mmap 机制下由操作系统自动完成内存数据落盘（脏页回刷），用户进程通常并不需要手动管理数据落盘。</p><h3 data-into-catalog-status=\"\" style=\"font-variant-numeric: inherit;font-variant-east-asian: inherit;font-weight: 600;font-stretch: inherit;font-size: 1.1em;line-height: 1.5;font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;margin-top: calc(1.90909em);margin-bottom: calc(1.27273em);clear: left;color: rgb(25, 27, 31);letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">4.2避免只读操作时的 swap 操作</h3><p data-pid=\"VFiBoypb\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">虚拟内存带来了种种好处，但是一个最大的问题在于所有进程的虚拟内存大小总和可能大于物理内存总大小，因此当操作系统物理内存不够用时，就会把一部分内存 swap 到磁盘上。</p><p data-pid=\"_soLo2aT\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">在 mmap 下，如果虚拟空间没有发生写操作，那么由于通过 mmap 操作得到的内存数据完全可以通过再次调用 mmap 操作映射文件得到。但是，通过其他方式分配的内存，在没有发生写操作的情况下，操作系统并不知道如何简单地从现有文件中（除非其重新执行一遍应用程序，但是代价很大）恢复内存数据，因此必须将内存 swap 到磁盘上。</p><p data-pid=\"yC1LXjCx\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">高效的 I/O 操作方式，尤其在处理大文件或频繁访问文件内容时性能优势明显。</span></p><p data-pid=\"pium-fFx\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">在 Linux 系统中，mmap 是一种非常高效的 I/O 操作方式。当处理大文件或需要频繁访问文件内容时，能够带来很大的性能优势。例如，当一个进程通过 mmap 映射一个文件时，操作系统会在进程的地址空间中创建一个映射区域，使得进程可以直接访问这个文件而不需要进行 read 或 write 系统调用。这种直接内存访问的方式，避免了传统文件访问中多次系统调用和数据复制的开销，提高了文件访问的效率。</p><p data-pid=\"VsoOF8XQ\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">减少 CPU 和内存开销，具有更好的内核态数据传输效率。</span></p><p data-pid=\"kBErw3XV\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">mmap 技术可以减少 CPU 和内存的开销。它通过将文件或设备映射到进程的地址空间中，实现了直接内存访问，避免了内核缓冲区和用户空间缓冲区之间的数据复制。此外，mmap 还具有更好的内核态数据传输效率，有助于减少数据传输时的内存拷贝。例如，在 Kafka 中，Consumer 端对稀疏索引的操作使用了 mmap，将稀疏索引文件进行内存映射，不会招致系统调用以及额外的内存复制开销，从而提高了文件读取效率。</p><p data-pid=\"w7Ms1oMz\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">提升系统整体性能，改善用户体验。</span></p><p data-pid=\"kT0L9tUa\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">合理地利用 mmap 技术，能够提升系统的整体性能，改善用户体验。在开发应用程序时，可以考虑使用 mmap 技术来加速文件访问、减少内存拷贝、提高数据传输效率等方面。例如，在处理大文件时，mmap 可以不用把全部数据都加载到内存，可以通过 MappedByteBuffer 的 position 来设置获取数据的位置，还可以使用虚拟内存来映射超过物理内存大小的大文件。同时，mmap 也支持多进程访问和文件的共享，多个进程可以共享同一个文件的内容，从而减少内存的使用，提高系统的性能。</p><h2 data-tool=\"mdnice编辑器\" style=\"margin-top: 30px;margin-bottom: 15px;white-space: normal;-webkit-tap-highlight-color: transparent;outline: 0px;color: rgb(0, 0, 0);letter-spacing: normal;text-align: left;font-family: Optima, &quot;Microsoft YaHei&quot;, PingFangSC-regular, serif;background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(255, 255, 255);border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(239, 112, 96);align-items: unset;border-style: none none solid;border-width: 1px 1px 2px;border-radius: 0px;box-shadow: none;display: flex;flex-direction: unset;height: auto;justify-content: unset;line-height: 1.1em;overflow: unset;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;\" data-style=\"\"><span style=\"margin-right: 5px;padding: 3px 10px 1px;-webkit-tap-highlight-color: transparent;outline: 0px;font-size: 22px;color: rgb(255, 255, 255);background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(239, 112, 96);line-height: 1.5em;letter-spacing: 0em;align-items: unset;border-style: none;border-width: 1px;border-color: rgb(0, 0, 0);border-radius: 3px 3px 0px 0px;box-shadow: none;display: inline-block;font-weight: bold;flex-direction: unset;float: unset;height: auto;justify-content: unset;overflow: unset;text-indent: 0em;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;\" data-style=\"\">五、mmap技术的应用场景</span></h2><h3 data-into-catalog-status=\"\" style=\"font-variant-numeric: inherit;font-variant-east-asian: inherit;font-weight: 600;font-stretch: inherit;font-size: 1.1em;line-height: 1.5;font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;margin-top: calc(1.90909em);margin-bottom: calc(1.27273em);clear: left;color: rgb(25, 27, 31);letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">5.1内存映射 I/O，加速文件读写操作，适合处理大文件。</h3><p data-pid=\"to63hnj0\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">mmap 可以将文件直接映射到进程的虚拟地址空间，避免了传统文件读写中的多次系统调用和数据拷贝。在处理大文件时，这种方式尤其有效。例如，当需要对一个大型数据文件进行频繁的读写操作时，使用 mmap 可以大大提高效率。通过内存映射，进程可以像访问内存一样访问文件数据，减少了磁盘 I/O 的开销。</p><p data-pid=\"x2MdhzVo\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">参考资料中提到，进程读写数据时，使用 mmap 进行文件映射可以减少一次拷贝操作。磁盘文件直接加载到用户空间，进程可以通过指针直接操作文件，理论上比传统的 read 和 write 操作要快。虽然在读写过程中可能会触发大量中断，但对于大文件的处理，mmap 仍然具有很大的优势。</p><h3 data-into-catalog-status=\"\" style=\"font-variant-numeric: inherit;font-variant-east-asian: inherit;font-weight: 600;font-stretch: inherit;font-size: 1.1em;line-height: 1.5;font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;margin-top: calc(1.90909em);margin-bottom: calc(1.27273em);clear: left;color: rgb(25, 27, 31);letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">5.2进程间通信，多个进程可通过共享内存实现快速通信。</h3><p data-pid=\"cw5cO-9r\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">多个进程可以通过共享内存的方式，使用 mmap 来共享内存段，实现进程间快速通信。例如，在父子进程或无亲缘关系的进程中，都可以将自身用户空间映射到同一个文件或匿名映射到同一片区域，从而实现进程间通信。</p><p data-pid=\"sAOcgL--\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">参考资料中提到，在进程间通信的场景下，可以使用 mmap 将文件映射到内存，多个进程通过对同一文件的读写达到进程间通信的目的。同时，共享匿名内存也可以让相关进程共享一块内存区域，通常用于父子进程。</p><h3 data-into-catalog-status=\"\" style=\"font-variant-numeric: inherit;font-variant-east-asian: inherit;font-weight: 600;font-stretch: inherit;font-size: 1.1em;line-height: 1.5;font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;margin-top: calc(1.90909em);margin-bottom: calc(1.27273em);clear: left;color: rgb(25, 27, 31);letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">5.3内存分配，匿名映射可提供比 malloc 更灵活的内存管理机制。</h3><p data-pid=\"VDNwJLXy\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">当需要大块的内存，或者特定对齐要求的内存时，mmap 的匿名映射可以提供比 malloc 更灵活的内存管理机制。例如，当需要分配的内存大于一定阈值（如 128KB）时，glibc 会默认使用 mmap 代替 brk 来分配内存。</p><p data-pid=\"XQxSn4Cf\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">私有匿名映射最常见的用途是在 glibc 分配大块的内存中。同时，共享匿名映射也可以让相关进程共享一块内存区域，为内存分配提供了更多的灵活性。</p><h2 data-tool=\"mdnice编辑器\" style=\"margin-top: 30px;margin-bottom: 15px;white-space: normal;-webkit-tap-highlight-color: transparent;outline: 0px;color: rgb(0, 0, 0);letter-spacing: normal;text-align: left;font-family: Optima, &quot;Microsoft YaHei&quot;, PingFangSC-regular, serif;background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(255, 255, 255);border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(239, 112, 96);align-items: unset;border-style: none none solid;border-width: 1px 1px 2px;border-radius: 0px;box-shadow: none;display: flex;flex-direction: unset;height: auto;justify-content: unset;line-height: 1.1em;overflow: unset;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;\" data-style=\"\"><span style=\"margin-right: 5px;padding: 3px 10px 1px;-webkit-tap-highlight-color: transparent;outline: 0px;font-size: 22px;color: rgb(255, 255, 255);background: none 0% 0% / auto no-repeat scroll padding-box border-box rgb(239, 112, 96);line-height: 1.5em;letter-spacing: 0em;align-items: unset;border-style: none;border-width: 1px;border-color: rgb(0, 0, 0);border-radius: 3px 3px 0px 0px;box-shadow: none;display: inline-block;font-weight: bold;flex-direction: unset;float: unset;height: auto;justify-content: unset;overflow: unset;text-indent: 0em;text-shadow: none;transform: none;width: auto;-webkit-box-reflect: unset;\" data-style=\"\">六、如何使用mmap技术</span></h2><h3 data-into-catalog-status=\"\" style=\"font-variant-numeric: inherit;font-variant-east-asian: inherit;font-weight: 600;font-stretch: inherit;font-size: 1.1em;line-height: 1.5;font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;margin-top: calc(1.90909em);margin-bottom: calc(1.27273em);clear: left;color: rgb(25, 27, 31);letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">6.1mmap使用细节</h3><p data-style=\"\">使用mmap需要注意的一个关键点是，mmap映射区域大小必须是物理页大小(page_size)的整倍数（32位系统中通常是4k字节）。原因是，内存的最小粒度是页，而进程虚拟地址空间和内存的映射也是以页为单位。为了匹配内存的操作，mmap从磁盘到虚拟地址空间的映射也必须是页。</p><p data-style=\"\">内核可以跟踪被内存映射的底层对象（文件）的大小，进程可以合法的访问在当前文件大小以内又在内存映射区以内的那些字节。也就是说，如果文件的大小一直在扩张，只要在映射区域范围内的数据，进程都可以合法得到，这和映射建立时文件的大小无关。</p><p data-style=\"\">映射建立之后，即使文件关闭，映射依然存在。因为映射的是磁盘的地址，不是文件本身，和文件句柄无关。同时可用于进程间通信的有效地址空间不完全受限于被映射文件的大小，因为是按页映射。</p><p data-pid=\"p70Z8g8l\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">在上面的知识前提下，我们下面看看如果大小不是页的整倍数的具体情况：</span></p><p data-pid=\"DaoyRiey\" data-style=\"\"><span style=\"background-color: rgb(255, 255, 255);color: rgb(0, 0, 0);\" data-style=\"\"><span style=\"color: rgb(0, 0, 0);background-color: rgb(255, 255, 255);font-weight: 600;\" data-style=\"\">情形一：</span>一个文件的大小是5000字节，mmap函数从一个文件的起始位置开始，映射5000字节到虚拟内存中。</span></p><p data-pid=\"cw4IUG2q\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">分析：因为单位物理页面的大小是4096字节，虽然被映射的文件只有5000字节，但是对应到进程虚拟地址区域的大小需要满足整页大小，因此mmap函数执行后，实际映射到虚拟内存区域8192个 字节，5000~8191的字节部分用零填充。映射后的对应关系如下图所示：</p><figure data-size=\"normal\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><img class=\"rich_pages wxw-img js_img_placeholder wx_img_placeholder\" data-imgfileid=\"100006790\" data-ratio=\"0.6305555555555555\" data-src=\"\" data-type=\"other\" data-w=\"720\" height=\"481\" style=\"display: block; margin-right: auto; margin-left: auto; cursor: zoom-in; animation: 0.5s ease-in 0s 1 normal none running animation-1yvu044; width: 677px !important; height: 426.886px !important;\" width=\"762\" data-original-style=\"display: block;margin-right: auto;margin-left: auto;cursor: zoom-in;animation: 0.5s ease-in 0s 1 normal none running animation-1yvu044;width: 690px;\" data-index=\"4\" src=\"https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/36b6974c-3c6f-4383-a05f-c2303db17eb8.jpeg\" _width=\"677px\" crossorigin=\"anonymous\" alt=\"Image\" source-src=\"https://mmbiz.qpic.cn/mmbiz_jpg/dkX7hzLPUR0TghzOe4aJHRAmicX4ibic2xbQSIMxnsZK7x0ia9tjfLO78UBxyJE9HXj4jrAyia5DiakZ8dZ2vOCickiayg/640?wx_fmt=other&amp;from=appmsg\" data-style=\"\"></figure><p data-pid=\"k9WHscOy\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">此时：（1）读/写前5000个字节（0~4999），会返回操作文件内容。（2）读字节50008191时，结果全为0。写50008191时，进程不会报错，但是所写的内容不会写入原文件中 。（3）读/写8192以外的磁盘部分，会返回一个SIGSECV错误。</p><p data-pid=\"EIy1a4kV\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">情形二：</span>一个文件的大小是5000字节，mmap函数从一个文件的起始位置开始，映射15000字节到虚拟内存中，即映射大小超过了原始文件的大小。</p><p data-pid=\"_FV7v76U\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">分析：由于文件的大小是5000字节，和情形一一样，其对应的两个物理页。那么这两个物理页都是合法可以读写的，只是超出5000的部分不会体现在原文件中。由于程序要求映射15000字节，而文件只占两个物理页，因此8192字节~15000字节都不能读写，操作时会返回异常。如下图所示：</p><figure data-size=\"normal\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><img class=\"rich_pages wxw-img js_img_placeholder wx_img_placeholder\" data-imgfileid=\"100006787\" data-ratio=\"0.42083333333333334\" data-src=\"\" data-type=\"other\" data-w=\"720\" height=\"414\" style=\"display: block; margin-right: auto; margin-left: auto; cursor: zoom-in; animation: 0.5s ease-in 0s 1 normal none running animation-1yvu044; width: 677px !important; height: 284.904px !important;\" width=\"984\" data-original-style=\"display: block;margin-right: auto;margin-left: auto;cursor: zoom-in;animation: 0.5s ease-in 0s 1 normal none running animation-1yvu044;width: 690px;\" data-index=\"5\" src=\"https://1t1d-hk.oss-cn-hangzhou.aliyuncs.com/webImage/296ca741-21d1-486c-acb5-2e3bb3535888.jpeg\" _width=\"677px\" crossorigin=\"anonymous\" alt=\"Image\" source-src=\"https://mmbiz.qpic.cn/mmbiz_jpg/dkX7hzLPUR0TghzOe4aJHRAmicX4ibic2xbibCEr9f9x3gf8ibibXkULPRZsFMSbnRkkDCcO7Ju8AbPyQ9jIbd1C7K9w/640?wx_fmt=other&amp;from=appmsg\" data-style=\"\"></figure><p data-pid=\"L8VxMV4i\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">此时：（1）进程可以正常读/写被映射的前5000字节(0~4999)，写操作的改动会在一定时间后反映在原文件中。（2）对于5000~8191字节，进程可以进行读写过程，不会报错。但是内容在写入前均为0，另外，写入后不会反映在文件中。（3）对于8192~14999字节，进程不能对其进行读写，会报SIGBUS错误。（4）对于15000以外的字节，进程不能对其读写，会引发SIGSEGV错误。</p><p data-pid=\"WiCFiGE0\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">情形三：</span>一个文件初始大小为0，使用mmap操作映射了10004K的大小，即1000个物理页大约4M字节空间，mmap返回指针ptr。</p><p data-pid=\"NlPg6_jz\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">分析：如果在映射建立之初，就对文件进行读写操作，由于文件大小为0，并没有合法的物理页对应，如同情形二一样，会返回SIGBUS错误。但是如果，每次操作ptr读写前，先增加文件的大小，那么ptr在文件大小内部的操作就是合法的。例如，文件扩充4096字节，ptr就能操作ptr ~ [ (char)ptr + 4095]的空间。只要文件扩充的范围在1000个物理页（映射范围）内，ptr都可以对应操作相同的大小。这样，方便随时扩充文件空间，随时写入文件，不造成空间浪费。</p><h3 data-into-catalog-status=\"\" style=\"font-variant-numeric: inherit;font-variant-east-asian: inherit;font-weight: 600;font-stretch: inherit;font-size: 1.1em;line-height: 1.5;font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;margin-top: calc(1.90909em);margin-bottom: calc(1.27273em);clear: left;color: rgb(25, 27, 31);letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">6.2函数定义及参数解释</h3><p data-pid=\"lqGNJ9WE\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">在 Linux 中，mmap 函数定义如下：void *mmap(void *addr, size_t length, int prot, int flags, int fd, off_t offset);。<span style=\"font-weight: 600;\" data-style=\"\">参数解释如下：</span></p><ul class=\"list-paddingleft-1\" style=\"list-style-type: disc;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">addr：希望映射的起始地址，通常为 NULL，表示由内核决定映射的地址。</p></li><li data-style=\"\"><p data-style=\"\">length：映射区域的大小（以字节为单位）。</p></li><li data-style=\"\"><p data-style=\"\">prot：映射区域的保护权限，决定映射的页面是否可读、可写等。常见的权限选项包括：PROT_READ（可读）、PROT_WRITE（可写）、PROT_EXEC（可执行）、PROT_NONE（无权限）。</p></li><li data-style=\"\"><p data-style=\"\">flags：映射的类型和行为控制。常见的标志包括：MAP_SHARED（共享映射，对该内存的修改会同步到文件）、MAP_PRIVATE（私有映射，对该内存的修改不会影响原文件，写时拷贝）、MAP_ANONYMOUS（匿名映射，不涉及文件，通常用于分配未初始化的内存）。</p></li><li data-style=\"\"><p data-style=\"\">fd：文件描述符，指向要映射的文件。如果使用匿名映射，应将 fd 设置为 -1，并且需要设置 MAP_ANONYMOUS 标志。</p></li><li data-style=\"\"><p data-style=\"\">offset：文件映射的偏移量，必须是页面大小的整数倍（通常为 4096 字节）。</p></li></ul><p data-pid=\"xxsEK639\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">返回值：返回映射区域的起始地址，如果映射失败，则返回 MAP_FAILED。</p><h3 data-into-catalog-status=\"\" style=\"font-variant-numeric: inherit;font-variant-east-asian: inherit;font-weight: 600;font-stretch: inherit;font-size: 1.1em;line-height: 1.5;font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;margin-top: calc(1.90909em);margin-bottom: calc(1.27273em);clear: left;color: rgb(25, 27, 31);letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">6.3mmap映射</h3><p data-pid=\"G4pKIZ-K\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">在内存映射的过程中，并没有实际的数据拷贝，文件没有被载入内存，只是逻辑上被放入了内存，具体到代码，就是建立并初始化了相关的数据结构（struct address_space），这个过程有系统调用mmap()实现，所以建立内存映射的效率很高。既然建立内存映射没有进行实际的数据拷贝，那么进程又怎么能最终直接通过内存操作访问到硬盘上的文件呢？</p><p data-pid=\"4VAL4Poj\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">那就要看内存映射之后的几个相关的过程了。mmap()会返回一个指针ptr，它指向进程逻辑地址空间中的一个地址，这样以后，进程无需再调用read或write对文件进行读写，而只需要通过ptr就能够操作文件。但是ptr所指向的是一个逻辑地址，要操作其中的数据，必须通过MMU将逻辑地址转换成物理地址，这个过程与内存映射无关。前面讲过，建立内存映射并没有实际拷贝数据，这时，MMU在地址映射表中是无法找到与ptr相对应的物理地址的，也就是MMU失败，将产生一个缺页中断，缺页中断的中断响应函数会在swap中寻找相对应的页面，如果找不到（也就是该文件从来没有被读入内存的情况），则会通过mmap()建立的映射关系，从硬盘上将文件读取到物理内存中，如图1中过程3所示。这个过程与内存映射无关。如果在拷贝数据时，发现物理内存不够用，则会通过虚拟内存机制（swap）将暂时不用的物理页面交换到硬盘上，这个过程也与内存映射无关。</p><p data-pid=\"LX9P1syN\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">mmap内存映射的实现过程：</span></p><ul class=\"list-paddingleft-1\" style=\"list-style-type: disc;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">进程启动映射过程，并在虚拟地址空间中为映射创建虚拟映射区域</p></li><li data-style=\"\"><p data-style=\"\">调用内核空间的系统调用函数mmap（不同于用户空间函数），实现文件物理地址和进程虚拟地址的一一映射关系</p></li><li data-style=\"\"><p data-style=\"\">进程发起对这片映射空间的访问，引发缺页异常，实现文件内容到物理内存（主存）的拷贝</p></li></ul><p data-pid=\"UyZBSk2i\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">适合的场景</span></p><ul class=\"list-paddingleft-1\" style=\"list-style-type: disc;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">您有一个很大的文件，其内容您想要随机访问一个或多个时间</p></li><li data-style=\"\"><p data-style=\"\">您有一个小文件，它的内容您想要立即读入内存并经常访问。这种技术最适合那些大小不超过几个虚拟内存页的文件。（页是地址空间的最小单位，虚拟页和物理页的大小是一样的，通常为4KB。）</p></li><li data-style=\"\"><p data-style=\"\">您需要在内存中缓存文件的特定部分。文件映射消除了缓存数据的需要，这使得系统磁盘缓存中的其他数据空间更大 当随机访问一个非常大的文件时，通常最好只映射文件的一小部分。映射大文件的问题是文件会消耗活动内存。如果文件足够大，系统可能会被迫将其他部分的内存分页以加载文件。将多个文件映射到内存中会使这个问题更加复杂。</p></li></ul><p data-pid=\"xODwFVyB\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">不适合的场景</span></p><ul class=\"list-paddingleft-1\" style=\"list-style-type: disc;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">您希望从开始到结束的顺序从头到尾读取一个文件</p></li><li data-style=\"\"><p data-style=\"\">这个文件有几百兆字节或者更大。将大文件映射到内存中会快速地填充内存，并可能导致分页，这将抵消首先映射文件的好处。对于大型顺序读取操作，禁用磁盘缓存并将文件读入一个小内存缓冲区</p></li><li data-style=\"\"><p data-style=\"\">该文件大于可用的连续虚拟内存地址空间。对于64位应用程序来说，这不是什么问题，但是对于32位应用程序来说，这是一个问题</p></li><li data-style=\"\"><p data-style=\"\">该文件位于可移动驱动器上</p></li><li data-style=\"\"><p data-style=\"\">该文件位于网络驱动器上</p></li></ul><p data-pid=\"oUvM9Zpp\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">示例代码</span></p><pre style=\"overflow-wrap: initial;background: rgb(248, 248, 250);border-radius: 4px;font-size: 0.9em;overflow: auto;padding: calc(0.888889em);word-break: initial;\" data-style=\"\"><code style=\"background-color: inherit;border-radius: 0px;font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;lucida console&quot;, &quot;Courier New&quot;, monospace;font-size: inherit;\" data-style=\"\">//<br data-style=\"\">//  ViewController.m<br data-style=\"\">//  TestCode<br data-style=\"\">//<br data-style=\"\">//  Created by zhangdasen on 2020/5/24.<br data-style=\"\">//  Copyright © 2020 zhangdasen. All rights reserved.<br data-style=\"\">//<br data-style=\"\"><br data-style=\"\">#import \"ViewController.h\"<br data-style=\"\">#import &lt;sys/mman.h&gt;<br data-style=\"\">#import &lt;sys/stat.h&gt;<br data-style=\"\">@interface ViewController ()<br data-style=\"\"><br data-style=\"\">@end<br data-style=\"\"><br data-style=\"\">@implementation ViewController<br data-style=\"\"><br data-style=\"\">- (void)viewDidLoad {<br data-style=\"\">    [super viewDidLoad];<br data-style=\"\">    <br data-style=\"\">    NSString *path = [NSHomeDirectory() stringByAppendingPathComponent:@\"test.data\"];<br data-style=\"\">    NSLog(@\"path: %@\", path);<br data-style=\"\">    NSString *str = @\"test str2\";<br data-style=\"\">    [str writeToFile:path atomically:YES encoding:NSUTF8StringEncoding error:nil];<br data-style=\"\">    <br data-style=\"\">    ProcessFile(path.UTF8String);<br data-style=\"\">    NSString *result = [NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil];<br data-style=\"\">    NSLog(@\"result:%@\", result);<br data-style=\"\">}<br data-style=\"\"><br data-style=\"\"><br data-style=\"\">int MapFile(const char * inPathName, void ** outDataPtr, size_t * outDataLength, size_t appendSize)<br data-style=\"\">{<br data-style=\"\">    int outError;<br data-style=\"\">    int fileDescriptor;<br data-style=\"\">    struct stat statInfo;<br data-style=\"\">    <br data-style=\"\">    // Return safe values on error.<br data-style=\"\">    outError = 0;<br data-style=\"\">    *outDataPtr = NULL;<br data-style=\"\">    *outDataLength = 0;<br data-style=\"\">    <br data-style=\"\">    // Open the file.<br data-style=\"\">    fileDescriptor = open( inPathName, O_RDWR, 0 );<br data-style=\"\">    if( fileDescriptor &lt; 0 )<br data-style=\"\">    {<br data-style=\"\">        outError = errno;<br data-style=\"\">    }<br data-style=\"\">    else<br data-style=\"\">    {<br data-style=\"\">        // We now know the file exists. Retrieve the file size.<br data-style=\"\">        if( fstat( fileDescriptor, &amp;statInfo ) != 0 )<br data-style=\"\">        {<br data-style=\"\">            outError = errno;<br data-style=\"\">        }<br data-style=\"\">        else<br data-style=\"\">        {<br data-style=\"\">            ftruncate(fileDescriptor, statInfo.st_size + appendSize);<br data-style=\"\">            fsync(fileDescriptor);<br data-style=\"\">            *outDataPtr = mmap(NULL,<br data-style=\"\">                               statInfo.st_size + appendSize,<br data-style=\"\">                               PROT_READ|PROT_WRITE,<br data-style=\"\">                               MAP_FILE|MAP_SHARED,<br data-style=\"\">                               fileDescriptor,<br data-style=\"\">                               0);<br data-style=\"\">            if( *outDataPtr == MAP_FAILED )<br data-style=\"\">            {<br data-style=\"\">                outError = errno;<br data-style=\"\">            }<br data-style=\"\">            else<br data-style=\"\">            {<br data-style=\"\">                // On success, return the size of the mapped file.<br data-style=\"\">                *outDataLength = statInfo.st_size;<br data-style=\"\">            }<br data-style=\"\">        }<br data-style=\"\">        <br data-style=\"\">        // Now close the file. The kernel doesn’t use our file descriptor.<br data-style=\"\">        close( fileDescriptor );<br data-style=\"\">    }<br data-style=\"\">    <br data-style=\"\">    return outError;<br data-style=\"\">}<br data-style=\"\"><br data-style=\"\"><br data-style=\"\">void ProcessFile(const char * inPathName)<br data-style=\"\">{<br data-style=\"\">    size_t dataLength;<br data-style=\"\">    void * dataPtr;<br data-style=\"\">    char *appendStr = \" append_key2\";<br data-style=\"\">    int appendSize = (int)strlen(appendStr);<br data-style=\"\">    if( MapFile(inPathName, &amp;dataPtr, &amp;dataLength, appendSize) == 0) {<br data-style=\"\">        dataPtr = dataPtr + dataLength;<br data-style=\"\">        memcpy(dataPtr, appendStr, appendSize);<br data-style=\"\">        // Unmap files<br data-style=\"\">        munmap(dataPtr, appendSize + dataLength);<br data-style=\"\">    }<br data-style=\"\">}<br data-style=\"\">@end</code></pre><h3 data-into-catalog-status=\"\" style=\"font-variant-numeric: inherit;font-variant-east-asian: inherit;font-weight: 600;font-stretch: inherit;font-size: 1.1em;line-height: 1.5;font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;margin-top: calc(1.90909em);margin-bottom: calc(1.27273em);clear: left;color: rgb(25, 27, 31);letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">6.5解除映射的方法</h3><p data-pid=\"UWJQJdw3\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">使用 mmap 后，必须调用 munmap 来解除映射，释放分配的虚拟内存。其函数定义如下：int munmap(void *addr, size_t length);。</p><ul class=\"list-paddingleft-1\" style=\"list-style-type: disc;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">addr：要解除映射的内存区域的起始地址。</p></li><li data-style=\"\"><p data-style=\"\">length：要解除映射的大小。</p></li></ul><p data-pid=\"bQ7L4Gri\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">返回值：成功返回 0，失败返回 -1。</p><p data-pid=\"aPHqkpmN\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">⑴利用 mmap 访问硬件，减少数据拷贝次数</span></p><p data-pid=\"6A0V9Dtg\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">mmap 可以将文件、设备等外部资源映射到内存地址空间，进程可以像访问内存一样访问文件数据或硬件资源。当使用 mmap 访问硬件时，数据可以直接从硬件设备通过 DMA 拷贝到内核缓冲区，然后进程可以直接访问这个缓冲区，减少了数据拷贝的次数。例如，在嵌入式系统中，可以使用 mmap 将物理地址映射到用户虚拟地址空间，实现对硬件设备的直接访问。在进行数据传输时，避免了传统方式中从内核空间到用户空间的多次数据拷贝，提高了数据传输的效率。</p><p data-pid=\"qVZVa-RR\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><span style=\"font-weight: 600;\" data-style=\"\">⑵通过 mmap 实现将物理地址映射到用户虚拟地址空间</span></p><p data-pid=\"Xq5p8oEw\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\">可以通过以下步骤实现将物理地址映射到用户虚拟地址空间：</p><ul class=\"list-paddingleft-1\" style=\"list-style-type: disc;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">打开 /dev/mem 文件获得文件描述符 dev_mem_fd。</p></li><li data-style=\"\"><p data-style=\"\">使用 mmap 函数进行映射，将物理地址映射到用户虚拟地址空间。例如，定义一个函数 dma_mmap 来实现这个功能，函数原型为 int dma_mmap(unsigned long addr_p, unsigned int len, unsigned char** addr_v)。在这个函数中，首先打开 /dev/mem 文件，然后使用 mmap 函数进行映射，最后返回虚拟地址。</p></li><li data-style=\"\"><p data-style=\"\">使用映射后的虚拟地址进行操作，例如读写硬件设备。</p></li><li data-style=\"\"><p data-style=\"\">在使用完后，调用 dma_munmap 函数解除映射，释放资源。函数原型为 unsigned int dma_munmap(unsigned char* addr_v, unsigned long addr_p, unsigned int len)。</p></li></ul><p data-pid=\"6GL-nJCr\" style=\"margin-top: 1.4em;margin-bottom: 1.4em;color: rgb(25, 27, 31);font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;font-size: medium;letter-spacing: normal;text-align: start;white-space: normal;background-color: rgb(255, 255, 255);\" data-style=\"\"><strong data-style=\"\">⑶在嵌入式系统中，还可以通过以下方式实现物理地址到用户虚拟地址空间的映射：</strong></p><ul class=\"list-paddingleft-1\" style=\"list-style-type: disc;\" data-style=\"\"><li data-style=\"\"><p data-style=\"\">在驱动程序中，实现 mmap 方法，建立虚拟地址到物理地址的页表。例如，可以使用 remap_pfn_range 函数一次建立所有页表，或者使用 nopage VMA 方法每次建立一个页表。</p></li><li data-style=\"\"><section style=\"margin-bottom: 0px;\" data-style=\"\">在用户空间程序中，使用 mmap 函数进行映射，将文件描述符、映射大小、保护权限等参数传入，获得映射后的虚拟地址。然后可以通过这个虚拟地址对硬件设备进行操作。</section></li></ul><p style=\"display: none;\" data-style=\"\"><mp-style-type data-value=\"3\" data-style=\"\"></mp-style-type></p>",
                    "version": 0,
                    "deleteFlag": 0,
                    "lastEditor": 0,
                    "createdAt": "2024-12-11T13:51:25.473824",
                    "updatedAt": "2024-12-11T13:51:25.473824"
                }
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
