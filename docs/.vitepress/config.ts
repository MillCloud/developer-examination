import { defineConfig } from 'vitepress';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  // app configs
  base: isProduction ? '/developer-examination/' : undefined,
  description: 'MillCloud 前端测试',
  lang: 'zh-Hans',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    theme: 'github-dark',
  },
  title: 'MillCloud 前端测试',
  titleTemplate: '',
  // theme configs
  themeConfig: {
    nav: [
      { text: '概述', link: '/overview' },
      { text: '方法', link: '/methods' },
      { text: '项目', link: '/projects/' },
      { text: '思想', link: '/thoughts/' },
    ],
    sidebar: [
      {
        text: '概述',
        collapsible: true,
        items: [{ text: '概述', link: '/overview' }],
      },
      {
        text: '方法',
        collapsible: true,
        items: [
          { text: '说明', link: '/methods' },
          { text: '数组元素求和', link: '/methods/array-sum' },
          { text: '十六进制字符串字符求和', link: '/methods/string-sum' },
          { text: '去除字符串两边子串', link: '/methods/string-trim' },
          { text: '二维数组转换成对象', link: '/methods/array-to-object' },
          { text: '对象转换成二维数组', link: '/methods/object-to-array' },
          { text: '生成唯一 ID', link: '/methods/unique-id' },
          { text: '数组去重', link: '/methods/array-de-duplication' },
          { text: '对象深拷贝', link: '/methods/object-deep-clone' },
          { text: '对象扁平化', link: '/methods/object-flatten' },
        ],
      },
      {
        text: '项目',
        collapsible: true,
        items: [
          { text: 'fetch', link: '/projects/fetch' },
          { text: 'EventBus', link: '/projects/event-bus' },
          { text: '备忘录', link: '/projects/memos' },
          { text: '扫雷', link: '/projects/mine-sweeper' },
          { text: '俄罗斯方块', link: '/projects/tetris' },
          { text: '2048', link: '/projects/2048' },
          { text: '按钮', link: '/projects/button' },
        ],
      },
      {
        text: '思想',
        collapsible: true,
        items: [
          { text: '请求', link: '/thoughts/request' },
          { text: '渲染', link: '/thoughts/render' },
          { text: '异常', link: '/thoughts/exception' },
          { text: '优化', link: '/thoughts/optimization' },
          { text: '上传', link: '/thoughts/upload' },
          { text: '下载', link: '/thoughts/download' },
          { text: '类型和数据', link: '/thoughts/types-and-data' },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/MillCloud/developer-examination',
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--simple-icons"><path fill="currentColor" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"></path></svg>`,
        },
        link: 'https://gitee.com/MillCloud/developer-examination',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present MillCloud',
    },
  },
});
