const { defineConfig } = require('@vue/cli-service')
const resolve = require("path").resolve;

module.exports = defineConfig({
  transpileDependencies: true,
  rules: [
    //配置less插件
    {
     test: /\.less$/,
     loader: "style-loader!css-loader!less-loader"
    }
   ]
})

//配置svg图片
module.exports = {
  chainWebpack(config){
       //引入图标
       config.module.rule("svg").exclude.add(resolve("./src/assets/fonts/svg"));
       config.module.rule("icon").test(/\.svg$/)
       .include.add(resolve("./src/assets/fonts/svg")).end()
       .use("svg-sprite-loader")
       .loader("svg-sprite-loader")
       .options({
           symbolId:'icon-[name]'
       });
  }
}
