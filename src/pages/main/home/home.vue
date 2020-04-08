<template>
    <div>
        <HomeSwiper/>
        <HomeNewest :reportList="newestReportList" :infoList="newestInfoList"></HomeNewest>
        <HomeSolution/>
        <HomeService/>
        <HomeProcess/>
        <HomeContact/>
    </div>
</template>

<script>
import HomeSwiper from './components/Swiper'
import HomeNewest from './components/Newest'
import HomeSolution from './components/Solution'
import HomeService from './components/Service'
import HomeProcess from './components/Process'
import HomeContact from './components/Contact'
import { getNewestInfo } from '../../../api/home'
export default {
    name: 'Home',
    components: {
        HomeSwiper,
        HomeNewest,
        HomeSolution,
        HomeService,
        HomeProcess,
        HomeContact
    },
    data () {
        return {
            // 最新消息数据
            newestReportList: [],
            newestInfoList: []
        }
    },
    // 生命周期钩子获取json数据
    mounted () {
        this.getNewestData()
    },
    methods: {
        /**
         * 获取首页最新消息各项数据
         */
        getNewestData () {
            getNewestInfo().then((response) => {
                this.newestReportList = response.data.index.reportList
                this.newestInfoList = response.data.index.infoList
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
