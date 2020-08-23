const navConf = require("./config/navConf");
const headConf = require("./config/headConf");
const pluginConf = require("./config/pluginConf");

// https://vuepress.vuejs.org/guide/basic-config.html#config-file
module.exports = {
  title: '1L400000通信与广电工程管理与实务教材图片库',
  description: '1L400000通信与广电工程管理与实务教材图片库',
  head: headConf,
  plugins: pluginConf,

  base: '/C1L400000.images/',
 
  themeConfig: {
    // https://vuepress.vuejs.org/theme/default-theme-config.html
    nav: navConf,
  }
}