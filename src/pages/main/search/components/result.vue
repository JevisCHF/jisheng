<template>
    <!-- search-result搜索页左边结果start -->
    <div class="result-wrapper">
        <!-- result-explain结果说明start -->
        <div class="result-explain">
            <span class="serch-target"></span>
            <span class="serch-text">搜索相关结果</span>
        </div>
        <!-- result-explain结果说明end -->
        <!-- result-nav结果导航start -->
        <div class="result-nav">
            <ul class="nav-lists">
                <li class="nav-list nav-labels">
                    <ul class="labels-lists" id="labels-box">
                        <li class="labels-list labels-active">资讯</li>
                        <li class="labels-list">数据</li>
                        <li class="labels-list">报告</li>
                    </ul>
                </li>
                <li class="nav-list nav-sum">
                    <h5>共搜索到 24 条结果</h5>
                </li>
                <li class="nav-list nav-sort">时间排序</li>
            </ul>
        </div>
        <!-- result-nav结果导航end -->
        <!-- result-detail结果详细列表start -->
        <div class="result-detail" id="detail-box">
            <!-- information资讯详情start -->
            <div class="detail-content information-content">
                <ul class="information-lists"></ul>
                <!-- pagination分页start -->
                <div class="pagination-box">
                    <span class="pagination">上一页</span>
                    <span class="pagination">下一页</span>
                    <span class="pagination-jump">
                        转到
                        <input type="text" class="pagination-input">
                        页
                    </span>
                    <span class="pagination-go">GO</span>
                </div>
                <!-- pagination分页end -->
            </div>
            <!-- information资讯详情end -->
            <!-- data数据详情start -->
            <div class="detail-content data-content hide">
                <ul class="data-lists">
                    <li class="data-list">
                        <a class="list-title">全国房市最新行情，湖南房市多少钱？</a>
                        <span class="list-date">2019-1-9</span>
                        <button class="list-button"></button>
                    </li>
                </ul>
            </div>
            <!-- data数据详情end -->
            <!-- report报告详情start -->
            <div class="detail-content report-content hide">
                <ul class="report-lists">
                    <li class="report-list">
                        <div class="list-left">
                            <img class="list-left-img" src="@/assets/images/main-search/result-report-lists.png" alt="请稍等......">
                            <div class="list-left-text">
                                <h4 class="left-title">全国豆啵价格最新行情 湖南豆啵多少钱一吨？</h4>
                                <p class="left-detail">地球至今，已经经历了46亿年的历程，地球上的生物经历了5次大灭绝。在这么多年的沧桑岁月中，有人推断，地球上曾经很多次的出现高级文明。但是很不幸，这些文明都被毁灭了。</p>
                                <div class="left-message">
                                    <span>免费</span>
                                    <span>文章来源：新华网</span>
                                    <span>浏览：2010</span>
                                </div>
                            </div>
                        </div>
                        <div class="list-right">
                            <h5 class="right-date">2018-10-24</h5>
                            <button class="right-button"></button>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- report报告详情end -->
        </div>
        <!-- result-detail结果详细列表end -->
    </div>
    <!-- search-result搜索页左边结果end -->
</template>

