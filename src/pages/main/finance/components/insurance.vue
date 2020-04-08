<template>
    <div class="insurance-wrapper">
        <div class="wrapper">
            <ul class="insurance-content">
                <li class="content-list">
                    <h1 class="one-title">有内涵</h1>
                    <h1 class="one-title">有温度</h1>
                    <h2 class="two-title">保险平台</h2>
                    <h3 class="three-title">保险产品</h3>
                    <h4 class="four-title">全方位的生活保障</h4>
                    <button class="five-button">查看更多</button>
                </li>
                <li class="content-list">
                    <h3 class="one-text">平安车险-有内涵的宝险</h3>
                    <h4 class="two-text">上班初心必备保障</h4>
                    <h4 class="three-text">·50万旅游意外伤害保障</h4>
                    <h4 class="three-text">·5人以上同时投保享团购价</h4>
                    <h3 class="four-text"><span>￥170</span>/年起 </h3>
                    <div class="list-button">
                        <button class="button-text">查看详情</button>
                    </div>
                </li>
                <li class="content-list">
                    <h3 class="one-text">平安车险-有内涵的宝险</h3>
                    <h4 class="two-text">上班初心必备保障</h4>
                    <h4 class="three-text">·50万旅游意外伤害保障</h4>
                    <h4 class="three-text">·5人以上同时投保享团购价</h4>
                    <h3 class="four-text"><span>￥170</span>/年起 </h3>
                    <div class="list-button">
                        <button class="button-text">查看详情</button>
                    </div>
                </li>
                <li class="content-list">
                    <h3 class="one-text">平安车险-有内涵的宝险</h3>
                    <h4 class="two-text">上班初心必备保障</h4>
                    <h4 class="three-text">·50万旅游意外伤害保障</h4>
                    <h4 class="three-text">·5人以上同时投保享团购价</h4>
                    <h3 class="four-text"><span>￥170</span>/年起 </h3>
                    <div class="list-button">
                        <button class="button-text">查看详情</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FinanceInsurance'
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    .insurance-wrapper {
        height: 750px;
        overflow: hidden;
        background: url("~images/main-finance/insurance-background.jpg") center no-repeat;
        background-size: 100% 100%;
        .insurance-content {
            display: flex;
            justify-content: center;
            .content-list {
                float: left;
                width: 325px;
                height: 630px;
                overflow: hidden;
                color: #fff;
                background: url("~images/main-finance/insurance-list-bg.jpg") no-repeat;
                box-shadow: 0 0 30px #333;
                margin: 55px 25px 0 0;
                // 各list里面的文字样式
                .one-text {
                    height: 50px;
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    line-height: 50px;
                    background: #d6b185;
                    margin-top: 315px;
                }
                .two-text {
                    color: #e2006a;
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 24px;
                    padding: 10px 30px;
                    margin-top: 25px;
                }
                .three-text {
                    font-size: 18px;
                    line-height: 24px;
                    padding: 0 30px;
                }
                .four-text {
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 40px;
                    padding: 0 30px;
                    margin-top: 35px;
                    span {
                        color: #e2006a;
                        font-size: 30px;
                    }
                }
                .list-button {
                    text-align: center;
                    padding: 5px 0;
                    .button-text {
                        cursor: pointer;
                        color: #fff;
                        font-size: 18px;
                        font-weight: bold;
                        line-height: 25px;
                        border: 1px solid #fff;
                        border-radius: 20px;
                        background: none;
                        padding: 5px 20px;
                    }
                }
                // 第一个list样式
                &:first-child {
                    width: 320px;
                    height: auto;
                    background: none;
                    box-shadow: none;
                    margin: 100px 0 0 0;
                    .one-title {
                        font-size: 72px;
                        font-weight: bold;
                        line-height: 85px;
                    }
                    .two-title {
                        font-size: 60px;
                        line-height: 80px;
                    }
                    .three-title {
                        font-size: 30px;
                        font-weight: bold;
                        line-height: 40px;
                        margin-top: 120px;
                    }
                    .four-title {
                        font-size: 18px;
                        line-height: 24px;
                        margin-top: 10px;
                    }
                    .five-button {
                        cursor: pointer;
                        width: 220px;
                        height: 50px;
                        color: #fff;
                        font-size: 30px;
                        font-weight: bold;
                        text-align: center;
                        line-height: 50px;
                        background: #d6b185;
                        border-radius: 30px;
                        margin-top: 40px;
                    }
                }
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
