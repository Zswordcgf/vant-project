//拦截器

import axios from 'axios'
import router from '../router/index'
import Cookies from 'js-cookie'
// token失效，清除localstorage,cookie,并重新登录
const tokenFailure = () => {
    // window.$Notice.error({
    //   title: '登录过期，请重新登录'
    // })
    window.localStorage.clear()
    Cookies.remove('isLogin')
    setTimeout(() => {
        router.replace({
            name: 'login'
        })
    }, 2000)
}

// 创建axios实例
const instance = axios.create({
    // 设置3s请求超时
    timeout: 30000
})

// 请求拦截
instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.error(error)
    }
)

// 响应拦截
instance.interceptors.response.use(
    res => {
        let newRes
        if (res.data === '') {
            newRes = {
                data: {
                    success: true
                }
            }
        } else if (res.data.status === 302 || res.data.code === 302) {
            // token失效
            tokenFailure()
            newRes = {
                data: {
                    success: false,
                    message: '与服务器连接超时，请重新登录'
                }
            }
        } else {
            newRes = {
                headers: res.headers,
                data: {
                    code: res.data.code,
                    success: true,
                    data: res.data.data,
                    message: res.data.message,
                    rows: res.data.rows
                }
            }
        }
        return res.status !== 200 ||
            (res.data.success !== undefined && res.data.success === false) ||
            res.data.code !== 200 ?
            res :
            newRes
    },
    error => {
        return {
            data: {
                success: false,
                message: error.toString(),
                errObj: error
            }
        }
    }
)

export default instance