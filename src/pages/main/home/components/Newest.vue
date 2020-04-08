<template>
    <div class="wrapper newest-wrapper">
        <ul>
            <!-- newest-data最新数据start -->
            <li class="newest-box">
                <div class="newest-title">
                    <h2>最新</h2>
                    <h2>数据</h2>
                </div>
                <div class="newest-content">
                    <img src="@/assets/images/main-home/newest-data.png" alt="请稍等......">
                    <div class="information" id="scroll-box1">
                        <ul id="scroll-title1">
                            <li class="information-title" v-for="(item, index) of infoList" :key="index">
                                <div class="title-disc"></div>
                                <a class="title-text">{{ item.paperTitle }}</a>
                            </li>
                        </ul>
                        <div id="scroll-temp1"></div>
                    </div>
                </div>
            </li>
            <!-- newest-data最新数据end -->
            <!-- newest-report最新报告start -->
            <li class="newest-box">
                <div class="newest-title">
                    <h2>最新</h2>
                    <h2>报告</h2>
                </div>
                <div class="newest-content">
                    <img src="@/assets/images/main-home/newest-report.png" alt="请稍等......">
                    <div class="information" id="scroll-box2">
                        <ul id="scroll-title2">
                            <li class="information-title" v-for="(item, index) of reportList" :key="index">
                                <div class="title-disc"></div>
                                <a class="title-text">{{ item.paperTitle }}</a>
                            </li>
                        </ul>
                        <div id="scroll-temp2"></div>
                    </div>
                </div>
            </li>
            <!-- newest-report最新报告end -->
            <!-- newest-course最新课程start -->
            <li class="newest-box">
                <div class="newest-title">
                    <h2>最新</h2>
                    <h2>课程</h2>
                </div>
                <div class="newest-content">
                    <img src="@/assets/images/main-home/newest-course.png" alt="请稍等......">
                    <div class="information" id="scroll-box3">
                        <ul id="scroll-title3">
                            <li class="information-title" v-for="(item, index) of reportList" :key="index">
                                <div class="title-disc"></div>
                                <a class="title-text">{{ item.paperTitle }}</a>
                            </li>
                        </ul>
                        <div id="scroll-temp3"></div>
                    </div>
                </div>
            </li>
            <!-- newest-course最新课程end -->
            <!-- newest-news最新资讯start -->
            <li class="newest-box">
                <div class="newest-title">
                    <h2>最新</h2>
                    <h2>资讯</h2>
                </div>
                <div class="newest-content">
                    <img src="@/assets/images/main-home/newest-news.png" alt="请稍等......">
                    <div class="information" id="scroll-box4">
                        <ul id="scroll-title4">
                            <li class="information-title" v-for="(item, index) of infoList" :key="index">
                                <div class="title-disc"></div>
                                <a class="title-text">{{ item.paperTitle }}</a>
                            </li>
                        </ul>
                        <div id="scroll-temp4"></div>
                    </div>
                </div>
            </li>
            <!-- newest-news最新资讯end -->
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeNewest',
    props: {
        /**
         * 最新报告数据
         */
        reportList: Array,
        /**
         * 最新资讯数据
         */
        infoList: Array,
        required: true
    },
    data () {
        return {
            /**
             * 滚动速度
             */
            speed: 10
        }
    },
    mounted () {
        // 运用生命周期钩子使在页面中调用scrollUp()函数
        this.scrollUpOne()
        this.scrollUpTwo()
        this.scrollUpThree()
        this.scrollUpFour()
    },
    methods: {
        /**
         * 第一个列表向上无限滚动函数
         */
        scrollUpOne () {
            var scrollBox1 = document.getElementById('scroll-box1')
            var scrollTitle1 = document.getElementById('scroll-title1')
            var scrollTemp1 = document.getElementById('scroll-temp1')
            // var titleli = scrollTemp1.getElementsByTagName('li')
            // 实现列表无限滚动
            // scrollTemp1.innerHTML = scrollTitle1.innerHTML;
            scrollBox1.scrollTop = 0
            // 实现列表自动滚动
            var timer = setInterval(scroll, this.speed)

            // 实现鼠标移入时列表停止滚动
            // for (var i = 0; i < titleli.length; i++) {
            //     (function(num) {
            //         titleli[num].onmouseover = function () {
            //             clearInterval(timer);
            //         }
            //         titleli[num].onmouseout = function () {
            //             scroll();
            //         }
            //     })(i);
            // }
            // scrollBox1.onmouseover = function () {
            //     clearInterval(timer);
            // }
            // // 实现鼠标移出时列表恢复滚动
            // scrollBox1.onmouseout = function () {
            //     scroll ();
            // }

            /**
             * 列表滚动函数
             */
            function scroll () {
                // 只有当列表盒子大于显示盒子时，才需要滚动列表
                if (scrollTitle1.offsetHeight >= scrollBox1.offsetHeight) {
                    /**
                     * 判断显示盒子的向上滚动长度是否大于列表盒子的滚动高度，若大于则代表滚动内容
                     * 已经滚完，需要把滚动的值重新设置为0，否则就每隔30毫秒向上滚动1px
                     */
                    scrollTemp1.innerHTML = scrollTitle1.innerHTML
                    if (scrollBox1.scrollTop >= scrollTitle1.scrollHeight) {
                        scrollBox1.scrollTop = 0
                    } else {
                        scrollBox1.scrollTop++
                    }
                    /**
                     * 判断显示盒子向上滚动的长度如果为一条列表的高度，就清除定时器，隔3000毫秒后
                     * 重新启动定时器，实现滚动停留效果
                     */
                    if (scrollBox1.scrollTop % 40 === 0) {
                        clearInterval(timer)
                        setTimeout(() => {
                            timer = setInterval(scroll, 10)
                        }, 2000)
                    }
                }
            }
        },
        /**
         * 第二个列表向上无限滚动函数
         */
        scrollUpTwo () {
            var scrollBox2 = document.getElementById('scroll-box2')
            var scrollTitle2 = document.getElementById('scroll-title2')
            var scrollTemp2 = document.getElementById('scroll-temp2')
            scrollBox2.scrollTop = 0
            var timer = setInterval(scroll, this.speed)
            function scroll () {
                if (scrollTitle2.offsetHeight >= scrollBox2.offsetHeight) {
                    scrollTemp2.innerHTML = scrollTitle2.innerHTML
                    if (scrollBox2.scrollTop >= scrollTitle2.scrollHeight) {
                        scrollBox2.scrollTop = 0
                    } else {
                        scrollBox2.scrollTop++
                    }
                    if (scrollBox2.scrollTop % 40 === 0) {
                        clearInterval(timer)
                        setTimeout(() => {
                            timer = setInterval(scroll, 10)
                        }, 2000)
                    }
                }
            }
        },
        /**
         * 第三个列表向上无限滚动函数
         */
        scrollUpThree () {
            var scrollBox3 = document.getElementById('scroll-box3')
            var scrollTitle3 = document.getElementById('scroll-title3')
            var scrollTemp3 = document.getElementById('scroll-temp3')
            scrollBox3.scrollTop = 0
            var timer = setInterval(scroll, this.speed)
            function scroll () {
                if (scrollTitle3.offsetHeight >= scrollBox3.offsetHeight) {
                    scrollTemp3.innerHTML = scrollTitle3.innerHTML
                    if (scrollBox3.scrollTop >= scrollTitle3.scrollHeight) {
                        scrollBox3.scrollTop = 0
                    } else {
                        scrollBox3.scrollTop++
                    }
                    if (scrollBox3.scrollTop % 40 === 0) {
                        clearInterval(timer)
                        setTimeout(() => {
                            timer = setInterval(scroll, 10)
                        }, 2000)
                    }
                }
            }
        },
        /**
         * 第四个列表向上无限滚动函数
         */
        scrollUpFour () {
            var scrollBox4 = document.getElementById('scroll-box4')
            var scrollTitle4 = document.getElementById('scroll-title4')
            var scrollTemp4 = document.getElementById('scroll-temp4')
            scrollBox4.scrollTop = 0
            var timer = setInterval(scroll, this.speed)
            function scroll () {
                if (scrollTitle4.offsetHeight >= scrollBox4.offsetHeight) {
                    scrollTemp4.innerHTML = scrollTitle4.innerHTML
                    if (scrollBox4.scrollTop >= scrollTitle4.scrollHeight) {
                        scrollBox4.scrollTop = 0
                    } else {
                        scrollBox4.scrollTop++
                    }
                    if (scrollBox4.scrollTop % 40 === 0) {
                        clearInterval(timer)
                        setTimeout(() => {
                            timer = setInterval(scroll, 10)
                        }, 2000)
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../home.sass";
    .newest-wrapper {
        display: flex; // 解决因设置浮动带来的系列布局问题
        margin-top: 125px;
        ul > .newest-box {
            float: left;
            width: 325px;
            height: 400px;
            box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.28);
            position: relative;
            &:not(:first-child) {
                margin-left: 20px;
            }
            // titile列表圆形大标题样式
            .newest-title {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                background: #ed8000;
                position: absolute;
                left: 0;
                right: 0;
                top: -75px;
                z-index: 10;
                margin: auto;
                h2 {
                    color: #fff;
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    line-height: 32px;
                    &:first-child {
                        margin-top: 40px;
                    }
                }
            }
            // 列表中心内容样式
            .newest-content {
                width: 90%;
                height: 90%;
                margin: 20px 16.25px;
                img {
                    width: 100%;
                }
                .information {
                    height: 240px;
                    max-height: 180px;
                    overflow: hidden;
                    margin-top: 10px;
                    .information-title {
                        width: 300px;
                        height: 40px;
                        font-size: 18px;
                        line-height: 40px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap; // 规定段落中的文本不进行换行
                        border-bottom: 1px solid #dcdcdc;
                        .title-disc {
                            float: left;
                            width: 4px;
                            height: 4px;
                            border-radius: 50%;
                            background: #666;
                            margin: 17px 10px 0 0;
                        }
                        .title-text {
                            cursor: pointer;
                            color: #0055aa;
                            @include transition;
                            &:hover {
                                color: red;
                            }
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 1360px) {
        .newest-wrapper {
            width: 680px;
            ul > .newest-box {
                margin-bottom: 100px;
                &:nth-child(3) {
                    margin-left: 0;
                }
            }
        }
    }
    @media only screen and (max-width: 680px) {
        .newest-wrapper {
            width: 340px;
            ul > .newest-box {
                margin-bottom: 100px;
                &:not(:first-child){
                    margin-left: 0;
                }
            }
        }
    }
</style>
