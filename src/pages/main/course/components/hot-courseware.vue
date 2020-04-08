<template>
    <div class="hot-courseware-wrapper">
        <div class="wrapper">
            <!-- hot-courseware-header热点课件头部start -->
            <div class="hot-courseware-header">
                <h3 class="course-header-title">经济热点课程</h3>
            </div>
            <!-- hot-courseware-header热点课件头部end -->
            <!-- hot-courseware-content热点课件内容start -->
            <div class="hot-courseware-content">
                <ul class="content-lists">
                    <li class="content-list" v-for="(item, index) of hotCoursewareData" :key="index">
                        <img class="list-img" src="@/assets/images/main-course/hot-courseware-list01.jpg" alt="请稍等......">
                        <!-- <img class="list-img" :src="item.imgUrl" alt="请稍等......"> -->
                        <div class="list-text">
                            <h5 class="list-title">{{ item.className }}</h5>
                            <p class="list-describe">免费试看{{ item.freeWatchNum }}课时</p>
                            <p class="list-describe">最近更新：{{ item.updateTime | formatDate }}</p>
                            <p class="list-describe">总课时：{{ item.classNum }}<span>老师：{{ item.teacherName }}</span></p>
                            <h5 class="list-price">¥ {{ item.classPrice }}</h5>
                            <router-link target="_blank" :to="'/main/course/courseware-detail/' + item.menuId">
                                <a class="list-button">开始学习</a>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- hot-courseware-content热点课件内容start -->
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'CourseHotCourseware',
    props: {
        /**
         * 热点课程数据
         */
        hotCoursewareData: Array,
        required: true
    },
    filters: {
        /**
         * 修改获取的时间数据的显示格式
         */
        formatDate: function (date) {
            return moment(date).format('YYYY-MM-DD')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../course.sass";
    .hot-courseware-wrapper {
        padding: 60px 0;
        // 热点课件头部样式
        .hot-courseware-header {
            .course-header-title {
                color: #f46200;
            }
        }
        // 热点课件内容样式
        .hot-courseware-content {
            width: 100% !important;
            overflow: hidden;
            padding-bottom: 20px;
            margin-top: 40px;
            .content-lists {
                width: 100% !important;
                margin: 0 9px;
                .content-list {
                    float: left;
                    width: 29.34%; // 399px
                    height: 145px;
                    padding: 1.32%; // 18px
                    overflow: hidden;
                    border-radius: 10px;
                    box-shadow: 0 0 14px #ddd;
                    margin: 18px 18px 0 0;
                    &:nth-of-type(3), &:nth-of-type(6), &:nth-of-type(9) {
                        margin-right: 0;
                    }
                    .list-img {
                        float: left;
                        width: 37.6%; // 150px
                        height: 100% // 145px
                    }
                    // 课程字体样式
                    .list-text {
                        margin-left: 42.67%; // 170px
                        .list-title {
                            color: #333;
                            font-size: 18px;
                            font-weight: bold;
                            line-height: 26px
                        }
                        .list-describe {
                            color: #999;
                            font-size: 12px;
                            line-height: 17px;
                            margin-top: 5px;
                            &:nth-of-type(1) {
                                color: #0159e0;
                            }
                            &:nth-of-type(3) {
                                margin-top: 0;
                                span {
                                    margin-left: 15px;
                                }
                            }
                        }
                        .list-price {
                            color: #d90000;
                            font-size: 14px;
                            font-weight: bold;
                            line-height: 22px;
                        }
                        .list-button {
                            cursor: default;
                            display: inline-block;
                            width: 51.6%; // 118px
                            height: 30px;
                            color: #f46200;
                            font-size: 12px;
                            text-align: center;
                            line-height: 32px;
                            border: 1px solid #f46200;
                            border-radius: 20px;
                            margin-top: 5px;
                            @include transition;
                            &:hover {
                                color: #fff;
                                background: #f46200;
                            }
                        }
                    }
                }
                @media only screen and (max-width: 900px) {
                    .content-list {
                        &:nth-of-type(3), &:nth-of-type(6), &:nth-of-type(9) {
                            margin-right: 18px;
                        }
                    }
                }
            }
        }
    }
</style>
