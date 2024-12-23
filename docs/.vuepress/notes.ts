import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const basicsOperatingSystemNote = defineNoteConfig({
  dir: 'basics/计算机操作系统',
  link: '/basics/计算机操作系统',
  sidebar: [
    '',
    {
      text: '第1章 操作系统概述',
      prefix: '第1章 操作系统概述',
      collapsed: false,
      items: [
        '概述',
      ],
    },
    {
      text: '第2章 进程与线程',
      prefix: '第2章 进程与线程',
      collapsed: false,
      items: [
        '进程与线程',
      ],
    },
  ],
})

const basicsDataStructureAlgorithmNote = defineNoteConfig({
  dir: 'basics/数据结构和算法',
  link: '/basics/数据结构和算法',
  sidebar: [
    '',    
    {
      text: '第1章 绪论',
      prefix: '第1章 绪论',
      collapsed: false,
      items: "auto",
    },
    {
      text: '第2章 线性表',
      prefix: '第2章 线性表',
      collapsed: false,
      items: [
        '线性表',
      ],
    },
    {
      text: '算法题',
      prefix: '算法题',
      collapsed: false,
      items: [
        {
          text: '数组',
          prefix: '数组',
          collapsed: true,
          items: [
            '螺旋矩阵II',
          ],
        },
      ],
    },
  ]
})

const middlewareRedisNote = defineNoteConfig({
  dir: 'middleware/redis',
  link: '/middleware/redis',
  sidebar: [
    '',
    {
      text: 'Redis核心技术与实战',
      prefix: 'Redis核心技术与实战',
      collapsed: false,
      items: [
        '基本架构',
      ],
    },
  ],
})

const middlewareKafkaNote = defineNoteConfig({
  dir: 'middleware/kafka',
  link: '/middleware/kafka',
  sidebar: ['', '学习笔记', '源码理解-1' ],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    demoNote, 
    basicsOperatingSystemNote,
    basicsDataStructureAlgorithmNote,
    middlewareRedisNote,
    middlewareKafkaNote
  ],
})