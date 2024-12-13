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
    text: '基础四大件', 
    items: [
      { text: '数据结构和算法', link: '/notes/demo/README.md' },
      { text: '计算机操作系统', link: '/notes/demo/README.md' },
      { text: '计算机网络', link: '/notes/demo/README.md' },
      { text: '计算机组成原理', link: '/notes/demo/README.md' },
    ]
  },
  { 
    text: '开发语言', 
    items: [
      { text: 'Go', link: '/notes/demo/README.md' },
      { text: 'PHP', link: '/notes/demo/README.md' },
    ]
  },
  { 
    text: '开发案例', 
    items: [
      { text: '微信扫码登录', link: '/notes/demo/README.md' },
    ]
  },
  { 
    text: '工具集', 
    items: [
      { text: '示例', link: '/notes/demo/README.md' },
    ]
  },
])
