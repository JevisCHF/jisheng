<template>
    <div>
        <div class="contact-professor-wrapper">
            <div class="wrapper">
                <!--contact-professor-header专家连线头部start -->
                <div class="contact-professor-header">
                    <div class="course-header-title">解惑专家连线</div>
                </div>
                <!--contact-professor-header专家连线头部end -->
                <!--contact-professor-content专家连线内容start -->
                <div class="contact-professor-content" id="content-box">
                    <ul class="content-lists">
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list01.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">冯晓强</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list02.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">李伟旗</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list03.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">申晨</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list04.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">蒋小华</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list05.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">李新章</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list06.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">周永亮</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list07.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">王越</h5>
                        </li>
                    </ul>
                    <ul class="content-lists">
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list08.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">陆慧萍</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list09.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">尹文刚</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list10.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">邱伯森</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list11.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">马治宇</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list12.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">张翔</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list13.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">田丽</h5>
                        </li>
                        <li class="content-list">
                            <div class="list-portrait">
                                <img class="list-img" src="@/assets/images/main-course/contact-professor-list14.jpg" alt="请稍等......" @click="showRequirement">
                            </div>
                            <h5 class="list-name">金满铮</h5>
                        </li>
                    </ul>
                </div>
                <!--contact-professor-content专家连线内容end -->
            </div>
        </div>
        <!-- dialog-requirement提交需求对话弹框start -->
        <DialogMask v-show="isShowMask"/>
        <DialogRequirement v-show="isShowRequirement" @hideRequirement="hideRequirement"/>
        <!-- dialog-requirement提交需求对话弹框end -->
    </div>
</template>

<script>
import Active from '../../../../assets/images/main-course/contact-professor-list-active.gif'
import ListOne from '../../../../assets/images/main-course/contact-professor-list01.jpg'
import ListTwo from '../../../../assets/images/main-course/contact-professor-list02.jpg'
import ListThree from '../../../../assets/images/main-course/contact-professor-list03.jpg'
import ListFour from '../../../../assets/images/main-course/contact-professor-list04.jpg'
import ListFive from '../../../../assets/images/main-course/contact-professor-list05.jpg'
import ListSix from '../../../../assets/images/main-course/contact-professor-list06.jpg'
import ListSeven from '../../../../assets/images/main-course/contact-professor-list07.jpg'
import ListEight from '../../../../assets/images/main-course/contact-professor-list08.jpg'
import ListNine from '../../../../assets/images/main-course/contact-professor-list09.jpg'
import ListTen from '../../../../assets/images/main-course/contact-professor-list10.jpg'
import ListEleven from '../../../../assets/images/main-course/contact-professor-list11.jpg'
import ListTwelve from '../../../../assets/images/main-course/contact-professor-list12.jpg'
import ListThirteen from '../../../../assets/images/main-course/contact-professor-list13.jpg'
import ListFourteen from '../../../../assets/images/main-course/contact-professor-list14.jpg'
import DialogMask from '../../../dialog/mask'
import DialogRequirement from '../../../dialog/requirement'
export default {
    name: 'CourseContactProfessor',
    components: {
        DialogMask,
        DialogRequirement
    },
    data () {
        return {
            /**
             * 是否显示对话弹框遮罩层判断值
             */
            isShowMask: false,
            /**
             * 是否显示提交需求弹框判断值
             */
            isShowRequirement: false
        }
    },
    mounted () {
        this.changeimgSrc()
    },
    methods: {
        /**
         * 点击图片显示提交需求弹框方法
         */
        showRequirement () {
            this.isShowMask = true
            this.isShowRequirement = true
        },
        /**
         * 隐藏提交需求弹框方法
         */
        hideRequirement () {
            this.isShowMask = false
            this.isShowRequirement = false
        },
        /**
         * 鼠标经过改变图片src路径方法
         */
        changeimgSrc () {
            var contentBox = document.getElementById('content-box')
            var contentLists = contentBox.getElementsByClassName('content-lists')
            for (var i = 0; i < contentLists.length; i++) {
                (function (num) {
                    var listImg = contentLists[num].getElementsByClassName('list-img')
                    for (var j = 0; j < listImg.length; j++) {
                        (function (temp) {
                            listImg[temp].onmouseover = () => {
                                listImg[temp].src = Active
                            }
                            listImg[temp].onmouseout = () => {
                                switch (num) {
                                    case 0:
                                        switch (temp) {
                                            case 0:
                                                listImg[temp].src = ListOne
                                                break
                                            case 1:
                                                listImg[temp].src = ListTwo
                                                break
                                            case 2:
                                                listImg[temp].src = ListThree
                                                break
                                            case 3:
                                                listImg[temp].src = ListFour
                                                break
                                            case 4:
                                                listImg[temp].src = ListFive
                                                break
                                            case 5:
                                                listImg[temp].src = ListSix
                                                break
                                            case 6:
                                                listImg[temp].src = ListSeven
                                                break
                                        }
                                        break
                                    case 1:
                                        switch (temp) {
                                            case 0:
                                                listImg[temp].src = ListEight
                                                break
                                            case 1:
                                                listImg[temp].src = ListNine
                                                break
                                            case 2:
                                                listImg[temp].src = ListTen
                                                break
                                            case 3:
                                                listImg[temp].src = ListEleven
                                                break
                                            case 4:
                                                listImg[temp].src = ListTwelve
                                                break
                                            case 5:
                                                listImg[temp].src = ListThirteen
                                                break
                                            case 6:
                                                listImg[temp].src = ListFourteen
                                                break
                                        }
                                }
                            }
                        })(j)
                    }
                })(i)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../course.sass";
    .contact-professor-wrapper {
        height: 550px;
        overflow: hidden;
        background: #edc578 url("~images/main-course/contact-professor-bg.jpg") center center no-repeat;
        // 专家连线头部样式
        .contact-professor-header {
            padding-top: 40px;
            .course-header-title {
                color: #a76d00;
                letter-spacing: 0;
                background: none;
            }
        }
        // 专家连线内容样式
        .contact-professor-content {
            margin-top: 20px;
            .content-lists {
                display: flex;
                justify-content: center;
                .content-list {
                    float: left;
                    margin: 20px 44px 0 0;
                    &:last-child {
                        margin-right: 0;
                    }
                    .list-portrait {
                        padding: 8px;
                        border-radius: 80px;
                        .list-img {
                            width: 140px;
                            height: 140px;
                            border-radius: 70px;
                            box-shadow: 0 0 15px #ca9c43;
                        }
                    }
                    .list-name {
                        color: #333;
                        font-size: 18px;
                        text-align: center;
                        line-height: 24px;
                    }
                }
            }
        }
    }
</style>
