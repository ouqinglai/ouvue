// dcos/.vuepress/config.js
const path = require('path')

module.exports = {
  title: 'my-blog',  // 设置网站标题
  dest: './docs/dist',   // 设置输出目录
  base: './',// 设置站点根路径
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
        '@public': path.resolve(__dirname, '../../public/'),
      }
    }
  },
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '前端三剑客', items: [
        { text: 'HTML', link: '/HTML/' },
        { text: 'CSS', link: '/CSS/' },
        { text: 'JavaScript', link: '/JavaScript/' }
      ]},
      { text: 'Vue.jss', link: '/Vue/' },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/HTML/': [
        '',
        'one.md',
        {
          title: 'HTML类目三',
          collapsable: false,
          children: [
            '/HTML/two.md',
            '/HTML/three.md',
          ]
        },
      ],

      '/CSS/': [
        '',
        'one.md',
        {
          title: 'CSS类目三',
          collapsable: false,
          children: [
            '/CSS/two.md',
            '/CSS/three.md',
          ]
        },
      ],

      '/JavaScript/': [
        '',
        'one.md',
        {
          title: 'JavaScript类目三',
          children: [
            '/JavaScript/two.md',
            '/JavaScript/three.md',
          ]
        },
      ],

      '/Vue/': [
        '', 
        'Vuex.md',
      ],
    },
    repo: 'https://github.com/ouqinglai/vuepress-docs' // 添加 github 链接
  }
}