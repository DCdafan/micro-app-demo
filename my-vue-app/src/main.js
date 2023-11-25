import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'

microApp.start({
  /**
   * 自定义fetch
   * @param {string} url 静态资源地址
   * @param {object} options fetch请求配置项
   * @param {string|null} appName 应用名称
   * @returns Promise<string>
   */
  fetch(url, options, appName) {
    const config = {
      // fetch 默认不带cookie，如果需要添加cookie需要配置credentials
      // credentials: 'include' // 请求时带上cookie
    }
    return window.fetch(url, Object.assign(options, config)).then((res) => {
      return res.text()
    })
  },
  excludeAssetFilter(assetUrl) {
    if (assetUrl.includes('api.map.baidu.com')) {
      return true // 返回true则micro-app不会劫持处理当前文件
    }
    return false
  },
  customProxyDocumentProperties: new Map([
    ['title', (value) => {}]
  ]),
  plugins: {
    global: []
  }
})


createApp(App).mount('#app')
