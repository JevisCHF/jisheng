<template>
    <div>
        <div class="dialog-box find-password-box">
            <!-- dialog-header对话弹框头部start -->
            <div class="dialog-header">
                <img class="dialog-header-img" src="@/assets/images/dialog/close-button.png" alt="请稍等......"
                @click="hideFindPassword">
                <h3 class="dialog-header-title">找回密码</h3>
            </div>
            <!-- dialog-header对话弹框头部end -->
            <div class="dialog-content find-password-content">
                <form action>
                    <ul class="dialog-main">
                        <!-- user账号栏start -->
                        <li class="dialog-list">
                            <label class="dialog-label user-label">账 号</label>
                            <div class="dialog-input">
                                <img class="dialog-input-img" src="@/assets/images/dialog/phonenumber.png" alt="请稍等......">
                                <input class="dialog-input-text" type="text" placeholder="请输入接收验证码的手机号">
                            </div>
                        </li>
                        <!-- user账号栏end -->
                        <!-- check-code验证码栏start -->
                        <li class="dialog-list dialog-tip-list code-list" id="dialogFindTip">
                            <ul class="check-code">
                                <li cla>
                                    <label class="dialog-label code-label">验证码</label>
                                </li>
                                <li class="dialog-input check-input">
                                    <img class="dialog-input-img" src="@/assets/images/dialog/check.png" alt="请稍等......">
                                    <input class="dialog-input-text" type="text" placeholder="验证码">
                                </li>
                                <li>
                                    <a class="send-code" @click="showCodeTip">发送验证码</a>
                                </li>
                            </ul>
                            <p class="dialog-tip" v-show="isShowCodeTip">没有收到验证码？<strong class="resend" id="resendCodeThree" @click="resendCheckCode">点击按钮重新发送</strong></p>
                        </li>
                        <!-- check-code验证码栏end -->
                        <!-- password新密码栏start -->
                        <li class="dialog-list dialog-tip-list">
                            <label class="dialog-label">新密码</label>
                            <div class="dialog-input">
                                <img class="dialog-input-img" src="@/assets/images/dialog/password.png" alt="请稍等......">
                                <input class="dialog-input-text" type="password" placeholder="设置新密码">
                            </div>
                            <p class="dialog-tip">密码请设置字母开头和数字结合，至少8位</p>
                        </li>
                        <!-- password新密码栏end -->
                        <!-- confirm-password确认密码栏start -->
                        <li class="dialog-list">
                            <label class="dialog-label">确认密码</label>
                            <div class="dialog-input">
                                <img class="dialog-input-img" src="@/assets/images/dialog/confirm-password.png" alt="请稍等......">
                                <input class="dialog-input-text" type="password" placeholder="请确认密码">
                            </div>
                        </li>
                        <!-- confirm-password确认密码栏end -->
                    </ul>
                    <!-- bottom底部样式start -->
                    <div class="dialog-bottom">
                        <button class="dialog-button">提交</button>
                    </div>
                    <!-- bottom底部样式end -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DialogFindPassword',
    data () {
        return {
            /**
             * 是否显示发送验证码提示的判断值
             */
            isShowCodeTip: false
        }
    },
    methods: {
        /**
         * 点击“发送验证码”按钮事件
         */
        showCodeTip () {
            var dialogFindTip = document.getElementById('dialogFindTip')
            dialogFindTip.style.padding = '0 0 20px 0'
            this.isShowCodeTip = true
        },
        /**
         * 点击“点击按钮重新发送”文字事件
         */
        resendCheckCode () {
            var resendCodeThree = document.getElementById('resendCodeThree')
            resendCodeThree.innerHTML = '发送验证码成功，请等待'
            resendCodeThree.style.color = 'red'
        },
        /**
         * 点击close按钮隐藏忘记密码弹框事件
         */
        hideFindPassword () {
            this.$emit('hideFindPassword')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "./dialog.sass";
    .find-password-box {
        .find-password-content {
            .dialog-main {
                // 验证码栏样式
                .code-list {
                    padding: 0;
                    .check-code {
                        li {
                            float: left;
                        }
                        .code-label {
                            margin-top: 15px;
                        }
                        .dialog-input {
                            margin-top: 15px;
                            .dialog-input-text {
                                width: 105px;
                            }
                        }
                        // 发送验证码按钮样式
                        .send-code {
                            cursor: pointer;
                            display: block;
                            width: 100px;
                            height: 40px;
                            color: #fff;
                            font-size: 13px;
                            text-align: center;
                            line-height: 40px;
                            background: #d90000;
                            border-radius: 5px;
                            position: absolute;
                            right: 17px;
                            user-select: none;
                        }
                    }
                    // 提示样式
                    .dialog-tip {
                        top: 39px;
                        .resend {
                            cursor: pointer;
                            font-weight: 700;
                        }
                    }
                }
            }
            // bottom底部按钮样式
            .dialog-bottom {
                margin-bottom: 20px;
            }
        }
        @media only screen and (max-width: 500px) {
            .find-password-content {
                padding: 20px 8px;
                .dialog-main {
                    .code-list {
                        .check-code {
                            .code-label {
                                margin-top: 10px;
                            }
                            .dialog-input {
                                margin-top: 10px;
                                .dialog-input-text {
                                    width: 83px;
                                }
                            }
                            .send-code {
                                width: 82px;
                                height: 30px;
                                font-size: 11px;
                                line-height: 30px;
                                border-radius: 3px;
                                right: 29px;
                            }
                        }
                        .dialog-tip {
                            top: 28px;
                        }
                    }
                }
                .dialog-bottom {
                    margin: 20px 0 10px 0;
                    .dialog-button {
                        margin-top: 0;
                    }
                }
            }
        }
    }
</style>
