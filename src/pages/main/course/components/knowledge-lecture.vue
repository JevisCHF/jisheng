<template>
    <div class="knowledge-lecture-wrapper">
        <div class="wrapper">
            <!-- knowledge-lecture-header知识讲座头部start -->
            <div class="knowledge-lecture-header">
                <h3 class="course-header-title">专业知识讲座</h3>
            </div>
            <!-- knowledge-lecture-header知识讲座头部end -->
            <!-- knowledge-lecture-content知识讲座内容start -->
            <div class="knowledge-lecture-content">
                <ul class="content-lists">
                    <li class="content-list" v-for="(item, index) of knowledgeLectureData" :key="index">
                        <router-link target="_blank" :to="'/main/course/lecture-detail/' + item.menuId">
                            <img class="list-img" src="@/assets/images/main-course/knowledge-lecture-list01.png" alt="请稍等......">
                            <!-- <img :src="item.imgUrl" alt="请稍等......"> -->
                        </router-link>
                        <div class="list-title">
                            <router-link target="_blank" :to="'/main/course/lecture-detail/' + item.menuId">
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
                    </li>
                </ul>
            </div>
            <!-- knowledge-lecture-content知识讲座内容end -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseKnowledgeLecture',
    props: {
        /**
         * 知识讲座数据
         */
        knowledgeLectureData: Array,
        required: true
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../course.sass";
    .knowledge-lecture-wrapper {
        background: #f2f2f2;
        box-shadow: 0 10px 10px #e1e1e1 inset;
        padding: 60px 0;
        // 知识讲座头部样式
        .knowledge-lecture-header {
            .course-header-title {
                color: #000675;
            }
        }
        // 知识讲座内容样式
        .knowledge-lecture-content {
            width: 100% !important;
            overflow: hidden;
            margin-top: 40px;
            .content-lists {
                width: 100% !important;
                .content-list {
                    float: left;
                    width: 23.52%; // 320px
                    padding: 0.74%; // 10px
                    .list-img {
                        width: 100%; // 320px
                        height: 195px;
                        border-radius: 10px;
                        transition: all .3s;
                        &:hover {
                            box-shadow: 0 0 11px #333;
                        }
                    }
                    // 知识讲座内容字体样式
                    .list-title {
                        font-size: 18px;
                        font-weight: bold;
                        line-height: 24px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin-top: 15px;
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
                        @media only screen and (max-width: 1000px) {
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
</style>
