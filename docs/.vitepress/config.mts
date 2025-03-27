import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head:[
    ['link',{rel:'icon',href:'/cczuacm/favicon.ico'}]
    ],
  title: "CCZU ACM",
  description: "CCZU ACM",
  lastUpdated: true,
  cleanUrls: true,
  base: '/cczuacm/',

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
