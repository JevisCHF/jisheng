<template>
    <div class="lecture-detail-wrapper">
        <!-- header 页面头部 start -->
        <div class="header-wrapper">
            <div class="wrapper header-text">
                <h5 class="location">您现在所在的位置：智慧树云课堂>>专业知识讲座>>详情页</h5>
                <h3 class="course-titile">{{ homeLectureDetailData.className }}</h3>
                <h4 class="course-price">
                    价格 :
                    <span>￥</span>
                    <span>{{ homeLectureDetailData.classPrice }}</span>
                    <span>.00</span>
                </h4>
                <div class="course-information">
                    <span class="information-list">
                        <span>最近更新</span>：{{ homeLectureDetailData.updateTime | formatDate }}
                    </span>
                    <span class="information-list">
                        <span>课程</span>：免费
                    </span>
                    <span class="information-list">
                        <span>总课时</span>：{{ homeLectureDetailData.classNum }}
                    </span>
                    <span class="information-list">
                        <span>老师</span>：{{ homeLectureDetailData.teacherName }}
                    </span>
                    <span class="information-list">
                        <span>累计下载</span>：{{ homeLectureDetailData.downloadNum }}
                    </span>
                    <span class="information-list">
                        <span>浏览</span>：{{ homeLectureDetailData.lookNum }}
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
                    <ul class="header-titles" id="lecture-titles">
                        <li class="header-title header-title-active">视频简介</li>
                        <li class="header-title">视频章节</li>
                    </ul>
                </div>
            </div>
            <div class="content-main" id="lecture-contents">
                <div class="wrapper">
                    <!-- left-introduction 左侧课程介绍 start -->
                    <!-- lecture-introduction 视频简介 start -->
                    <div class="course-introduction lecture-introduction">
                        <div class="introduction">
                            <h5 class="introduction-title">老师简介</h5>
                            <div class="introduction-detail" id="teacherIntroduction"></div>
                        </div>
                        <div class="introduction">
                            <h5 class="introduction-title">课程介绍</h5>
                            <div class="introduction-detail" id="classAbstract"></div>
                        </div>
                    </div>
                    <!-- lecture-introduction 视频简介 end -->
                    <!-- lecture-chapter 视频章节 start -->
                    <div class="course-chapter lecture-chapter hide">
                        <div class="chapter-lists" v-for="(item, index) of homeLectureDetailData.children" :key="index">
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
                    <!-- lecture-chapter 视频章节 end -->
                    <!-- left-introduction 左侧课程介绍 end -->
                    <!-- right-lists 右侧相关课程列表 start -->
                    <div class="course-lists">
                        <h5 class="lists-title">相关课程</h5>
                        <ul class="lists-box">
                            <li class="course-list" v-for="(item, index) of lectureDetailData" :key="index">
                                <img class="list-img" src="@/assets/images/main-course/knowledge-lecture-list01.png" alt="请稍等......"
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
import { getLectureDetailInfo } from '../../../api/course'
import moment from 'moment'
export default {
    name: 'CourseLectureDetail',
    data () {
        return {
            /**
             * 知识讲座详情数据
             */
            lectureDetailData: [],
            /**
             * 用户点击进入的对应的知识讲座详情数据
             */
            homeLectureDetailData: [],
            /**
             * 用户点击进入的对应的知识讲座详情Id
             */
            menuId: this.$route.params.lectureId
        }
    },
    filters: {
        formatDate: function (date) {
            return moment(date).format('YYYY-MM-DD')
        }
    },
    mounted () {
        this.getLectureDetailData()
        this.lectureTitleChange()
    },
    methods: {
        /**
         * 获取知识讲座详情数据
         */
        getLectureDetailData () {
            getLectureDetailInfo().then((response) => {
                this.lectureDetailData = response.data.content
                for (var i = 0; i < this.lectureDetailData.length; i++) {
                    if (this.menuId === this.lectureDetailData[i].menuId.toString()) {
                        this.homeLectureDetailData = this.lectureDetailData[i]
                    }
                }
                // 给视频简介部分赋内容值
                var teacherIntroduction = document.getElementById('teacherIntroduction') // 老师简介
                var classAbstract = document.getElementById('classAbstract') // 课程介绍
                teacherIntroduction.innerHTML = this.homeLectureDetailData.teacherIntroduction
                classAbstract.innerHTML = this.homeLectureDetailData.classAbstract
            }).catch((error) => {
                console.log(error)
            })
        },
        /**
         * 点击课程头部标签改变课程显示内容
         */
        lectureTitleChange () {
            var lectureTitles = document.getElementById('lecture-titles')
            var lectureTitle = lectureTitles.getElementsByTagName('li')
            var lectureContents = document.getElementById('lecture-contents')
            var lectureIntroduction = lectureContents.getElementsByClassName('lecture-introduction')[0]
            var lectureChapter = lectureContents.getElementsByClassName('lecture-chapter')[0]
            lectureTitle[0].onclick = () => {
                lectureTitle[1].classList.remove('header-title-active')
                lectureChapter.classList.add('hide')
                lectureTitle[0].classList.add('header-title-active')
                lectureIntroduction.classList.remove('hide')
            }
            lectureTitle[1].onclick = () => {
                lectureTitle[0].classList.remove('header-title-active')
                lectureIntroduction.classList.add('hide')
                lectureTitle[1].classList.add('header-title-active')
                lectureChapter.classList.remove('hide')
            }
        },
        /**
         * 点击更换页面课程介绍内容
         */
        changeCourse (index) {
            var teacherIntroduction = document.getElementById('teacherIntroduction') // 老师简介
            var classAbstract = document.getElementById('classAbstract') // 课程介绍
            this.homeLectureDetailData = this.lectureDetailData[index]
            teacherIntroduction.innerHTML = this.homeLectureDetailData.teacherIntroduction
            classAbstract.innerHTML = this.homeLectureDetailData.classAbstract
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "./course-detail.sass";
    .lecture-detail-wrapper {
        .header-wrapper {
            background: url("~images/main-course/lecture-detail-bg.jpg") no-repeat;
            background-size: 100% 100%;
        }
    }
</style>
