<template>
    <div class="process-wrapper">
        <div class="process-header">
            <h3 class="home-header-h3 ">定制流程</h3>
            <h4 class="home-header-h4 ">Customization Process</h4>
        </div>
        <div class="wrapper process-content">
            <ul class="content-box">
                <li class="content-item item-first">
                    <h1>1</h1>
                    <h4>提出需求</h4>
                </li>
                <img class="img-first" src="@/assets/images/main-home/process-noe.png" alt="请稍等......">
                <li class="content-item item-second">
                    <h1>2</h1>
                    <h4>签订合同</h4>
                </li>
                <img class="img-second" src="@/assets/images/main-home/process-two.png" alt="请稍等......">
                <li class="content-item item-third">
                    <h1>3</h1>
                    <h4>执行调研</h4>
                </li>
                <img class="img-third" src="@/assets/images/main-home/process-three.png" alt="请稍等......">
                <li class="content-item item-fourth">
                    <h1>4</h1>
                    <h4>提交文件</h4>
                </li>
                <img class="img-fourth" src="@/assets/images/main-home/process-four.png" alt="请稍等......">
                <li class="content-item item-fifth">
                    <h1>5</h1>
                    <h4>售后服务</h4>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeProcess'
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../home.sass";
    .process-wrapper {
        padding: 57px 0 110px 0;
        .process-content {
            margin-top: 16px;
            height: 272px;
            .content-box {
                position: relative;
                img {
                    position: absolute;
                }
                .content-item {
                    cursor: default;
                    z-index: 2;
                    width: 190px;
                    height: 150px;
                    color: #333;
                    text-align: center;
                    background: url("~images/main-home/process-background.png") center center no-repeat;
                    background-size: 100% 100%;
                    padding-top: 40px;
                    position: absolute;
                    @include transition;
                    h1 {
                        font-size: 48px;
                        font-family: "Microsoft Yahei";
                        margin-bottom: 30px;
                    }
                    h4 {
                        font-size: 18px;
                        font-family: "Microsoft Yahei";
                    }
                    &:hover {
                        color: #fff;
                        background: url("~images/main-home/process-hover.png");
                    }
                }
                // 各li(.content-item)和img的定位样式
                .item-first {
                    left: 0;
                }
                .img-first {
                    left: 156px;
                    top: 83px;
                }
                .item-second {
                    left: 304px;
                    top: 72px;
                }
                .img-second {
                    left: 461px;
                    top: 109px;
                }
                .item-third {
                    left: 590px;
                    top: 72px;
                }
                .img-third {
                    right: 448px;
                    top: 128px;
                }
                .item-fourth {
                    right: 294px;
                    top: 72px;
                }
                .img-fourth {
                    right: 169px;
                    top: 79px;
                }
                .item-fifth {
                    right: 0;
                    top: 0;
                }
            }
        }
        @media only screen and (max-width: 1360px) {
            .process-content {
                width: 950px;
                .content-box {
                    img {
                        display: none;
                    }
                    .item-second {
                        left: 191px;
                    }
                    .item-third {
                        left: 381px;
                    }
                    .item-fourth {
                        right: 189px;
                    }
                }
            }
        }
        @media only screen and (max-width: 1060px) {
            .process-content {
                width: 450px;
                .content-box {
                    img {
                        display: none;
                    }
                    .content-item {
                        width: 90px;
                        height: 70px;
                        padding-top: 20px;
                        h1 {
                            font-size: 20px;
                            margin-bottom: 12px;
                        }
                        h4 {
                            font-size: 14px;
                        }
                        &:hover {
                            color: #fff;
                            background: url("~images/main-home/process-hover.png");
                            background-size: 100% 100%;
                        }
                    }
                    .item-second {
                        left: 75px;
                    }
                    .item-third {
                        left: 180px;
                    }
                    .item-fourth {
                        right: 75px;
                    }
                }
            }
        }
        @media only screen and (max-width: 450px) {
            .process-content {
                width: 370px;
                .content-box {
                    img {
                        display: none;
                    }
                    .content-item {
                        width: 90px;
                        height: 70px;
                        padding-top: 20px;
                        h1 {
                            font-size: 20px;
                            margin-bottom: 12px;
                        }
                        h4 {
                            font-size: 14px;
                        }
                        &:hover {
                            color: #fff;
                            background: url("~images/main-home/process-hover.png");
                            background-size: 100% 100%;
                        }
                    }
                    .item-second {
                        left: 55px;
                    }
                    .item-third {
                        left: 140px;
                    }
                    .item-fourth {
                        right: 55px;
                    }
                }
            }
        }
    }
</style>
