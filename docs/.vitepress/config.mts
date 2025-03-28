import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head:[
    ['link',{rel:'icon',href:'/favicon.ico'}]
    ],
  title: "CCZU ACM",
  description: "CCZU ACM",
  lastUpdated: true,
  cleanUrls: true,
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '入门指南', link: '/guide/index' },
      { text: '集训队简介', link: '/team/intro' },
      { text: '往年成绩', link: '/team/award' },
      { text: '友链', link: '/other/friendlink' },
    ],
    sidebar: [
      {
        text: '算法学习',
        items: [
          { text: '入门指南', link: '/guide/index' },
        ]
      },
      {
        text: '集训队',
        items: [
          { text: '集训队简介', link: '/team/intro' },
          { text: '如何加入', link: '/team/join' },
          { text: '往年成绩', link: '/team/award' },
          { text: '队员去向', link: '/team/member' },
          { text: '集训队章程', link: '/team/rules' },
          { text: '支持我们', link: '/team/support' }
        ]
      },
      {
        text: '杂项',
        items: [
          { text: '友链', link: '/other/friendlink' },
          
        ]
      }
    ],
    footer: {
      copyright: 'Copyright © 2025 CCZU ACM Team'
    },
    search: { provider: 'local' },
    externalLinkIcon: true,
    outline: { level: 'deep', label: '目录' },
    editLink: {
      pattern: 'https://github.com/2754LM/cczuacm/edit/main/docs/:path',
      text: '在 GitHub 上编辑本页'
    },
    lastUpdated: {
      text: '最近更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/2754LM/cczuacm' }
    ]
  }
})
