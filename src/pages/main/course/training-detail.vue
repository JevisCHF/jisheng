<template>
    <div class="training-detail-wrapper">
        <!-- header 页面头部 start -->
        <div class="header-wrapper">
            <div class="wrapper header-text">
                <h5 class="location">您现在所在的位置：智慧树云课堂>>技能培训教程>>详情页</h5>
                <h3 class="course-titile">{{ homeTrainingDetailData.className }}</h3>
                <h4 class="course-price">
                    价格 :
                    <span>￥</span>
                    <span>{{ homeTrainingDetailData.classPrice }}</span>
                    <span>.00</span>
                </h4>
                <div class="course-information">
                    <span class="information-list">
                        <span>最近更新</span>：{{ homeTrainingDetailData.updateTime | formatDate }}
                    </span>
                    <span class="information-list">
                        <span>课程</span>：免费
                    </span>
                    <span class="information-list">
                        <span>总课时</span>：{{ homeTrainingDetailData.classNum }}
                    </span>
                    <span class="information-list">
                        <span>老师</span>：{{ homeTrainingDetailData.teacherName }}
                    </span>
                    <span class="information-list">
                        <span>累计下载</span>：{{ homeTrainingDetailData.downloadNum }}
                    </span>
                    <span class="information-list">
                        <span>浏览</span>：{{ homeTrainingDetailData.lookNum }}
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
                    <ul class="header-titles" id="training-titles">
                        <li class="header-title header-title-active">教程简介</li>
                        <li class="header-title">教程章节</li>
                    </ul>
                </div>
            </div>
            <div class="content-main" id="training-contents">
                <div class="wrapper">
                    <!-- left-introduction 左侧课程介绍 start -->
                    <!-- training-introduction 教程简介 start -->
                    <div class="course-introduction training-introduction">
                        <div class="introduction">
                            <h5 class="introduction-title">老师简介</h5>
                            <div class="introduction-detail" id="teacherIntroduction"></div>
                        </div>
                        <div class="introduction">
                            <h5 class="introduction-title">课程介绍</h5>
                            <div class="introduction-detail" id="classAbstract"></div>
                        </div>
                    </div>
                    <!-- training-introduction 教程简介 end -->
                    <!-- training-chapter 教程章节 start -->
                    <div class="course-chapter training-chapter hide">
                        <div class="chapter-lists" v-for="(item, index) of homeTrainingDetailData.children" :key="index">
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
                    <!-- training-chapter 教程章节 end -->
                    <!-- left-introduction 左侧课程介绍 end -->
                    <!-- right-lists 右侧相关课程列表 start -->
                    <div class="course-lists">
                        <h5 class="lists-title">相关课程</h5>
                        <ul class="lists-box">
                            <li class="course-list" v-for="(item, index) of trainingDetailData" :key="index">
                                <img class="list-img" src="@/assets/images/main-course/skill-training-list01.jpg" alt="请稍等......"
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
import { getTrainingDetailInfo } from '../../../api/course'
import moment from 'moment'
export default {
    name: 'CourseTrainingDetail',
    data () {
        return {
            /**
             * 技能培训详情数据
             */
            trainingDetailData: [],
            /**
             * 用户点击进入的对应的技能培训详情数据
             */
            homeTrainingDetailData: [],
            /**
             * 用户点击进入的对应的技能培训详情Id
             */
            menuId: this.$route.params.trainingId
        }
    },
    filters: {
         formatDate: function (date) {
             return moment(date).format('YYYY-MM-DD')
         }
    },
    mounted () {
        this.getTrainingDetailData()
        this.trainingTitleChange()
    },
    methods: {
        /**
         * 获取技能培训详情数据
         */
        getTrainingDetailData () {
            getTrainingDetailInfo().then((response) => {
                this.trainingDetailData = response.data.content
                for (var i = 0; i < this.trainingDetailData.length; i++) {
                    if (this.menuId === this.trainingDetailData[i].menuId.toString()) {
                        this.homeTrainingDetailData = this.trainingDetailData[i]
                    }
                }
                // 给教程简介部分赋内容值
                var teacherIntroduction = document.getElementById('teacherIntroduction') // 老师简介
                var classAbstract = document.getElementById('classAbstract') // 课程介绍
                teacherIntroduction.innerHTML = this.homeTrainingDetailData.teacherIntroduction
                classAbstract.innerHTML = this.homeTrainingDetailData.classAbstract
            }).catch((error) => {
                console.log(error)
            })
        },
        /**
         * 点击课程头部标签改变课程显示内容
         */
        trainingTitleChange () {
            var trainingTitles = document.getElementById('training-titles')
            var trainingTitle = trainingTitles.getElementsByTagName('li')
            var trainingContents = document.getElementById('training-contents')
            var trainingIntroduction = trainingContents.getElementsByClassName('training-introduction')[0]
            var trainingChapter = trainingContents.getElementsByClassName('training-chapter')[0]
            trainingTitle[0].onclick = () => {
                trainingTitle[1].classList.remove('header-title-active')
                trainingChapter.classList.add('hide')
                trainingTitle[0].classList.add('header-title-active')
                trainingIntroduction.classList.remove('hide')
            }
            trainingTitle[1].onclick = () => {
                trainingTitle[0].classList.remove('header-title-active')
                trainingIntroduction.classList.add('hide')
                trainingTitle[1].classList.add('header-title-active')
                trainingChapter.classList.remove('hide')
            }
        },
        /**
         * 点击更换页面课程介绍内容
         */
        changeCourse (index) {
            var teacherIntroduction = document.getElementById('teacherIntroduction') // 老师简介
            var classAbstract = document.getElementById('classAbstract') // 课程介绍
            this.homeTrainingDetailData = this.trainingDetailData[index]
            teacherIntroduction.innerHTML = this.homeTrainingDetailData.teacherIntroduction
            classAbstract.innerHTML = this.homeTrainingDetailData.classAbstract
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "./course-detail.sass";
    .training-detail-wrapper {
        .header-wrapper {
            background: url("~images/main-course/training-detail-bg.png") no-repeat;
            background-size: 100% 100%;
        }
    }
</style>
