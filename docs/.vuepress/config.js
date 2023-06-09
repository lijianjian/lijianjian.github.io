import { defaultTheme } from '@vuepress/theme-default'

export default {
    theme: defaultTheme({
        logo: 'https://vuejs.org/images/logo.png',
      navbar: [
        // NavbarItem
        {
          text: 'Zookeeper',
          link: '/zookeeper/README.md',
        },
        // NavbarGroup
        {
          text: 'Group',
          children: ['/group/foo.md', '/group/bar.md'],
        },
        // 字符串 - 页面文件路径
        '/bar/README.md',
      ],
    }),
  }
// export default defineUserConfig({
//   lang: 'zh-CN',
//   title: '你好， VuePress ！',
//   description: '这是我的第一个 VuePress 站点',
// })