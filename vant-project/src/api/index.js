//接口总览

import instance from './instance'
import moduleA from './moduleA'
const baseUrl = 'test'
const get = (url, params, config = {}) => {
    return instance.request({
        method: 'get',
        baseUrl,
        url: params ? `${url}/${params}` : url,
        config
    })
}

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
    'moduleA': moduleA,
    testApi(params) {
        return post('test/test.do', params)
    },
    testGet() {
        return get('get.do')
    }
}