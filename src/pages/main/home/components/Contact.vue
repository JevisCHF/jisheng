<template>
    <div class="contact-wrapper">
        <div class="contact-header">
            <h3 class="home-header-h3">联系我们</h3>
            <h4 class="home-header-h4">Contact Us</h4>
            <p class="home-header-line"></p>
        </div>
        <div class="contact-content">
            <h3 class="content-call">020-83622775</h3>
            <p class="content-address">广州市天河区中山大道89号天河软件园华景园A栋1508-1509室</p>
        </div>
        <div class="contact-wechat">
            <div class="wechat-img">
                <img src="@/assets/images/main-home/contact-wechat.png" alt="请稍等......">
            </div>
            <div class="wechat-code">
                <img src="@/assets/images/main-home/contact-code.jpg" alt="请稍等......">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeContact'
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../home.sass";
    .contact-wrapper {
        height: 542px;
        text-align: center;
        background: url("~images/main-home/contact-background.png") center no-repeat;
        background-size: 100% 100%;
        padding-top: 58px;
        .contact-header {
            .home-header-h3 {
                color: #fff;
                margin-bottom: 15px;
            }
            .home-header-h4 {
                color: #fff;
            }
            .home-header-line {
                background: #fff;
            }
        }
        .contact-content {
            color: #fff;
            .content-call {
                font-size: 30px;
                line-height: 33px;
                font-family: "Microsoft Yahei";
                margin-top: 35px;
            }
            .content-address {
                font-size: 18px;
                line-height: 24px;
                font-family: "Microsoft Yahei";
                margin-top: 15px;
            }
        }
        .contact-wechat {
            width: 60px;
            height: 70px;
            margin: 110px auto 0;
            position: relative;
            .wechat-img {
                img {
                    @include transition;
                }
                &:hover {
                    img {
                        transform: rotate(360deg);
                    }
                    &+.wechat-code {
                        opacity: 1;
                    }
                }
            }
            .wechat-code {
                opacity: 0;
                width: 156px;
                position: absolute;
                left: -45px;
                top: 75px;
                @include transition;
                img {
                    width: 256px !important;
                }
            }
        }
    }
</style>
