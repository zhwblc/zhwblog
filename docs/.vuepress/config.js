module.exports = {
  title: 'zhw 博客',
  description: '张浩伟 的个人博客',
  base: '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'images'
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Github', link: 'https://github.com/zhwblc' }
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
        title: "原生html+css+js实现功能",
        path: '/originalRealize/dragTool', // 默认激活的选项
        collapsable: false,
        children: [
          { title: "拖拽功能的实现", path: "/originalRealize/dragTool" },
          { title: "修改单选框和复选框的样式", path: "/originalRealize/raCheckStyle" },
          { title: "javascript修改css样式的方法", path: "/originalRealize/jsModfiyCss" },
          { title: "CSS链接伪类的顺序", path: "/originalRealize/cssFakeClass" }
        ],
      },
      {
        title: "gitHub相关",
        path: '/github/githubVueToPages', // 默认激活的选项
        collapsable: false, // 不折叠
        children: [
          { title: "如何部署vue到github", path: "/github/githubVueToPages" },
        ],
      },
      {
        title: "uniapp相关",
        path: '/uniappAbout/eventDelegate', // 默认激活的选项
        collapsable: false, // 不折叠
        children: [
          { title: "事件委托", path: "/uniappAbout/eventDelegate" },
        ],
      }
    ]
  }
}
