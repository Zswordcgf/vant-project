//模块A
import instance from './instance'
const baseUrl = 'moduleA'
const post = (url, params, config = {}) => {
    return instance.request({
        method: 'post',
        baseUrl,
        url,
        data: params,
        config
    })
}
export default {
    testA(params) {
        return post('testModuleA', params)
    }
}