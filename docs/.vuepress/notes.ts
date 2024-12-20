import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const basicsOperatingSystem1Note = defineNoteConfig({
  dir: 'basics/计算机操作系统',
  link: '/basics/计算机操作系统',
  sidebar: ['', '概述','进程'],
})

const middlewareRedis1Note = defineNoteConfig({
  dir: 'middleware/redis/Redis核心技术与实战',
  link: '/middleware/redis/Redis核心技术与实战',
  sidebar: ['', '基本架构' ],
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
    basicsOperatingSystem1Note,
    middlewareRedis1Note,
    middlewareKafkaNote
  ],
})