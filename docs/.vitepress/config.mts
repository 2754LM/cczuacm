import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CCZU ACM",
  description: "CCZU ACM",

  lastUpdated: true,
  cleanUrls: true,
  base: '/cczuacm/',
  
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '入门指南', link: '/guide/index' },
      { text: '竞赛成绩', link: '/awards/index' },
      { 
        text: '关于集训队', 
        items: [
          { text: '集训队简介', link: '/about/introduction' },
          { text: '集训队章程', link: '/about/constitution' }

        ]
      }

    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/zafuacm/wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑本页'
    },
    lastUpdated: {
      text: '最近更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