<script>
export default {
    name: 'SearchResult',
    mounted () {
        this.lebelchange()
    },
    methods: {
        /**
         * 点击nav-label导航标签变换detail-content内容方法
         */
        lebelchange () {
            var labelsBox = document.getElementById('labels-box')
            var labelsli = labelsBox.getElementsByTagName('li')
            var detailBox = document.getElementById('detail-box')
            var detailContent = detailBox.getElementsByClassName('detail-content')
            for (var i = 0; i < labelsli.length; i++) {
                (function (num) {
                    labelsli[num].onclick = () => {
                        for (var j = 0; j < labelsli.length; j++) {
                            (function (temp) {
                                labelsli[temp].classList.remove('labels-active')
                                detailContent[temp].classList.add('hide')
                            })(j)
                        }
                        labelsli[num].classList.add('labels-active')
                        detailContent[num].classList.remove('hide')
                    }
                })(i)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    .result-wrapper {
        width: 74.63%;
        // 头部结果说明样式
        .result-explain {
            font-size: 20px;
            font-weight: bold;
            margin-top: 26px;
            .serch-target {
                color: $bgColor;
            }
            .serch-text {
                color: #999;
            }
        }
        // 搜索结果导航样式
        .result-nav {
            width: 100%;
            border-bottom: 2px solid #dc0000;
            margin-top: 26px;
            .nav-lists {
                display: flex;
                padding: 10px 0;
                .nav-list {
                    float: left;
                    &:first-child {
                        margin-right: 29.56%;
                    }
                    &:last-child {
                        margin-left: 21.28%;
                    }
                }
                // 三大结果标签内容样式
                .nav-labels {
                    width: 29.56%;
                    .labels-lists {
                        .labels-list {
                            cursor: pointer;
                            float: left;
                            width: 80px;
                            font-size: 18px;
                            font-weight: bold;
                            text-align: center;
                            line-height: 30px;
                            margin-right: 20px;
                        }
                        // label标题标签鼠标点击变化样式
                        .labels-active {
                            color: #fff;
                            background: #dc0000;
                            border-radius: 20px;
                        }
                    }
                }
                // 搜索结果总数样式
                .nav-sum {
                    color: #999;
                    font-size: 14px;
                    line-height: 30px;
                }
                // 搜索时间排序样式
                .nav-sort {
                    color: #999;
                    font-size: 14px;
                    background: url("~images/main-search/result-date-sort.png") 0 center no-repeat;
                    padding-left: 20px;
                    line-height: 30px;
                }
            }
        }
        // 结果详细列表样式
        .result-detail {
            width: 100%;
            .hide {
                display: none;
            }
            // 资讯列表样式
            .information-content {
                // 分页样式
                .pagination-box {
                    text-align: center;
                    margin-top: 30px;
                    span {
                        display: inline-block;
                        color: #999;
                        font-size: 16px;
                    }
                    .pagination {
                        cursor: pointer;
                        width: 70px;
                        height: 35px;
                        line-height: 35px;
                        margin-left: 10px;
                        &:nth-of-type(2) {
                            margin-left: 0;
                        }
                    }
                    .pagination-jump {
                        margin: 0 10px;
                        .pagination-input {
                            width: 66px;
                            height: 33px;
                            text-align: center;
                            border: 1px solid #999;
                            border-radius: 5px;
                            margin: 0 10px;
                        }
                    }
                    .pagination-go {
                        cursor: pointer;
                        width: 45px;
                        height: 35px;
                        color: #fff;
                        line-height: 35px;
                        background: #d71f1b;
                        border-radius: 5px;
                        margin: 0 10px;
                    }
                }
            }
            // 数据列表样式
            .data-content {
                .data-lists {
                    .data-list {
                        height: 50px;
                        line-height: 50px;
                        background: #ddf7ff url("~images/main-search/result-data-detail.png") 20px center no-repeat;
                        padding-left: 60px;
                        margin-top: 10px;
                        position: relative;
                        .list-title {
                            color: #333;
                            font-size: 18px;
                        }
                        .list-date {
                            color: #999;
                            font-size: 15px;
                            position: absolute;
                            top: 0;
                            right: 145px;
                        }
                        .list-button {
                            cursor: pointer;
                            width: 80px;
                            height: 30px;
                            background: url("~images/main-search/result-data-button.png") no-repeat;
                            position: absolute;
                            bottom: 10px;
                            right: 10px;
                            @include transition;
                            &:hover {
                                background: url("~images/main-search/result-button-active.png") no-repeat;
                            }
                        }
                    }
                }
            }
            // 报告列表样式
            .report-content {
                .report-lists {
                    .report-list {
                        height: 160px;
                        overflow: hidden;
                        box-shadow: 0 0 5px rgba(0, 0, 0, 0.28);
                        margin-top: 20px;
                        position: relative;
                        .list-left {
                            width: 75.86%;
                            height: 75%;
                            margin: auto;
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 20px;
                            .list-left-img {
                                float: left;
                                width: 122px;
                                height: 121px;
                            }
                            .list-left-text {
                                width: 82.21%;
                                color: #999;
                                font-size: 14px;
                                padding-left: 15px;
                                margin-left: 122px;
                                .left-title {
                                    color: #000;
                                    font-size: 16px;
                                    font-weight: 600;
                                    line-height: 25px;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }
                                .left-detail {
                                    line-height: 20px;
                                    margin: 15px 0;
                                }
                                .left-message {
                                    line-height: 25px;
                                    span {
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        margin-right: 30px;
                                        &:nth-of-type(2) {
                                            margin-right: 50px;
                                        }
                                        &:last-child {
                                            padding-left: 33px;
                                            background: url("~images/main-search/result-report-view.png") no-repeat;
                                        }
                                    }
                                }
                            }
                        }
                        .list-right {
                            width: 9.85%;
                            height: 100%;
                            position: absolute;
                            right: 0;
                            .right-date {
                                color: #999;
                                font-size: 14px;
                                margin-top: 20px;
                            }
                            .right-button {
                                cursor: pointer;
                                width: 80px;
                                height: 30px;
                                background: url("~images/main-search/result-report-button.png") no-repeat;
                                position: absolute;
                                bottom: 20px;
                                @include transition;
                                &:hover {
                                    background: url("~images/main-search/result-button-active.png") no-repeat;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
