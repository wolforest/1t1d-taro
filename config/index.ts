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
