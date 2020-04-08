<template>
    <div class="dialog-box business-banner-box">
        <!-- dialog-header 对话弹框头部 start -->
        <div class="dialog-header">
            <img class="dialog-header-img" src="@/assets/images/dialog/business-dialog-close-button.png" alt="请稍等......"
            @click="hideDialogBusinessBanner">
        </div>
        <!-- dialog-header 对话弹框头部 end -->
        <!-- dialog-content 对话框内容 start -->
        <div class="business-banner-content">
            <ul class="content-lists">
                <li class="content-list business-text">
                    <div class="text-title">
                        <h5>{{ businessBannerData.name }}</h5>
                    </div>
                    <div class="text-detail">
                        <p>{{ businessBannerData.introduction }}</p>
                    </div>
                </li>
                <li class="content-list">
                    <img src="@/assets/images/dialog/business-dialog01.jpg" alt="请稍等......">
                </li>
                <li class="content-list">
                    <img src="@/assets/images/dialog/business-dialog02.jpg" alt="请稍等......">
                </li>
                <li class="content-list">
                    <img src="@/assets/images/dialog/business-dialog03.jpg" alt="请稍等......">
                </li>
            </ul>
        </div>
        <!-- dialog-content 对话框内容 end -->
    </div>
</template>

<script>
export default {
    name: 'DialogBusinessBanner',
    props: {
        businessBannerData: ''
    },
    methods: {
        hideDialogBusinessBanner () {
            this.$emit('hideDialogBusinessBanner')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "./dialog.sass";
    .business-banner-box {
        width: 1360px;
        border-radius: 0;
        padding-bottom: 30px;
        // 对话弹框头部样式
        .dialog-header {
            height: 55px;
            background: #fff;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            .dialog-header-img {
                top: 10px;
                right: 10px;
            }
        }
        // 对话框内容样式
        .business-banner-content {
            // background: #ccc;
            margin: 0 10px 0 10px;
            .content-lists {
                overflow: hidden;
                .content-list {
                    float: left;
                    cursor: pointer;
                    margin-top: 24.5px;
                    margin-right: 5px;
                    &:first-child {
                        cursor: default;
                        width: 253px;
                        height: 280px;
                        background: #004370;
                        margin-top: 0;
                        margin-right: 6px;
                        .text-title {
                            width: 156px;
                            height: 36px;
                            font-size: 14px;
                            text-align: center;
                            line-height: 36px;
                            background: #fff;
                            margin: 20px 48.5px;
                        }
                        .text-detail {
                            width: 215px;
                            height: 180px;
                            background: #fff;
                            margin: 0 19px 24px 19px;
                        }
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
