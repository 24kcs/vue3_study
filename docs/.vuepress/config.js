module.exports = {
  base: '/vue3-docs/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: '尚硅谷前端: Vue3入门', // 标题
  description: '学习使用 Vue3', // 标题下的描述
  themeConfig: { // 主题配置
    sidebar: [ // 左侧导航
      {
        title: '初识 Vue3', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'chapter1/01_认识TS',
          'chapter1/02_创建vue3项目',
        ]
      },
      {
        title: 'Composition(组合) API',
        collapsable: false,
        children: [
          'chapter2/01_Composition API_常用部分',
          'chapter2/02_Composition API_其它部分',
          'chapter2/03_手写组合API',
          'chapter2/04_Composition VS Option',
        ]
      },
      {
        title: '其它新语法',
        collapsable: false,
        children: [
          'chapter3/01_新组件',
          'chapter3/02_全局API更新',
        ]
      },
      {
        title: 'Vue3版 TODO LIST',
        collapsable: false,
        children: [
          'chapter4/',
        ]
      },
    ]
  }
}