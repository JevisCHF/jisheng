<template>
    <div class="market-wrapper">
        <div class="wrapper">
            <!-- market-header市场行情头部start -->
            <div class="market-header">
                <h3 class="header-title">金融市场行情</h3>
            </div>
            <!-- market-header市场行情头部end -->
            <!-- market-body市场行情内容start -->
            <div class="market-box">
                <div class="box-header">
                    <ul class="header-lists" id="header-box">
                        <li class="header-list header-active">股票</li>
                        <li class="header-list">基金</li>
                        <li class="header-list">期货</li>
                        <li class="header-list">外汇</li>
                        <li class="header-list">债券</li>
                        <li class="header-list">信贷</li>
                    </ul>
                </div>
                <div class="box-body">
                    <div class="body-content" id="content-box">
                        <!-- first-header-list股票标题start -->
                        <ul class="content-title">
                            <li class="title-list title-active">上证股市</li>
                            <li class="title-list">深圳股市</li>
                            <li class="title-list">香港股市</li>
                            <li class="title-list">美国股市</li>
                        </ul>
                        <!-- first-header-list股票标题end -->
                        <!-- second-header-list基金标题start -->
                        <ul class="content-title hide">
                            <li class="title-list title-active">基金指数</li>
                            <li class="title-list">基金指数</li>
                        </ul>
                        <!-- second-header-list基金标题end -->
                        <!-- third-header-list期货标题start -->
                        <ul class="content-title hide">
                            <li class="title-list title-active">期货指数</li>
                            <li class="title-list">期货指数</li>
                        </ul>
                        <!-- third-header-list期货标题end -->
                        <!-- fourth-header-list外汇标题start -->
                        <ul class="content-title hide">
                            <li class="title-list title-active">外汇指数</li>
                            <li class="title-list">外汇指数</li>
                        </ul>
                        <!-- fourth-header-list外汇标题end -->
                        <!-- fifth-header-list债券标题start -->
                        <ul class="content-title hide">
                            <li class="title-list title-active">债券指数</li>
                            <li class="title-list">债券指数</li>
                        </ul>
                        <!-- fifth-header-list债券标题end -->
                        <!-- sixth-header-list信贷标题start -->
                        <ul class="content-title hide">
                            <li class="title-list title-active">信贷指数</li>
                            <li class="title-list">信贷指数</li>
                        </ul>
                        <!-- sixth-header-list信贷标题end -->
                        <!-- right-select右边下拉框start -->
                        <div class="content-select">
                            <select id="area"></select>
                        </div>
                        <!-- right-select右边下拉框end -->
                        <div class="content-data"></div>
                    </div>
                </div>
            </div>
            <!-- market-body市场行情内容end -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'FinanceMarket',
    mounted () {
        this.headerTitleChange()
        this.boxTitleChange()
    },
    methods: {
        /**
         * 市场行情market-box头部标题box-header标签变换方法
         */
        headerTitleChange () {
            var headerBox = document.getElementById('header-box')
            var headerLi = headerBox.getElementsByTagName('li')
            var contentBox = document.getElementById('content-box')
            var contentTitle = contentBox.getElementsByClassName('content-title')
            for (var i = 0; i < headerLi.length; i++) {
                (function (num) {
                    headerLi[num].onclick = () => {
                        for (var j = 0; j < headerLi.length; j++) {
                            (function (temp) {
                                headerLi[temp].classList.remove('header-active')
                                contentTitle[temp].classList.add('hide')
                            })(j)
                        }
                        headerLi[num].classList.add('header-active')
                        contentTitle[num].classList.remove('hide')
                    }
                })(i)
            }
        },
        /**
         * 内容标题content-title标签变换方法
         */
        boxTitleChange () {
            var contentBox = document.getElementById('content-box')
            var contentTitle = contentBox.getElementsByClassName('content-title')
            for (var i = 0; i < contentTitle.length; i++) {
                (function (num) {
                    var titleLi = contentTitle[num].getElementsByTagName('li')
                    for (var j = 0; j < titleLi.length; j++) {
                        (function (temp1) {
                            titleLi[temp1].onclick = () => {
                                for (var k = 0; k < titleLi.length; k++) {
                                    (function (temp2) {
                                        titleLi[temp2].classList.remove('title-active')
                                    })(k)
                                }
                                titleLi[temp1].classList.add('title-active')
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
    .market-wrapper {
        // 市场行情头部标题样式
        .market-header {
            margin-top: 50px;
            .header-title {
                color: #cf9b5d;
                font-size: 30px;
                font-weight: bold;
                letter-spacing: 5px;
                line-height: 40px;
                text-align: center;
                background: url("~images/main-finance/market-header-bg.png") center center no-repeat;
            }
        }
        // 市场行情内容样式
        .market-box {
            margin-top: 40px;
            // box-shadow: 0px 0px 10px #ccc;
            // 内容头部标题样式
            .box-header {
                height: 60px;
                overflow: hidden;
                background: rgba(214,177,133,0.9);
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                position: relative;
                .header-lists {
                    display: flex;
                    justify-content: center;
                    .header-list {
                        cursor: pointer;
                        float: left;
                        color: #21202d;
                        font-size: 22px;
                        font-weight: bold;
                        margin: 19px 80px;
                        @include transition;
                        &:hover {
                            color: #fff;
                        }
                    }
                    .header-active {
                        color: #fff;
                    }
                }
            }
            // 内容主体数据展示样式
            .box-body {
                height: 680px;
                overflow: hidden;
                background: #21202d;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
                .body-content {
                    padding: 30px;
                    // 头部标题对应二级标题样式
                    .content-title {
                        .title-list {
                            cursor: pointer;
                            float: left;
                            width: 72px;
                            color: #fff;
                            font-size: 18px;
                            line-height: 24px;
                            border-bottom: 2px solid #fff;
                            padding: 0 5px 8px 5px;
                            margin-right: 30px;
                            @include transition;
                            &:hover {
                                color: #cf9b5d;
                            }
                        }
                        .title-active {
                            color: #cf9b5d;
                        }
                    }
                    .hide {
                        display: none;
                    }
                    // 右边下拉框样式
                    .content-select {
                        float: right;
                        select {
                            width: 220px;
                            height: 28px;
                        }
                    }
                }
            }
        }
    }
</style>
