import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const basicsOperatingSystemNote = defineNoteConfig({
  dir: 'basics/计算机操作系统',
  link: '/basics/计算机操作系统',
  sidebar: ['', '概述','进程'],
})

const middlewareRedisNote = defineNoteConfig({
  dir: 'middleware/redis',
  link: '/middleware/redis',
  sidebar: ['', '学习笔记-Redis核心技术与实战', '源码理解-1' ],
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
    middlewareRedisNote,
    middlewareKafkaNote
  ],
})