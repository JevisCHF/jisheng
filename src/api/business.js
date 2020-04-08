import axios from 'axios'

/**
 * 获取行业研究表数据
 */
export const getBusinessTableInfo = () => {
    return axios.request({
        method: 'get',
        url: 'http://192.168.0.22:8020/menu/getAllCategory'
    })
}
