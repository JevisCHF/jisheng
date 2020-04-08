<template>
    <div class="lifecycle-wrapper">
        <div class="wrapper">
            <!-- header企业生命监测头部start -->
            <div class="lifecycle-header">
                <h3 class="header-h3">企业生命监测</h3>
                <h4 class="header-h4">Corporate Life Monitoring</h4>
                <div class="header-detail">
                    <p class="header-p">监测企业的发展与成长的动态轨迹，包括发展、成长、成熟、衰退几个阶段，使得企业可以从内部管理方面找到一个相对较优的模式来</p>
                    <p class="header-p">保持企业的发展能力，在每个生命周期阶段内充分发挥特色优势，进而延长企业的生命周期，帮助企业实现自身的可持续发展。</p>
                </div>
            </div>
            <!-- header企业生命监测头部end -->
            <!-- content企业生命监测中心内容start -->
            <div class="lifecycle-content">
                <ul class="content-box">
                    <img class="content-img-one" src="@/assets/images/main-monitor/lifecycle-line.png" alt="请稍等......">
                    <img class="content-img-two" src="@/assets/images/main-monitor/lifecycle-line.png" alt="请稍等......">
                    <li class="content-list">
                        <div class="list-title title-first">现代企业制度</div>
                        <div class="list-lifecycle">
                            <h5 class="list-text">起步期</h5>
                            <img class="list-img" src="@/assets/images/main-monitor/lifecycle-first.png" alt="请稍等......">
                        </div>
                    </li>
                    <li class="content-list">
                        <div class="list-title title-second">创新驱动潜力</div>
                        <div class="list-lifecycle">
                            <h5 class="list-text">成长期</h5>
                            <img class="list-img" src="@/assets/images/main-monitor/lifecycle-second.png" alt="请稍等......">
                        </div>
                    </li>
                    <li class="content-list">
                        <div class="list-title title-third">业务均衡布局</div>
                        <div class="list-lifecycle">
                            <h5 class="list-text">成熟期</h5>
                            <img class="list-img" src="@/assets/images/main-monitor/lifecycle-third.png" alt="请稍等......">
                        </div>
                    </li>
                    <li class="content-list">
                        <div class="list-title title-fourth">财务指标分析</div>
                        <div class="list-lifecycle">
                            <h5 class="list-text">卓越期</h5>
                            <img class="list-img" src="@/assets/images/main-monitor/lifecycle-fourth.png" alt="请稍等......">
                        </div>
                    </li>
                    <li class="content-list">
                        <div class="list-title title-fifth">综合效益评价</div>
                        <div class="list-lifecycle">
                            <h5 class="list-text">衰退期</h5>
                            <img class="list-img" src="@/assets/images/main-monitor/lifecycle-fifth.png" alt="请稍等......">
                        </div>
                    </li>
                    <li class="content-list">
                        <div class="list-title title-sixth">经营管理系统</div>
                        <div class="list-lifecycle">
                            <h5 class="list-text">重生期</h5>
                            <img class="list-img" src="@/assets/images/main-monitor/lifecycle-sixth.png" alt="请稍等......">
                        </div>
                    </li>
                </ul>
            </div>
             <!-- content企业生命监测中心内容end -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Monitorlifecycle'
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    .lifecycle-wrapper {
        overflow: hidden;
        background: url("~images/main-monitor/lifecycle-background.jpg") center no-repeat;
        background-size: cover;
        padding: 52px 0 110px;
        margin-top: 25px;
        // 企业生命监测头部标题样式
        .lifecycle-header {
            color: $bgColor;
            text-align: center;
            .header-h3 {
                font-size: 32px;
                background: url("~images/main-monitor/lifecycle-header.png") center center no-repeat;
            }
            .header-h4 {
                color: #999;
                font-size: 18px;
                line-height: 30px;
            }
            .header-detail {
                margin-top: 18px;
                .header-p {
                    font-size: 14px;
                    line-height: 23px;
                }
            }
        }
        // 企业生命监测中心内容样式
        .lifecycle-content {
            .content-box {
                display: flex;
                position: relative;
                margin-top: 108px;
                .content-img-one {
                    z-index: 5;
                    position: absolute;
                    top: 18px;
                    left: 255px;
                }
                .content-img-two {
                    z-index: 5;
                    position: absolute;
                    top: 73px;
                    left: 157px;
                }
                .content-list {
                    float: left;
                    width: 16.59%;
                    height: 504px;
                    border-right: 1px dashed #f2f2f2;
                    background: url("~images/main-monitor/lifecycle-right-line.png") right center no-repeat;
                    position: relative;
                    &:last-child {
                        border-right: none;
                        background: none;
                    }
                    .list-title {
                        cursor: default;
                        z-index: 10;
                        width: 170px;
                        height: 46px;
                        color: #fff;
                        font-size: 18px;
                        text-align: center;
                        line-height: 46px;
                        border-radius: 23px;
                        background: #00d5dd;
                        position: absolute;
                        @include transition;
                        &:hover {
                            color: #00d5dd;
                            background: #fff;
                        }
                    }
                    // .title-first {
                    //     top: 110px;
                    //     left: 28px;
                    // }
                    // .title-second {
                    //     top: 25px;
                    //     right: -70px;
                    // }
                    .list-lifecycle {
                        width: 200px;
                        height: 200px;
                        overflow: hidden;
                        position: absolute;
                        bottom: 0;
                        left: 5%;
                        &:hover {
                            .list-text {
                                color: #ff6600;
                                font-size: 28px;
                            }
                            .list-img {
                                transform: scale(1);
                            }
                        }
                        .list-text {
                            cursor: default;
                            z-index: 100;
                            width: 100%;
                            color: #fff;
                            font-size: 24px;
                            text-align: center;
                            position: absolute;
                            bottom: 43px;
                            @include transition;
                        }
                        .list-img {
                            @include transition;
                            transform: scale(0.9); // 定义2D缩放
                        }
                    }
                }
            }
        }
    }
</style>
