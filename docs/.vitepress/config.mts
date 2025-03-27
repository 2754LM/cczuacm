import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CCZU ACM",
  description: "CCZU ACM",

  lastUpdated: true,
  cleanUrls: true,
  base: '/cczuacm/',
  sitemap: {
    hostname: 'https://kano07.icu/cczuacm/'
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 修正渲染
    ['style', {}, `mjx-container > svg { display: inline-block; }`],
    // Google Analytics
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-2ZJJQNKSP7' }],
    ['script', {}, `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-2ZJJQNKSP7');`],
    // Baidu Analytics
    ['meta', { name: 'baidu-site-verification', content: 'codeva-3xs6buZQq7' }],
    // 360 Analytics
    ['meta', { name: '360-site-verification', content: '5f6b7e089e84559f4236b519637a2d50' }],
    // Sougou Analytics
    ['meta', { name: 'sogou_site_verification', content: 'BCj2PJBWHq' }],
    // Bytedance Analytics
    ['meta', { name: 'bytedance-verification-code', content: 'TKlifQgLT+gHFABWwZMH' }],
    // Shenma Analytics
    ['meta', { name: 'shenma-site-verification', content: '087f881b8e2608d58766e411ceef89f0_1688214039' }],
  ],

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
