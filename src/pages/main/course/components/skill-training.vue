<template>
    <div class="skill-training-wrapper">
        <div class="wrapper">
            <!-- skill-training-header技能培训头部start -->
            <div class="skill-training-header">
                <h3 class="course-header-title">技能培训教程</h3>
            </div>
            <!-- skill-training-header技能培训头部end -->
            <!-- skill-training-content技能培训内容start -->
            <div class="skill-training-content">
                <ul class="content-lists">
                    <li class="content-list" v-for="(item, index) of skillTrainingData" :key="index">
                        <router-link target="_blank" :to="'/main/course/training-detail/' + item.menuId">
                            <img class="list-img" src="@/assets/images/main-course/skill-training-list01.jpg" alt="请稍等......">
                            <!-- <img :src="item.imgUrl" alt="请稍等......"> -->
                        </router-link>
                        <div class="list-text">
                            <div class="list-title">
                                <router-link target="_blank" :to="'/main/course/training-detail/' + item.menuId">
                                    <a class="title-text">{{ item.className }}</a>
                                </router-link>
                            </div>
                            <div class="list-describe">
                                <span class="describe-left">主讲：{{ item.teacherName }}</span>
                                <div class="describe-right">
                                    <span class="right-collect">收藏</span>
                                    <span class="right-download">下载：{{ item.downloadNum }}</span>
                                </div>
                            </div>
                            <h5 class="list-price">￥{{ item.classPrice }}</h5>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- skill-training-content技能培训内容end -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseSkillTraining',
    props: {
        /**
         * 技能培训数据
         */
        skillTrainingData: Array,
        required: true
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../course.sass";
    .skill-training-wrapper {
        padding: 60px 0;
        // 技能培训头部样式
        .skill-training-header {
            .course-header-title {
                color: #00b2b8;
            }
        }
        // 技能培训内容样式
        .skill-training-content {
            width: 100% !important;
            overflow: hidden;
            padding: 10px 0 20px 0;
            .content-lists {
                width: 100% !important;
                .content-list {
                    float: left;
                    width: 23.52%;  // 320px
                    border-radius: 10px;
                    margin: 40px 0.74% 0 0.74%;
                    transition: all .3s;
                    &:hover {
                        box-shadow: 0 0 20px #999;
                    }
                    .list-img {
                        width: 100%; // 320px
                        height: 195px;
                        border-radius: 10px 10px 0 0;
                    }
                    // 技能培训内容字体样式
                    .list-text {
                        padding: 15px 10px;
                        .list-title {
                            font-size: 18px;
                            font-weight: bold;
                            line-height: 24px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            .title-text {
                                cursor: default;
                                color: #333;
                                @include transition;
                                &:hover {
                                    color: #dc0000;
                                }
                            }
                        }
                        .list-describe {
                            color: #999;
                            font-size: 14px;
                            margin-top: 7px;
                            .describe-left {
                                float: left;
                                line-height: 20px;
                                margin-bottom: 3px;
                            }
                            .describe-right {
                                float: right;
                                span {
                                    display: inline-block;
                                    line-height: 20px;
                                }
                                .right-collect {
                                    background: url("~images/main-course/course-content-collect.png") no-repeat;
                                    padding-left: 25px;
                                }
                                .right-download {
                                    background: url("~images/main-course/course-content-download.png") no-repeat;
                                    padding-left: 22px;
                                    margin-left: 15px;
                                }
                            }
                            @media only screen and (max-width: 1080px) {
                                .describe-left {
                                    float: none;
                                }
                                .describe-right {
                                    float: none;
                                }
                            }
                        }
                        .list-price {
                            clear: both;
                            color: #d90000;
                            font-size: 18px;
                            line-height: 24px;
                        }
                    }
                }
            }
        }
    }
</style>
