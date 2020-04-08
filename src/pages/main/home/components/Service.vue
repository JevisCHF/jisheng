<template>
    <div class="service-wrapper">
        <div class="service-header">
            <h3 class="home-header-h3">服务项目</h3>
            <h4 class="home-header-h4">OUR BUSINESS</h4>
            <p class="home-header-line"></p>
        </div>
        <div class="service-content">
            <div class="content-wrapper">
                <!-- solution-content七色主体start -->
                <ul class="content-box" id="list-box">
                    <li class="content-list list-first">
                        <span>融</span>
                        <span>天</span>
                        <span>下</span>
                    </li>
                    <li class="content-list list-second">
                        <span>融</span>
                        <span>知</span>
                    </li>
                    <li class="content-list list-third">
                        <span>融</span>
                        <span>资</span>
                    </li>
                    <li class="content-list list-fourth active">
                        <span>融</span>
                        <span>智</span>
                    </li>
                    <li class="content-list list-fifth">
                        <span>融</span>
                        <span>商</span>
                    </li>
                    <li class="content-list list-sixth">
                        <span>融</span>
                        <span>讯</span>
                    </li>
                    <li class="content-list list-seventh">
                        <span>融</span>
                        <span>未</span>
                        <span>来</span>
                    </li>
                </ul>
                <!-- solution-content七色主体end -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeService',
    mounted () {
        this.changeClass()
    },
    methods: {
        /**
         * 改变样式方法
         */
        changeClass () {
            var listBox = document.getElementById('list-box')
            var listLi = listBox.getElementsByClassName('content-list')
            for (var i = 0; i < listLi.length; i++) {
                (function (num) {
                    listLi[num].onmouseover = () => {
                        for (var j = 0; j < listLi.length; j++) {
                            (function (temp) {
                                listLi[temp].classList.remove('active')
                            })(j)
                        }
                        listLi[num].classList.add('active')
                    }
                })(i)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../home.sass";
    .service-wrapper {
        padding: 54px 0 50px 0;
        .service-header {
            .home-header-h3  {
                margin-bottom: 15px;
            }
        }
        .service-content {
            height: 475px;
            background: url("~images/main-home/service-background.png") center no-repeat;
            background-size: cover;
            padding-top: 128px;
            margin-top: 42px;
            .content-wrapper {
                width: 1428px;
                margin: 0 auto;
                .content-box {
                    position: relative;
                    .content-list {
                        width: 45px;
                        height: 240px;
                        color: #fff;
                        font-size: 48px;
                        text-align: center;
                        border-radius: 50%;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
                        padding: 50px 100px;
                        position: absolute;
                        top: 0;
                        @include transition;
                        span {
                            display: block;
                            line-height: normal;
                            margin-top: 38px;
                            @include transition;
                        }
                    }
                    .list-first {
                        background: rgba(203, 0, 23, 0.75);
                        span {
                            margin-top: 10px;
                        }
                    }
                    .list-second {
                        background: rgba(202, 114, 1, 0.8);
                        left: 196px;
                    }
                    .list-third {
                        background: rgba(188, 188, 0, 0.8);
                        left: 396px;
                    }
                    .list-fourth {
                        background: rgba(47, 200, 45, 0.8);
                        left: 593px;
                    }
                    .list-fifth {
                        background: rgba(44, 189, 229, 0.8);
                        left: 789px;
                    }
                    .list-sixth {
                        background: rgba(9, 66, 239, 0.8);
                        right: 198px;
                    }
                    .list-seventh {
                        background: rgba(185, 38, 228, 0.8);
                        right: 0;
                        span {
                            margin-top: 10px;
                        }
                    }
                    // mouseover样式变化
                    .active.content-list {
                        z-index: 5;
                        width: 94px;
                        height: 307px;
                        top: -38px;
                    }
                    .active.list-first {
                        background: #d90000;
                        left: -5px;
                    }
                    .active.list-second {
                        background: #ffae02;
                        left: 176px;
                    }
                    .active.list-third {
                        background: #d6d600;
                        left: 376px;
                    }
                    .active.list-fourth {
                        background: #14d700;
                        left: 576px;
                    }
                    .active.list-fifth {
                        background: #00cbe3;
                        left: 768px;
                    }
                    .active.list-sixth {
                        background: #1800ff;
                        right: 178px;
                    }
                    .active.list-seventh {
                        background: #b926e4;
                        right: -20px;
                    }
                    .active {
                        span {
                            margin-top: 63px;
                        }
                    }
                    .active.list-first, .active.list-seventh {
                        span {
                            margin-top: 30px;
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 1400px) {
            .service-content {
                height: 372px;
                .content-wrapper {
                    width: 895px;
                    .content-box {
                        .content-list {
                            width: 46px;
                            height: 171px;
                            font-size: 30px;
                            padding: 21px 54px;
                            span {
                                margin-top: 30px;
                            }
                        }
                        .list-second {
                            left: 124px;
                        }
                        .list-third {
                            left: 248px;
                        }
                        .list-fourth {
                            left: 370px;
                        }
                        .list-fifth {
                            left: 496px;
                        }
                        .list-sixth {
                            right: 120px;
                        }
                        .list-first, .list-seventh {
                            span {
                                margin-top: 13px;
                            }
                        }
                        // mouseover样式变化
                        .active.content-list {
                            width: 67px;
                            height: 205px;
                            top: -20px;
                        }
                        .active.list-second {
                            left: 115px;
                        }
                        .active.list-third {
                            left: 238px;
                        }
                        .active.list-fourth {
                            left: 362px;
                        }
                        .active.list-fifth {
                            left: 485px;
                        }
                        .active.list-sixth {
                            right: 111px;
                        }
                        .active {
                            span {
                                margin-top: 42px;
                            }
                        }
                        .active.list-first, .active.list-seventh {
                            span {
                                margin-top: 20px;
                            }
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 920px) {
            .service-content {
                height: 315px;
                .content-wrapper {
                    width: 565px;
                    .content-box {
                        .content-list {
                            width: 30px;
                            height: 136px;
                            font-size: 20px;
                            padding: 2px 35px;
                            span {
                                margin-top: 27px;
                            }
                        }
                        .list-second {
                            left: 77px;
                        }
                        .list-third {
                            left: 155px;
                        }
                        .list-fourth {
                            left: 232px;
                        }
                        .list-fifth {
                            left: 310px;
                        }
                        .list-sixth {
                            right: 77px;
                        }
                        .list-first, .list-seventh {
                            span {
                                margin-top: 14px;
                            }
                        }
                        // mouseover样式变化
                        .active.content-list {
                            width: 51px;
                            height: 170px;
                            top: -17px;
                        }
                        .active.list-first {
                            left: -10px;
                        }
                        .active.list-second {
                            left: 70px;
                        }
                        .active.list-third {
                            left: 145px;
                        }
                        .active.list-fourth {
                            left: 222px;
                        }
                        .active.list-fifth {
                            left: 300px;
                        }
                        .active.list-sixth {
                            right: 68px;
                        }
                        .active {
                            span {
                                margin-top: 38px;
                            }
                        }
                        .active.list-first, .active.list-seventh {
                            span {
                                margin-top: 22px;
                            }
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 580px) {
            .service-content {
                height: 325px;
                .content-wrapper {
                    width: 345px;
                    .content-box {
                        .content-list {
                            top: -50px;
                        }
                        .list-fourth {
                            left: 0px;
                            top: 115px;
                        }
                        .list-fifth {
                            left: 77px;
                            top: 115px;
                        }
                        .list-sixth {
                            left: 155px;
                            top: 115px;
                        }
                        .list-seventh {
                            left: 232px;
                            top: 115px;
                        }
                        // mouseover样式变化
                        .active.content-list {
                            top: -65px;
                        }
                        .active.list-first {
                            left: -10px;
                        }
                        .active.list-fourth {
                            left: -10px;
                            top: 98px;
                        }
                        .active.list-fifth {
                            left: 70px;
                            top: 98px;
                        }
                        .active.list-sixth {
                            left: 145px;
                            top: 98px;
                        }
                        .active.list-seventh {
                            top: 98px;
                        }
                    }
                }
            }
        }
    }
</style>
