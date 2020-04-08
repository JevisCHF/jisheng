import axios from 'axios'

/**
 * 获取首页最新消息总数据
 */
export const getNewestInfo = () => {
  return axios.request({
    method: 'get',
    // url: 'http://192.168.0.11:9999/push/getPushDataByRedisKey?indexKey=INDEX&hotKey=HOT'
    url: 'http://192.168.0.22:8010/portal/push/getPushDataByRedisKey?indexKey=INDEX&hotKey=HOT'
  })
}
