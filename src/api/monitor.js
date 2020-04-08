import axios from 'axios'

/**
 * 获取企业生命监测标题数据
 */
export const getMonitorTitleInfo = () => {
    return axios.request({
        method: 'get',
        url: 'http://192.168.0.22:8020/lifeTest/item/getAll'
    })
}
