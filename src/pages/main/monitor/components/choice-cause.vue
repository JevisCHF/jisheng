<template>
    <div class="cause-wrapper">
        <div class="wrapper">
            <!-- header头部标题start -->
            <div class="cause-header">
                <h1 class="header-title">为什么选择稷生？</h1>
            </div>
            <!-- header头部标题end -->
            <!-- content中心内容start -->
            <div class="cause-content">
                <ul class="content-lists">
                    <li class="content-list">
                        <img class="list-img" src="@/assets/images/main-monitor/cause-list01.png" alt="请稍等......">
                        <h5 class="list-title">贴近用户使用</h5>
                    </li>
                    <li class="content-list">
                        <img class="list-img" src="@/assets/images/main-monitor/cause-list02.png" alt="请稍等......">
                        <h5 class="list-title">专业的团队与业务流程</h5>
                    </li>
                    <li class="content-list">
                        <img class="list-img" src="@/assets/images/main-monitor/cause-list03.png" alt="请稍等......">
                        <h5 class="list-title">经验丰富的设施团队</h5>
                    </li>
                </ul>
                <ul class="content-lists">
                    <li class="content-list">
                        <img class="list-img" src="@/assets/images/main-monitor/cause-list04.png" alt="请稍等......">
                        <h5 class="list-title">“随心所欲”的选择</h5>
                    </li>
                    <li class="content-list">
                        <img class="list-img" src="@/assets/images/main-monitor/cause-list05.png" alt="请稍等......">
                        <h5 class="list-title">适合大型企业的复杂需求</h5>
                    </li>
                    <li class="content-list">
                        <img class="list-img" src="@/assets/images/main-monitor/cause-list06.png" alt="请稍等......">
                        <h5 class="list-title">不断适应各个阶段的要求</h5>
                    </li>
                </ul>
            </div>
            <!-- content中心内容end -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'MonitorChoiceCause'
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    .cause-wrapper {
        color: #ff9393;
        background: #555;
        padding: 50px 0;
        // 头部标题样式开始
        .cause-header {
            .header-title {
                font-size: 36px;
                font-weight: bold;
                text-align: center;
            }
        }
        // 中心内容样式开始
        .cause-content {
            .content-lists {
                display: flex;
                justify-content: center;
                .content-list {
                    float: left;
                    width: 220px;
                    font-size: 18px;
                    text-align: center;
                    margin: 56px 230px 0 0;
                    &:last-child {
                        margin-right: 0;
                    }
                    .list-img {
                        width: 100px;
                        height: 100px;
                        border-radius: 50px;
                        margin: 0 auto;
                        @include transition;
                        &:hover {
                            box-shadow: 0 0 25px #333;
                        }
                    }
                    .list-title {
                        color: #ff9393;
                        font-weight: bold;
                        margin-top: 10px;
                    }
                }
            }
        }
    }
</style>
