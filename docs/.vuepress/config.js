module.exports = {
  title: 'zhw 博客',
  description: '张浩伟 的个人博客',
  base: '/zhwblog/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'zhw 博客',
        items: [
          { text: 'Github', link: 'https://github.com/zhwblc' },
        ]
      }
    ],
    // 侧边栏配置
    sidebar: [
      {
        title: '导航栏',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "学前必读", path: "/" }
        ]
      },
      {
        title: "文章导航",
        path: '/note/githubVueToPages', // 默认激活的选项
        collapsable: false, // 不折叠
        children: [
          { title: "java插件开发", path: "/note/githubVueToPages" },
          { title: "nvm安装教程", path: "/note/nvmInstall" }
        ],
      }
    ]
  }
}
