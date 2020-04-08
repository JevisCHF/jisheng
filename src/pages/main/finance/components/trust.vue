<template>
    <div class="trust-wrapper">
        <div class="wrapper">
            <ul class="trust-content">
                <li class="content-list content-first">
                    <h1 class="one-title">好中好</h1>
                    <h1 class="one-title">优中优</h1>
                    <h2 class="two-title">信托平台</h2>
                    <h3 class="three-title">信托产品</h3>
                    <h4 class="four-title">全方位的生活保障</h4>
                    <button class="first-button">查看更多</button>
                </li>
                <li class="content-list content-second">
                    <img class="second-img" src="@/assets/images/main-finance/trust-button.png" alt="请稍等......">
                </li>
                <li class="content-list content-third">
                    <h5 class="third-title">光大信托-信益57号江苏盐</h5>
                    <h5 class="one-text">9.2-9.5%</h5>
                    <h5 class="two-text">预计年收益</h5>
                    <h5 class="three-text">期限24个月</h5>
                    <h5 class="four-text">季度付息</h5>
                    <h5 class="five-text">起投100万</h5>
                    <h5 class="six-text">红包￥6000</h5>
                    <h5 class="seven-text">
                        <span>超稳定现金流用款项目，超低6折</span>
                    </h5>
                    <a class="third-detail">查看详情</a>
                </li>
                <li class="content-list content-third">
                    <h5 class="third-title">光大信托-信益57号江苏盐</h5>
                    <h5 class="one-text">9.2-9.5%</h5>
                    <h5 class="two-text">预计年收益</h5>
                    <h5 class="three-text">期限24个月</h5>
                    <h5 class="four-text">季度付息</h5>
                    <h5 class="five-text">起投100万</h5>
                    <h5 class="six-text">红包￥6000</h5>
                    <h5 class="seven-text">
                        <span>超稳定现金流用款项目，超低6折</span>
                    </h5>
                    <a class="third-detail">查看详情</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FinanceTrust'
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    .trust-wrapper {
        height: 750px;
        overflow: hidden;
        background: url("~images/main-finance/trust-background.jpg") center no-repeat;
        background-size: 100% 100%;
        .trust-content {
            display: flex;
            justify-content: center;
            .content-list {
                float: left;
                width: 325px;
                height: 630px;
                overflow: hidden;
            }
            // 第一个list样式
            .content-first {
                width: 320px;
                height: auto;
                color: #cf9b5d;
                margin-top: 100px;
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
                .first-button {
                    cursor: pointer;
                    width: 220px;
                    height: 50px;
                    color: #fff;
                    font-size: 30px;
                    font-weight: bold;
                    text-align: center;
                    line-height: 50px;
                    border-radius: 30px;
                    background: #d6b185;
                    margin-top: 40px;
                }
            }
            // 第二个list样式
            .content-second {
                background: url("~images/main-finance/trust-list-bg.jpg") no-repeat;
                margin-top: 55px;
                .second-img {
                    margin-top: 550px;
                    margin-left: 20px;
                }
            }
            // 第三个list样式
            .content-third {
                color: #333;
                font-size: 18px;
                line-height: 24px;
                text-align: center;
                background: linear-gradient(to bottom, #ffc397, #ff8382, #776efe);
                box-shadow: 0 0 20px #666;
                margin: 55px 0 0 25px;
                .third-title {
                    font-weight: bold;
                    margin-top: 40px;
                }
                .one-text {
                    color: #e20000;
                    font-weight: bold;
                    margin-top: 30px;
                }
                .three-text {
                    margin-top: 100px;
                }
                .four-text {
                    margin-bottom: 25px;
                }
                .six-text {
                    color: #e20000;
                }
                .seven-text {
                    color: #000;
                    padding: 0 20px;
                    margin-top: 130px;
                    span {
                        line-height: 30px;
                        border-top: 1px dashed #facd89;
                        padding: 5px 0;
                    }
                }
                .third-detail {
                    cursor: pointer;
                    display: block;
                    color: #fff;
                    font-weight: bold;
                    margin-top: 40px;
                }
            }
        }
    }
</style>
