<template>
    <div class="demand-wrapper">
        <div class="wrapper">
            <!-- header需求头部标题start -->
            <div class="demand-header">
                <h3 class="header-h3">需求创造供给</h3>
                <h4 class="header-h4">Multiple solutions</h4>
            </div>
            <!-- header需求头部标题end -->
            <!-- content需求中心内容start -->
            <div class="demand-content">
                <ul class="content-lists">
                    <li class="content-list list-first">
                        <h6>融资市场利率</h6>
                        <h6>新增融资营业收入比值</h6>
                        <h6>市场利润同比</h6>
                        <h6>股权融资</h6>
                        <h6>贸易融资</h6>
                        <h6>银行贷款</h6>
                        <h5 class="list-title">融资与并购</h5>
                    </li>
                    <li class="content-list list-second">
                        <h6>运营模式创新</h6>
                        <h6>技术驱动模式</h6>
                        <h6>全民所以普制企业</h6>
                        <h6>技术模式创新</h6>
                        <h6>商业生态创新</h6>
                        <h6>营销模式创新</h6>
                        <h5 class="list-title">市场与技术</h5>
                    </li>
                    <li class="content-list list-third">
                        <h6>员工创造力</h6>
                        <h6>人力资源管理</h6>
                        <h6>部门职能与人员配备</h6>
                        <h6>招聘与测评</h6>
                        <h6>人力资源外包</h6>
                        <h6>人力资源战略与规划</h6>
                        <h6>高级管理素质评价</h6>
                        <h5 class="list-title">招聘与培训</h5>
                    </li>
                    <li class="content-list list-fourth">
                        <h6>风险管理组织职能体系</h6>
                        <h6>内部控制框架</h6>
                        <h6>合同法律</h6>
                        <h6>合同法律风险</h6>
                        <h6>财务审计</h6>
                        <h6>经营违法行为</h6>
                        <h5 class="list-title">中介与法务</h5>
                    </li>
                    <li class="content-list list-fifth">
                        <h6>数据信息</h6>
                        <h6>智慧服务</h6>
                        <h6>大数据中心维护</h6>
                        <h6>数据分析与诊断</h6>
                        <h6>数据市场分析</h6>
                        <h6>系统监测</h6>
                        <h5 class="list-title">数据与系统</h5>
                    </li>
                    <li class="content-list list-sixth">
                        <h6>营商环境</h6>
                        <h6>项目储备</h6>
                        <h6>资源交流对接</h6>
                        <h6>市场与技术储备整合</h6>
                        <h6>项目对接</h6>
                        <h6>价值链规划</h6>
                        <h6>平台型企业模式</h6>
                        <h5 class="list-title">询价与撮合</h5>
                    </li>
                </ul>
            </div>
            <!-- content需求中心内容end -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'MonitorDemand'
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    .demand-wrapper {
        padding: 50px 0 40px;
        // 需求头部样式
        .demand-header {
            text-align: center;
            .header-h3 {
                color: #333;
                font-size: 32px;
            }
            .header-h4 {
                color: #999;
                font-size: 18px;
                margin-top: 17px;
            }
        }
        // 需求中心内容样式
        .demand-content {
            margin-top: 50px;
            .content-lists {
                display: flex;
                .content-list {
                    float: left;
                    width: 210px;
                    height: 273px;
                    overflow: hidden;
                    text-align: center;
                    padding-top: 25px;
                    margin-right: 20px;
                    margin-bottom: 100px;
                    position: relative;
                    h6 {
                        font-size: 16px;
                        margin-bottom: 18px;
                        &:first-child {
                            margin-top: 12px;
                        }
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                    .list-title {
                        width: 100%;
                        color: #001e75;
                        font-size: 18px;
                        font-weight: bold;
                        letter-spacing: 5px;
                        line-height: 40px;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                    }
                }
                .list-first {
                    background: #ff9191;
                    h6 {
                        color: #cb5d5d;
                    }
                }
                .list-second {
                    background: #ffc4a0;
                    h6 {
                        color: #c17343;
                    }
                }
                .list-third {
                    background: #f8f59c;
                    h6 {
                        color: #b3af3a;
                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }
                .list-fourth {
                    background: #ade2b8;
                    h6 {
                        color: #5da96d;
                    }
                }
                .list-fifth {
                    background: #9efffe;
                    h6 {
                        color: #21acab;
                    }
                }
                .list-sixth {
                    background: #a9c1ff;
                    h6 {
                        color: #5875c1;
                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }
            }
        }
    }
</style>
