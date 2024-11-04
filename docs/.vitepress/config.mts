import { defineConfig } from 'vitepress'
import posts_conf from './posts_conf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/pages/',
  outDir: '../pages/',
  title: "Front Monthly",
  description: "A Front Tech Sharing Site",
  head: [['link', { rel: 'icon', href: 'https://xiaotianxia.github.io/blog/vuepress/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '2024',
        items: posts_conf,
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
