import { defineConfig } from 'vitepress'
import posts_conf from './posts_conf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/front_monthly/',
  title: "Front Monthly",
  description: "A Front Tech Sharing Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: posts_conf,
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
