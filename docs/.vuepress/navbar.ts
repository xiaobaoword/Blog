import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { 
    text: '首页', 
    link: '/' 
  },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  // {
    // text: '笔记',
    // items: [{ text: '示例', link: '/notes/demo/README.md' }]
  // },
  { 
    text: '开发案例', 
    items: [
      { 
        text: '微信开发', 
        items: [
          { text: '开放平台-授权登录', link: '/notes/examples/wechat/开放平台-授权登录.md' },
          { text: '开放平台-授权管理', link: '/notes/examples/wechat/开放平台-授权管理.md' },
        ]
      },
      { 
        text: 'AI应用开发', 
        items: [
          { text: 'chatgpt', link: '/notes/demo/README.md' },
          { text: '豆包', link: '/notes/demo/README.md' },
        ]
      },
    ]
  },
  { 
    text: '基础四大件', 
    items: [
      { text: '数据结构和算法', link: '/notes/demo/README.md' },
      { text: '计算机操作系统', link: '/notes/basics/计算机操作系统/README.md' },
      { text: '计算机网络', link: '/notes/demo/README.md' },
      { text: '计算机组成原理', link: '/notes/demo/README.md' },
    ]
  },
  { 
    text: 'Golang', 
    items: [
      { 
        text: '相关用法', 
        link: '/notes/demo/README.md' 
      },
      { 
        text: '源码理解', 
        link: '/notes/demo/README.md' 
      },
    ]
  },
  { 
    text: 'PHP', 
    items: [
      { 
        text: '相关用法', 
        link: '/notes/demo/README.md' 
      },
      { 
        text: '源码理解', 
        link: '/notes/demo/README.md' 
      },
    ]
  },
  { 
    text: '中间件', 
    items: [
      { 
        text: 'Redis', 
        items: [
          { text: '学习笔记-Redis核心技术与实战', link: '/notes/middleware/redis/学习笔记-Redis核心技术与实战.md' },
          { text: '源码理解-1', link: '/notes/middleware/redis/源码理解-1.md' },
        ]
      },
      { 
        text: 'Kafka', 
        items: [
          { text: '学习笔记', link: '/notes/middleware/kafka/学习笔记.md' },
          { text: '源码理解-1', link: '/notes/middleware/redis/源码理解-1.md' },
        ]
      },
    ]
  },
  { 
    text: '工具集', 
    items: [
      { text: 'UrlEncode', icon:'https://www.qianbo.com.cn/favicon.ico', link: 'https://www.qianbo.com.cn/Tool/Url-Encode.html' },
    ]
  },
])
