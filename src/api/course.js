import axios from 'axios'

// 云课堂智慧树页面数据获取
/**
 * 获取热点课程数据
 */
export const getHotCoursewareInfo = () => {
    return axios.request({
        method: 'get',
        url: 'http://192.168.0.11:8020/class/getClassByParentMenuId?parentMenuId=9001&pageSize=9'
    })
}
/**
 * 获取知识讲座数据
 */
export const getKnowledgeLectureInfo = () => {
    return axios.request({
        method: 'get',
        url: 'http://192.168.0.11:8020/class/getClassByParentMenuId?parentMenuId=9002&pageSize=8'
    })
}
/**
 * 获取技能培训数据
 */
export const getSkillTrainingInfo = () => {
    return axios.request({
        method: 'get',
        url: 'http://192.168.0.11:8020/class/getClassByParentMenuId?parentMenuId=9003&pageSize=8'
    })
}
/**
 * 获取热点课程详情页面数据
 */
export const getCoursewareDetailInfo = () => {
    return axios.request({
        method: 'get',
        url: 'http://192.168.0.11:8020/class/getClassByParentMenuIdStr?parentMenuIdStr=9001007,9001009,9001008,9001003,9001002,9001006,9001004,9001001,9001005'
    })
}
/**
 * 获取知识讲座详情页面数据
 */
export const getLectureDetailInfo = () => {
    return axios.request({
        method: 'get',
        url: 'http://192.168.0.11:8020/class/getClassByParentMenuIdStr?parentMenuIdStr=9002001,9002005,9002008,9002002,9002007,9002006,9002003,9002004'
    })
}
/**
 * 获取技能培训详情页面数据
 */
export const getTrainingDetailInfo = () => {
    return axios.request({
        method: 'get',
        url: 'http://192.168.0.11:8020/class/getClassByParentMenuIdStr?parentMenuIdStr=9003007,9003003,9003005,9003006,9003002,9003001,9003008,9003004'
    })
}
