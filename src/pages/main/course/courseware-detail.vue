<template>
    <div class="courseware-detail-wrapper">
        <!-- header 页面头部 start -->
        <div class="header-wrapper">
            <div class="wrapper header-text">
                <h5 class="location">您现在所在的位置：智慧树云课堂>>经济热点课件>>详情页</h5>
                <h3 class="course-titile">{{ homeCoursewareDetailData.className }}</h3>
                <h4 class="course-price">
                    价格 :
                    <span>￥</span>
                    <span>{{ homeCoursewareDetailData.classPrice }}</span>
                    <span>.00</span>
                </h4>
                <div class="course-information">
                    <span class="information-list">
                        <span>最近更新</span>：{{ homeCoursewareDetailData.updateTime | formatDate }}
                    </span>
                    <span class="information-list">
                        <span>课程</span>：免费
                    </span>
                    <span class="information-list">
                        <span>总课时</span>：{{ homeCoursewareDetailData.classNum }}
                    </span>
                    <span class="information-list">
                        <span>老师</span>：{{ homeCoursewareDetailData.teacherName }}
                    </span>
                    <span class="information-list">
                        <span>累计下载</span>：{{ homeCoursewareDetailData.downloadNum }}
                    </span>
                    <span class="information-list">
                        <span>浏览</span>：{{ homeCoursewareDetailData.lookNum }}
                    </span>
                </div>
                <div class="course-share" id="share-box">
                    <a class="share-img"></a>
                    <a class="share-img"></a>
                    <a class="share-img"></a>
                    <a class="share-img"></a>
                </div>
                <div class="course-buy">
                    <img src="@/assets/images/main-course/course-detail-buy.png" alt="请稍等......">
                </div>
            </div>
        </div>
        <!-- header 页面头部 end -->
        <!-- content 页面内容 start -->
        <div class="content-wrapper">
            <div class="content-header">
                <div class="wrapper">
                    <ul class="header-titles" id="courseware-titles">
                        <li class="header-title header-title-active">课件简介</li>
                        <li class="header-title">课件章节</li>
                    </ul>
                </div>
            </div>
            <div class="content-main" id="courseware-contents">
                <div class="wrapper">
                    <!-- left-introduction 左侧课程介绍 start -->
                    <!-- courseware-introduction 课件简介 start -->
                    <div class="course-introduction courseware-introduction">
                        <div class="introduction">
                            <h5 class="introduction-title">老师简介</h5>
                            <div class="introduction-detail" id="teacherIntroduction"></div>
                        </div>
                        <div class="introduction">
                            <h5 class="introduction-title">课程介绍</h5>
                            <div class="introduction-detail" id="classAbstract"></div>
                        </div>
                    </div>
                    <!-- courseware-introduction 课件简介 end -->
                    <!-- courseware-chapter 课件章节 start -->
                    <div class="course-chapter courseware-chapter hide">
                        <div class="chapter-lists" v-for="(item, index) of homeCoursewareDetailData.children" :key="index">
                            <h5 class="chapter-title">{{ item.className }}</h5>
                            <ul class="chapter-sections">
                                <li class="chapter-section" v-for="(childrenItem, index) of item.children" :key="index">
                                    <h5 class="section-title">{{ childrenItem.className }}</h5>
                                    <router-link :to="childrenItem.resourceUrl">
                                        <button class="section-look">查看</button>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- courseware-chapter 课件章节 end -->
                    <!-- left-introduction 左侧课程介绍 end -->
                    <!-- right-lists 右侧相关课程列表 start -->
                    <div class="course-lists">
                        <h5 class="lists-title">相关课程</h5>
                        <ul class="lists-box">
                            <li class="course-list" v-for="(item, index) of coursewareDetailData" :key="index">
                                <img class="list-img" src="@/assets/images/main-course/hot-courseware-list01.jpg" alt="请稍等......"
                                @click="changeCourse(index)">
                                <!-- <img :src="item.imgUrl" alt="请稍等......"> -->
                                <div class="list-text">
                                    <div class="list-title">
                                        <a class="title-text" @click="changeCourse(index)">{{ item.className }}</a>
                                    </div>
                                    <h6 class="list-price">￥{{ item.classPrice }}</h6>
                                    <h6 class="list-time">课时:{{ item.classNum }}</h6>
                                    <div class="list-interaction">
                                        <span class="browse">{{ item.lookNum }}</span>
                                        <span class="download">{{ item.downloadNum }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- right-lists 右侧相关课程列表 end -->
                </div>
            </div>
        </div>
        <!-- content 页面内容 end -->
    </div>
</template>

<script>
import { getCoursewareDetailInfo } from '../../../api/course'
import moment from 'moment'
export default {
    name: 'CourseCoursewareDetail',
    data () {
        return {
            /**
             * 热点课程详情数据
             */
            coursewareDetailData: [],
            /**
             * 用户点击进入的对应的热点课程详情数据
             */
            homeCoursewareDetailData: [],
            /**
             * 用户点击进入的对应的热点课程详情Id
             */
            menuId: this.$route.params.coursewareId
        }
    },
    filters: {
        formatDate: function (date) {
            return moment(date).format('YYYY-MM-DD')
        }
    },
    mounted () {
        this.getCoursewareDetailData()
        this.coursewareTitleChange()
    },
    methods: {
        /**
         * 获取热点课程详情数据
         */
        getCoursewareDetailData () {
            getCoursewareDetailInfo().then((response) => {
                this.coursewareDetailData = response.data.content
                for (var i = 0; i < this.coursewareDetailData.length; i++) {
                    if (this.menuId === this.coursewareDetailData[i].menuId.toString()) {
                        this.homeCoursewareDetailData = this.coursewareDetailData[i]
                    }
                }
                // 给课程简介部分赋内容值
                var teacherIntroduction = document.getElementById('teacherIntroduction') // 老师简介
                var classAbstract = document.getElementById('classAbstract') // 课程介绍
                teacherIntroduction.innerHTML = this.homeCoursewareDetailData.teacherIntroduction
                classAbstract.innerHTML = this.homeCoursewareDetailData.classAbstract
            }).catch((error) => {
                console.log(error)
            })
        },
        /**
         * 点击课程头部标签改变课程显示内容
         */
        coursewareTitleChange () {
            var coursewareTitles = document.getElementById('courseware-titles')
            var coursewareTitle = coursewareTitles.getElementsByTagName('li')
            var coursewareContents = document.getElementById('courseware-contents')
            var coursewareIntroduction = coursewareContents.getElementsByClassName('courseware-introduction')[0]
            var coursewareChapter = coursewareContents.getElementsByClassName('courseware-chapter')[0]
            coursewareTitle[0].onclick = () => {
                coursewareTitle[1].classList.remove('header-title-active')
                coursewareChapter.classList.add('hide')
                coursewareTitle[0].classList.add('header-title-active')
                coursewareIntroduction.classList.remove('hide')
            }
            coursewareTitle[1].onclick = () => {
                coursewareTitle[0].classList.remove('header-title-active')
                coursewareIntroduction.classList.add('hide')
                coursewareTitle[1].classList.add('header-title-active')
                coursewareChapter.classList.remove('hide')
            }
        },
        /**
         * 点击更换页面课程介绍内容
         */
        changeCourse (index) {
            var teacherIntroduction = document.getElementById('teacherIntroduction') // 老师简介
            var classAbstract = document.getElementById('classAbstract') // 课程介绍
            this.homeCoursewareDetailData = this.coursewareDetailData[index]
            teacherIntroduction.innerHTML = this.homeCoursewareDetailData.teacherIntroduction
            classAbstract.innerHTML = this.homeCoursewareDetailData.classAbstract
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "./course-detail.sass";
    .courseware-detail-wrapper {
        .header-wrapper {
            background: url("~images/main-course/courseware-detail-bg.jpg") no-repeat;
            background-size: 100% 100%;
        }
    }
</style>
