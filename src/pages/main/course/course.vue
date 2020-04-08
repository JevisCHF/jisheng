<template>
    <div>
        <CourseSwiper/>
        <!-- fixed-scroll-navigatiog页面固定滚动导航start -->
        <div class="wrapper">
            <div class="scroll-nav-wrapper fixed" id="scroll-nav">
                <div class="nav-box">
                    <ul class="nav-lists">
                        <li class="nav-list">
                            <a class="nav-title" @click="goHotCourseware()">经济热点课件</a>
                        </li>
                        <li class="nav-list">
                            <a class="nav-title" @click="goknowledgeLecture()">专业知识讲座</a>
                        </li>
                        <li class="nav-list">
                            <a class="nav-title" @click="goSkillTraining()">技能培训教程</a>
                        </li>
                        <li class="nav-list">
                            <a class="nav-title" @click="goContactProfessor()">解惑专家连线</a>
                        </li>
                        <li class="nav-list">
                            <a class="nav-title" @click="goIndustryPark()">产业园区介绍</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- fixed-scroll-navigatiog页面固定滚动导航end -->
        <CourseHotCourseware id="hotCourseware" :hotCoursewareData="hotCoursewareData"/>
        <CourseKnowledgeLecture id="knowledgeLecture" :knowledgeLectureData="knowledgeLectureData"/>
        <CourseSkillTraining id="skillTraining" :skillTrainingData="skillTrainingData"/>
        <CourseContactProfessor id="contactProfessor"/>
        <CourseIndustryPark id="industryPark"/>
        <!-- <router-link to="/supplement/course-detail">
            课程详情页面
        </router-link> -->
    </div>
</template>

<script>
import CourseSwiper from './components/swiper'
import CourseHotCourseware from './components/hot-courseware'
import CourseKnowledgeLecture from './components/knowledge-lecture'
import CourseSkillTraining from './components/skill-training'
import CourseContactProfessor from './components/contact-professor'
import CourseIndustryPark from './components/industry-park'
import { getHotCoursewareInfo, getKnowledgeLectureInfo, getSkillTrainingInfo } from '../../../api/course'
export default {
    name: 'Course',
    components: {
        CourseSwiper,
        CourseHotCourseware,
        CourseKnowledgeLecture,
        CourseSkillTraining,
        CourseContactProfessor,
        CourseIndustryPark
    },
    data () {
        return {
            // 热点课程数据
            hotCoursewareData: [],
            // 知识讲座数据
            knowledgeLectureData: [],
            // 技能培训数据
            skillTrainingData: []
        }
    },
    mounted () {
        this.getHotCoursewareData()
        this.getKnowledgeLectureData()
        this.getSkillTrainingData()
        this.fixedScrollNav()
    },
    methods: {
        /**
         * 获取热点课程数据
         */
        getHotCoursewareData () {
            getHotCoursewareInfo().then((response) => {
                this.hotCoursewareData = response.data.content.list
            }).catch((error) => {
                console.log(error)
            })
        },
        /**
         * 获取知识讲座数据
         */
        getKnowledgeLectureData () {
            getKnowledgeLectureInfo().then((response) => {
                this.knowledgeLectureData = response.data.content.list
            }).catch((error) => {
                console.log(error)
            })
        },
        /**
         * 获取技能培训数据
         */
        getSkillTrainingData () {
            getSkillTrainingInfo().then((response) => {
                this.skillTrainingData = response.data.content.list
            }).catch((error) => {
                console.log(error)
            })
        },
        /**
         * 滚动导航吸顶效果方法
         */
        fixedScrollNav () {
            var scrollNav = document.getElementById('scroll-nav')
            scrollNav.classList.remove('fixed') // 解决开始导航就吸顶的问题
            window.onscroll = () => {
                var topScroll = document.documentElement.scrollTop // 文档向上滚动的高度
                let screenWidth = document.body.clientWidth // 屏幕可视宽度
                if (screenWidth >= 2030) {
                    if (topScroll > 700) {
                        scrollNav.classList.add('fixed')
                    } else {
                        scrollNav.classList.remove('fixed')
                    }
                } else if (screenWidth < 2030 && screenWidth >= 1800) {
                    if (topScroll > 650) {
                        scrollNav.classList.add('fixed')
                    } else {
                        scrollNav.classList.remove('fixed')
                    }
                } else if (screenWidth < 1800 && screenWidth >= 1550) {
                    if (topScroll > 585) {
                        scrollNav.classList.add('fixed')
                    } else {
                        scrollNav.classList.remove('fixed')
                    }
                } else if (screenWidth < 1550 && screenWidth >= 1200) {
                    if (topScroll > 510) {
                        scrollNav.classList.add('fixed')
                    } else {
                        scrollNav.classList.remove('fixed')
                    }
                } else if (screenWidth < 1200 && screenWidth >= 1000) {
                    if (topScroll > 450) {
                        scrollNav.classList.add('fixed')
                    } else {
                        scrollNav.classList.remove('fixed')
                    }
                } else if (screenWidth < 1000) {
                    if (topScroll > 250) {
                        scrollNav.classList.add('fixed')
                    } else {
                        scrollNav.classList.remove('fixed')
                    }
                }
            }
        },
        /**
         * 热点课程定位锚点
         */
        goHotCourseware () {
            document.getElementById('hotCourseware').scrollIntoView()
        },
        /**
         * 知识讲座定位锚点
         */
        goknowledgeLecture () {
            document.getElementById('knowledgeLecture').scrollIntoView()
        },
        /**
         * 技能培训定位锚点
         */
        goSkillTraining () {
            document.getElementById('skillTraining').scrollIntoView()
        },
        /**
         * 专家连线定位锚点
         */
        goContactProfessor () {
            document.getElementById('contactProfessor').scrollIntoView()
        },
        /**
         * 产业园区定位锚点
         */
        goIndustryPark () {
            document.getElementById('industryPark').scrollIntoView()
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    // 页面固定滚动导航样式
    .scroll-nav-wrapper {
        margin: -60px auto 0 auto;
        position: relative;
        z-index: 9;
        .nav-box {
            width: 1360px;
            height: 60px;
            overflow: hidden;
            background: rgba(0,190,197,0.8);
            box-shadow: 0 5px 10px #cacaca;
            .nav-lists {
                display: flex;
                justify-content: center;
                .nav-list {
                    float: left;
                    height: 100%;
                    line-height: 60px;
                    margin-right: 8.46%; // 115px
                    &:last-child {
                        margin-right: 0;
                    }
                    .nav-title {
                        cursor: pointer;
                        color: #fff;
                        font-size: 18px;
                        @include transition;
                        &:hover {
                            color: #00fffc;
                            text-shadow: 2px 2px 2px black;
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 1360px) {
            .nav-box {
                width: 100%;
            }
        }
    }
    .fixed {
        width: 100%;
        margin: 0 auto;
        position: fixed;
        top: 0;
        z-index: 9999;
    }
</style>
