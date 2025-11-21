import { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'
// https://vitepress.dev/reference/site-config
const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },
  head:[
    ['link',{rel:'icon',href:'/favicon.ico'}],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', crossorigin: '' }],
    [
      'script',
      {
        defer: '',
        src: 'https://cloud.umami.is/script.js',
        'data-website-id': '4f901b62-46d3-4ac1-8ce9-ddc9a0f9f289'
      }
    ]
  ],
  title: "CCZU ACM",
  description: "CCZU ACM",
  lastUpdated: true,
  cleanUrls: true,
  base: '/',
  sitemap: {
    hostname: 'https://cczuacm.cn/'
  },
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
          { text: '比赛题解', link: '/other/solution' },
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
