<template>
    <div class="nav">
        <!-- responsive-header响应式头部start -->
        <div class="nav-header">
            <h2 class="heaser-title">稷生网</h2>
            <button class="header-button" @click="showNavList">
                <span class="button-bar"></span>
                <span class="button-bar"></span>
                <span class="button-bar"></span>
            </button>
        </div>
        <!-- responsive-header响应式头部end -->
        <div class="nav-wrapper" id="NavigationBox">
            <!-- navigation导航主体start -->
            <ul class="nav-box" id="Navigation">
                <li class="nav-list">
                    <router-link to="/main/home" class="nav-list-title">
                        首页
                    </router-link>
                </li>
                <li class="nav-list"
                    @mouseover="showChildrenListOne()"
                    @mouseout="hideChildrenListOne()"
                >
                    <router-link to="/main/nation" class="nav-list-title keep-background" id="removeClassOne">
                        中国国情咨询
                        <span class="title-caret"></span>
                    </router-link>
                    <!-- children-nav子导航start -->
                    <ul class="nav-children" id="children-list-one">
                        <li class="nav-children-list">
                            <router-link to="/main/nation/history" class="nav-list-title">
                                历史人文地理
                            </router-link>
                        </li>
                        <li class="nav-children-list">
                            <router-link to="/main/nation/natural" class="nav-list-title">
                                自然资源禀赋
                            </router-link>
                        </li>
                        <li class="nav-children-list">
                            <router-link to="/main/nation/social-development" class="nav-list-title">
                                社会发展条件
                            </router-link>
                        </li>
                        <li class="nav-children-list">
                            <router-link to="/main/nation/macroeconomic" class="nav-list-title">
                                宏观经济政策
                            </router-link>
                        </li>
                        <li class="nav-children-list">
                            <router-link to="/main/nation/economic-operation" class="nav-list-title">
                                经济运行状态
                            </router-link>
                        </li>
                        <li class="nav-children-list">
                            <router-link to="/main/nation/economic-map" class="nav-list-title">
                                国家经济图谱
                            </router-link>
                        </li>
                    </ul>
                    <!-- children-nav子导航end -->
                </li>
                <li class="nav-list">
                    <router-link to="/main/development" class="nav-list-title">
                        区域发展分析
                    </router-link>
                </li>
                <li class="nav-list"
                    @mouseover="showChildrenListTwo()"
                    @mouseout="hideChildrenListTwo()"
                >
                    <router-link to="/main/business" class="nav-list-title keep-background" id="removeClassTwo">
                        行业研究平台
                        <span class="title-caret"></span>
                    </router-link>
                    <!-- children-nav子导航start -->
                    <ul class="nav-children" id="children-list-two">
                        <li class="nav-children-list">
                            <a class="nav-list-title">行业报告</a>
                        </li>
                        <li class="nav-children-list">
                            <a class="nav-list-title">行业资讯</a>
                        </li>
                        <li class="nav-children-list">
                            <a class="nav-list-title">行业数据</a>
                        </li>
                    </ul>
                    <!-- children-nav子导航end -->
                </li>
                <li class="nav-list">
                    <router-link to="/main/monitor" class="nav-list-title">
                        企业生命监测
                    </router-link>
                </li>
                <li class="nav-list">
                    <router-link to="/main/finance" class="nav-list-title">
                        智能金融服务
                    </router-link>
                </li>
                <li class="nav-list">
                    <router-link to="/main/course" class="nav-list-title">
                        云课堂智慧树
                    </router-link>
                </li>
                <li class="nav-list">
                    <router-link to="/main/about-us" class="nav-list-title">
                        关于我们
                    </router-link>
                </li>
            </ul>
            <!-- navigation导航主体end -->
        </div>
        <div class="check-contact"></div>
    </div>
</template>

