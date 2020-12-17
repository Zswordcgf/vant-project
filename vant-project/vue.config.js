module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/data/' : '/',
    outputDir: 'data',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV !== 'production',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({ // 把px单位换算成rem单位
                        rootValue: 75, // 换算的基数(设计图750的根字体为75)
                        // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*']
                    })
                ]
            }
        }
    },
    devServer: {
        host: '127.0.0.1',
        port: '8081',
        https: false,
        hot: true,
        open: true,
        proxy: {
            '': {
                target: 'http://172.19.18.161:4222', //api环境
                changeOrigin: true
            }
        }
    }
}