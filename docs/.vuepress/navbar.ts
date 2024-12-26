import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { 
    text: '基础四大件', 
    items: [
      { text: '计算机操作系统', link: '/basics/计算机操作系统/README.md' },
      { text: '计算机组成原理', link: '/basics/计算机组成原理/README.md' },
      { text: '计算机网络', link: '/basics/计算机网络/README.md' },
      { text: '数据结构', link: '/basics/数据结构/README.md'},
    ]
  },
  { 
    text: '开发语言', 
    items: [
      { text: 'Golang', icon: 'vscode-icons:file-type-go-gopher', link: '/demo/README.md' },
      { text: 'PHP',icon: 'vscode-icons:file-type-php2', link: '/demo/README.md' },
    ]
  },
  { 
    text: '中间件', 
    items: [
      { text: 'Redis', link: '/middleware/redis/README.md' },
      { text: 'Kafka', link: '/middleware/kafka/README.md' },
    ]
  },
  { 
    text: '开发案例', 
    items: [
      { text: '高并发抢购系统开发', link: '/examples/高并发促销活动系统开发/README.md' },
      { text: '微信开发', link: '/demo/README.md' },
    ]
  },
  { text: '在线导航', link: '/tools/', icon: 'fa-location-arrow' },
])
