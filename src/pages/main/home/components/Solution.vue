<template>
    <div class="solution-wrapper">
        <div class="wrapper responsive-wrapper">
            <div class="solution-header">
                <h3 class="home-header-h3 ">解决方案</h3>
                <h4 class="home-header-h4 ">Multiple solutions</h4>
            </div>
            <div class="solution-container" id="solution-box">
                <!-- first-box-content第一个盒子内容start -->
                <ul class="container-box">
                    <li class="container-item item-first">
                        <h5>
                            商业计划书
                            <br>
                            解决方案
                        </h5>
                        <p class="item-line"></p>
                        <div class="item-detail">
                            展望商业前景，整合资源，集中精力，修补问题，寻找机会而对企业未来的展望。为了预测企业的成长率并做好未来的行动规划。
                        </div>
                        <router-link target="_blank" :to="'/main/home/customer-solution/businessPlan'">
                            <a class="item-button">查看详情</a>
                        </router-link>
                    </li>
                    <li class="container-item item-second">
                        <h5>
                            项目可行性报告
                            <br>
                            解决方案
                        </h5>
                        <p class="item-line"></p>
                        <div class="item-detail">
                            市场分析准确、投资方案合理、并提供竞争分析、营销计划、管理方案、技术研发等实际运作方案。
                        </div>
                        <router-link target="_blank" :to="'/main/home/customer-solution/projectFeasibility'">
                            <a class="item-button">查看详情</a>
                        </router-link>
                    </li>
                    <li class="container-item item-second active">
                        <h5>
                            企业风险评估
                            <br>
                            解决方案
                        </h5>
                        <p class="item-line"></p>
                        <div class="item-detail">
                            查找和描述企业风险，评价所识别出的各种风险对企业实现目标的影响程度和风险价值，给出风险控制的优先次序。
                        </div>
                        <router-link target="_blank" :to="'/main/home/customer-solution/businessRisk'">
                            <a class="item-button">查看详情</a>
                        </router-link>
                    </li>
                    <li class="container-item item-third">
                        <h5>
                            财务分析报告
                            <br>
                            解决方案
                        </h5>
                        <p class="item-line"></p>
                        <div class="item-detail">
                            运用一套科学的分析方法，对财务状况做出客观、全面、系统的分析和评价，并进行必要的科学预测而形成书面报告。
                        </div>
                        <router-link target="_blank" :to="'/main/home/customer-solution/financialAnalysis'">
                            <a class="item-button">查看详情</a>
                        </router-link>
                    </li>
                    <li class="container-item item-fourth">
                        <h5>
                            项目中期分析
                            <br>
                            解决方案
                        </h5>
                        <p class="item-line"></p>
                        <div class="item-detail">
                            通过一系列经济技术指标，用定性与定量相结合的方式，对项目做出“运营中”的评估，将有多次评估，而非“居中”时期的评估。
                        </div>
                        <router-link target="_blank" :to="'/main/home/customer-solution/interimAnalysis'">
                            <a class="item-button">查看详情</a>
                        </router-link>
                    </li>
                </ul>
                <!-- first-box-content第一个盒子内容end -->
                <!-- second-box-content第二个盒子内容start -->
                <ul class="container-box">
                    <li class="container-item item-first">
                        <h5>
                            项目中期评估
                            <br>
                            解决方案
                        </h5>
                        <p class="item-line"></p>
                        <div class="item-detail">
                            一份优秀的科技项目申报书，往往能为科研项目“锦上添花”。多年的科技项目辅导经验基础，针对企业申报材料出现的普遍问题，提出几点技巧以供参考。
                        </div>
                        <router-link target="_blank" :to="'/main/home/customer-solution/interimAssessment'">
                            <a class="item-button">查看详情</a>
                        </router-link>
                    </li>
                    <li class="container-item item-second">
                        <h5>
                            企业社会责任分析报告
                            <br>
                            解决方案
                        </h5>
                        <p class="item-line"></p>
                        <div class="item-detail">
                            包括了雇员报告、环境报告、环境健康安全报告、慈善报告等单项报告，和囊括经济、环境、社会责任的综合性报告。
                        </div>
                        <router-link target="_blank" :to="'/main/home/customer-solution/socialResponsibility'">
                            <a class="item-button">查看详情</a>
                        </router-link>
                    </li>
                    <li class="container-item item-second active">
                        <h5>
                            境外项目市场分析预测报告
                            <br>
                            解决方案
                        </h5>
                        <p class="item-line"></p>
                        <div class="item-detail">
                            投资境外项目投资环境分析，背景和发展概况，竞争格局分析，市场分析与建设规模，不确定性及风险分析，发展趋势分析。
                        </div>
                        <router-link target="_blank" :to="'/main/home/customer-solution/overseasProject'">
                            <a class="item-button">查看详情</a>
                        </router-link>
                    </li>
                    <li class="container-item item-third">
                        <h5>
                            各行业行情近10年数据定制
                            <br>
                            解决方案
                        </h5>
                        <p class="item-line"></p>
                        <div class="item-detail">
                            深入各行业研究数据，提供专业的定制服务。
                        </div>
                        <router-link target="_blank" :to="'/main/home/customer-solution/allIndustry'">
                            <a class="item-button">查看详情</a>
                        </router-link>
                    </li>
                    <li class="container-item item-fourth">
                        <h5>
                            其他解决方案
                            <br>
                            解决方案
                        </h5>
                        <p class="item-line"></p>
                        <div class="item-detail">
                            集合政商学各领域的专家学者，根据客户的个性化需求，提供专业化解决方案，帮助客户发展到新的高度。
                        </div>
                        <router-link target="_blank" :to="'/main/home/customer-solution/otherSolutions'">
                            <a class="item-button">查看详情</a>
                        </router-link>
                    </li>
                </ul>
                <!-- second-box-content第二个盒子内容end -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeSolution',
    mounted () {
        this.changeClass()
    },
    methods: {
        /**
         * 改变样式方法
         */
        changeClass () {
            var solutionBox = document.getElementById('solution-box')
            var containerBox = solutionBox.getElementsByClassName('container-box')
            var itemListOne = containerBox[0].getElementsByTagName('li')
            var itemListTwo = containerBox[1].getElementsByTagName('li')
            /**
             * 这里使用匿名函数，按值传递，参数i（j）会传递给参数num（temp），每执行一次for循环，
             * 就会给itemListOne[i]（itemListOne[j]）创建一个num（temp）副本，也就是在内存中开辟
             * 一个空间存入num（temp）的值，这样每个itemListOne都会有一个对应的num（temp）值，解决
             * 了每次for循环后的i（j）值已经变成 length 的问题。
             */
            for (var i = 0; i < itemListOne.length; i++) {
                (function (num) {
                    itemListOne[num].onmouseover = () => {
                        for (var j = 0; j < itemListOne.length; j++) {
                            (function (temp) {
                                itemListOne[temp].classList.remove('active')
                            })(j)
                        }
                        itemListOne[num].classList.add('active')
                    }
                })(i)
            }
            for (var k = 0; k < itemListTwo.length; k++) {
                (function (num) {
                    itemListTwo[num].onmouseover = () => {
                        for (var j = 0; j < itemListTwo.length; j++) {
                            (function (temp) {
                                itemListTwo[temp].classList.remove('active')
                            })(j)
                        }
                        itemListTwo[num].classList.add('active')
                    }
                })(k)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../home.sass";
    .solution-wrapper {
        margin-top: 47px;
        padding: 53px 0 107px 0;
        box-shadow: 0 0 20px #e9e9e9;
        .solution-container {
            .container-box {
                overflow: hidden;
                margin-top: 50px;
                border-top: 2px solid #e87700;
                // 每个li样式
                .container-item {
                    float: left;
                    width: 230px;
                    height: 250px;
                    color: #fff;
                    font-size: 14px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center center;
                    position: relative;
                    @include transition;
                    // 标题样式
                    h5 {
                        width: 100%;
                        text-align: center;
                        line-height: 18px;
                        position: absolute;
                        left: 0;
                        bottom: 65px;
                        @include transition;
                    }
                    // 标题下面横线样式
                    .item-line {
                        width: 78px;
                        height: 2px;
                        background: #fff;
                        margin-left: -39px;
                        position: absolute;
                        left: 50%;
                        bottom: 56px;
                        @include transition;
                    }
                    // 隐藏的简介详情样式
                    .item-detail {
                        opacity: 0;
                        width: 202px;
                        line-height: 19.5px;
                        padding: 0 14px;
                        position: absolute;
                        left: 0;
                        bottom: -100px;
                        @include transition;
                    }
                    // 查看详情按钮样式
                    .item-button {
                        opacity: 0;
                        cursor: pointer;
                        display: block;
                        width: 120px;
                        height: 35px;
                        color: #fff;
                        font-size: 15px;
                        text-align: center;
                        line-height: 35px;
                        border-radius: 17.5px;
                        background: rgba(0, 0, 0, 0.65);
                        margin-left: -60px;
                        position: absolute;
                        left: 50%;
                        bottom: -100px;
                        @include transition;
                    }
                }
                .item-first {
                    background-image: url("~images/main-home/solution-background01.jpg");
                }
                .item-second {
                    background-image: url("~images/main-home/solution-background02.jpg");
                }
                .item-third {
                    background-image: url("~images/main-home/solution-background03.jpg");
                }
                .item-fourth {
                    background-image: url("~images/main-home/solution-background04.jpg");
                }
                // mouseover样式变化
                .active.container-item {
                    width: 440px;
                    box-shadow: 0 0 20px #787878;
                }
                .active.item-first, .active.item-second, .active.item-third, .active.item-fourth {
                    background-image: url("~images/main-home/solution-active.jpg");
                }
                .active {
                    h5 {
                        bottom: 133px;
                    }
                    .item-line {
                        bottom: 125px;
                    }
                    .item-detail {
                        opacity: 1;
                        width: 412px;
                        bottom: 65px;
                    }
                    .item-button {
                        opacity: 1;
                        bottom: 25px;
                    }
                }
            }
        }
        @media only screen and (max-width: 1360px) {
            .responsive-wrapper {
                width: 900px;
            }
        }
        @media only screen and (min-width: 750px) and (max-width: 900px) {
            .responsive-wrapper {
                width: 100%;
                .solution-container {
                    width: 750px;
                    margin: 0 auto;
                    .container-box {
                        border-top: none;
                        .container-item {
                            width: 50%;
                            .item-button {
                                width: 1.57rem;
                                height: .46rem;
                                font-size: .2rem;
                                line-height: .46rem;
                                border-radius: .228rem;
                                margin-left: -.78rem;
                                bottom: -1.3rem;
                            }
                        }
                        .active.container-item {
                            width: 50%;
                        }
                        .active {
                            .item-detail {
                                width: 85%;
                                bottom: 1rem;
                                font-size: .26rem;
                            }
                            .item-button {
                                bottom: .26rem;
                            }
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 750px) {
            .responsive-wrapper {
                width: 100%;
                .solution-container {
                    width: 100%;
                    .container-box {
                        border-top: none;
                        .container-item {
                            width: 50%;
                            .item-button {
                                width: 1.57rem;
                                height: .46rem;
                                font-size: .2rem;
                                line-height: .46rem;
                                border-radius: .228rem;
                                margin-left: -.78rem;
                                bottom: -1.3rem;
                            }
                        }
                        .active.container-item {
                            width: 50%;
                        }
                        .active {
                            .item-detail {
                                width: 85%;
                                bottom: 1rem;
                                font-size: .26rem;
                            }
                            .item-button {
                                bottom: .26rem;
                            }
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 500px) {
            .responsive-wrapper .solution-container .container-box {
                .active {
                    h5 {
                        bottom: 3.4rem;
                    }
                    .item-line {
                        bottom: 3.24rem;
                    }
                }
            }
        }
    }
</style>
