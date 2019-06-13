import axios from 'axios'
import { Indicator } from 'mint-ui'


// 拦截请求参数
axios.interceptors.request.use(config => {
  // 显示'加载中…'
 Indicator.open('加载中…')
  return config
})
// 拦截响应
axios.interceptors.response.use(resp => {
  // 隐藏'加载中…'
  Indicator.close()
  return resp;
  // if (resp.data.code === 200) {
  //   return resp
  // } else {
  //   // 显示一个错误信息，在3s后自动隐藏
  //   Toast({
  //     message: '请求出错',
  //     duration: 3000
  //   })
  // }
})


