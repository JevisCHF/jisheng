<template>
    <!-- search-report搜索页右边热门报告start -->
    <div class="report-wrapper">
        <div class="report-title">
            <h4 class="title-text">热门报告</h4>
        </div>
        <div class="report-imagetext">
            <img src="@/assets/images/main-search/report-imagetext.png" alt="请稍等......">
            <h5 class="imagetext-title">中国海油智建港珠澳清洁“能源桥” 促进三地经济腾飞</h5>
        </div>
        <div class="report-information-list">
            <ul class="information-lists">
                <li class="information-list">·  中国珠海航空航天无人机政策</li>
                <li class="information-list">·  中国珠海航空航天无人机政策</li>
                <li class="information-list">·  中国珠海航空航天无人机政策</li>
                <li class="information-list">·  中国珠海航空航天无人机政策</li>
                <li class="information-list">·  中国珠海航空航天无人机政策</li>
                <li class="information-list">·  中国珠海航空航天无人机政策</li>
            </ul>
        </div>
    </div>
    <!-- search-report搜索页右边热门报告end -->
</template>

<script>
export default {
    name: 'SearchReport'
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    .report-wrapper {
        width: 23.9%;
        height: 600px; // 待修改
        background: #f2f2f2;
        margin-top: 122px;
        margin-left: 20px;
        // 头部标题样式
        .report-title {
            width: 100%;
            height: 40px;
            background: $bgColor;
            .title-text {
                color: #fff;
                font-size: 18px;
                text-align: center;
                line-height: 40px;
            }
        }
        // 首个图文报告样式
        .report-imagetext {
            width: 93.85%;
            height: 305px;
            margin: 10px 10px 0 10px;
            position: relative;
            .imagetext-title {
                width: 95.06%;
                height: 60px;
                overflow: hidden;
                color: #fff;
                font-size: 18px;
                line-height: 30px;
                background: rgba(0, 0, 0, 0.459);
                padding: 5px 0 5px 15px;
                position: absolute;
                bottom: 0;
            }
        }
        // 报告信息列表样式
        .report-information-list {
            .information-lists {
                .information-list {
                    width: 92.31%;
                    height: 40px;
                    color: #666;
                    font-size: 18px;
                    line-height: 41px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    border-bottom: 1px solid #dcdcdc;
                    margin: 0 auto;
                    &:last-child {
                        border: none;
                    }
                }
            }
        }
    }
</style>