<script>
export default {
    name: 'FixedNavigation',
    methods: {
        /**
         * 显示二级导航事件
         */
        showChildrenListOne () {
            var NavigationBox = document.getElementById('NavigationBox') // 导航列表容器盒子
            var childrenListOne = document.getElementById('children-list-one') // 二级导航列表容器盒子
            var listOne = childrenListOne.getElementsByTagName('li') // 二级导航单个列表标题
            var removeClassOne = document.getElementById('removeClassOne') // 二级导航父导航列表标题
            var keepBackground = document.getElementsByClassName('keep-background')[0] // 二级导航父导航列表标题样式
            NavigationBox.style.height = 'auto'
            childrenListOne.style.height = listOne.length * 60 + 'px'
            // 当屏幕大小小于1000像素时，移出样式名为“keepBackground”的样式
            if (screen.width <= 1000) {
                removeClassOne.classList.remove('keepBackground')
            } else {
                keepBackground.style.background = '#970000'
            }
        },
        showChildrenListTwo () {
            var NavigationBox = document.getElementById('NavigationBox')
            var childrenListTwo = document.getElementById('children-list-two')
            var listTwo = childrenListTwo.getElementsByTagName('li')
            var removeClassTwo = document.getElementById('removeClassTwo')
            var keepBackground = document.getElementsByClassName('keep-background')[1]
            NavigationBox.style.height = 'auto'
            childrenListTwo.style.height = listTwo.length * 60 + 'px'
            if (screen.width <= 1000) {
                removeClassTwo.classList.remove('keepBackground')
            } else if (screen.width > 1000) {
                keepBackground.style.background = '#970000'
            }
        },
        /**
         * 隐藏二级导航事件
         */
        hideChildrenListOne () {
            var NavigationBox = document.getElementById('NavigationBox')
            var childrenListOne = document.getElementById('children-list-one')
            var removeClassOne = document.getElementById('removeClassOne')
            var keepBackground = document.getElementsByClassName('keep-background')[0]
            NavigationBox.style.height = '500px'
            childrenListOne.style.height = 0
            if (screen.width <= 1000) {
                removeClassOne.classList.remove('keepBackground')
            } else {
                keepBackground.style.background = '#d90000'
            }
        },
        hideChildrenListTwo () {
            var NavigationBox = document.getElementById('NavigationBox')
            var childrenListTwo = document.getElementById('children-list-two')
            var removeClassTwo = document.getElementById('removeClassTwo')
            var keepBackground = document.getElementsByClassName('keep-background')[1]
            NavigationBox.style.height = '500px'
            childrenListTwo.style.height = 0
            if (screen.width <= 1000) {
                removeClassTwo.classList.remove('keepBackground')
            } else if (screen.width > 1000) {
                keepBackground.style.background = '#d90000'
            }
        },
        /**
         * 点击响应式按钮显示和隐藏导航列表事件
         */
        showNavList () {
            var NavigationBox = document.getElementById('NavigationBox')
            if (NavigationBox.style.height === '500px') {
                NavigationBox.style.height = '0'
            } else {
                NavigationBox.style.height = '500px'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    .nav {
        width: 100%;
        height: 60px;
        background: $bgColor;
        overflow: hidden;
        .nav-header {
            display: none;
        }
        .nav-wrapper {
            width: 1360px;
            margin: 0 auto;
            .nav-list {
                float: left;
                font-size: 20px;
                .nav-list-title {
                    cursor: default;
                    display: block;
                    color: #fff;
                    width: 170px;
                    line-height: 60px;
                    text-align: center;
                    position: relative;
                    @include transition;
                    &:hover {
                        background: $bgActive;
                    }
                }
                .nav-children {
                    height: 0;
                    overflow: hidden;
                    background:  rgba(0, 0, 0, 0.65);
                    position: absolute;
                    z-index: 2;
                    @include transition;
                    .nav-children-list {
                        font-size: 17px;
                        letter-spacing: 2px; // 使文字间隔2px
                        a {
                            @include transition;
                            &:hover {
                                color: red;
                                background: none;
                            }
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 1360px) and (min-width: 1000px) {
            .nav-wrapper {
                width: 1000px;
                .nav-list {
                    font-size: 18px;
                    .nav-list-title {
                        width: 125px;
                    }
                    .nav-children {
                        .nav-children-list {
                            font-size: 15px;
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 1000px) {
        .nav {
            height: auto;
            background: rgba(168, 3, 3, 0.842);
            margin-left: auto;
            margin-right: auto;
            // 响应式头部样式start
            .nav-header {
                display: block;
                height: 60px;
                margin-left: 15px;
                margin-right: 15px;
                .heaser-title {
                    float: left;
                    color: #fff;
                    font-size: 22px;
                    font-weight: bold;
                    letter-spacing: 5px;
                    line-height: 60px;
                }
                .header-button {
                    cursor: pointer;
                    float: right;
                    background: rgba(168, 3, 3, 0.842);
                    padding: 9px 10px;
                    margin-top: 14px;
                    border: 1px solid #fff;
                    border-radius: 4px;
                    @include transition;
                    &:hover {
                        background: rgba(109, 2, 2, 0.65);
                    }
                    .button-bar {
                        display: block;
                        width: 22px;
                        height: 2px;
                        background: #fff;
                        border-radius: 1px;
                        &+.button-bar {
                            margin-top: 4px;
                        }
                    }
                }
            }
            // 响应式头部样式end
            .nav-wrapper {
                width: 100%;
                height: 0;
                border-top: 1px solid #fff;
                @include transition;
                .nav-box {
                    margin: 10px 0;
                    .nav-list {
                        float: none;
                        font-size: 18px;
                        .nav-list-title {
                            width: 100%;
                            text-align: left;
                            padding: 0 15px;
                            &:hover {
                                background: rgba(109, 2, 2, 0.65);
                            }
                            // 有二级导航标题的右三角号
                            .title-caret {
                                display: inline-block;
                                width: 0;
                                height: 0;
                                vertical-align: middle;
                                border-top: 5px dashed;
                                border-left: 5px solid transparent;
                                border-right: 5px solid transparent;
                                margin-left: 2px;
                            }
                        }
                        .nav-children {
                            position: static;
                            .nav-children-list {
                                font-size: 18px;
                                letter-spacing: none;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
