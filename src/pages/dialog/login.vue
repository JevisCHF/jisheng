<template>
    <div>
        <div class="dialog-box login-box">
            <!-- dialog-header对话弹框头部start -->
            <div class="dialog-header">
                <img class="dialog-header-img" src="@/assets/images/dialog/close-button.png" alt="请稍等......"
                @click="hideLogin">
                <h3 class="dialog-header-title">用户登录</h3>
            </div>
            <!-- dialog-header对话弹框头部end -->
            <div class="dialog-content login-content">
                <form action>
                    <ul class="dialog-main">
                        <!-- user账号栏start -->
                        <li class="dialog-list">
                            <label class="dialog-label">账号</label>
                            <div class="dialog-input">
                                <img class="dialog-input-img" src="@/assets/images/dialog/user.png" alt="请稍等......">
                                <input class="dialog-input-text" type="text" placeholder="用户名/手机号">
                            </div>
                        </li>
                        <!-- user账号栏end -->
                        <!-- password密码栏start -->
                        <li class="dialog-list">
                            <label class="dialog-label">密码</label>
                            <div class="dialog-input">
                                <img class="dialog-input-img" src="@/assets/images/dialog/password.png" alt="请稍等......">
                                <input class="dialog-input-text" type="password" placeholder="请输入密码">
                            </div>
                        </li>
                        <!-- password密码栏end -->
                    </ul>
                    <!-- bottom底部样式start -->
                    <div class="dialog-bottom">
                        <a class="bottom-text link-to" @click="showFindPassword">忘记密码？</a>
                        <button class="dialog-button" @click="LoginCheck">登录</button>
                        <h4 class="bottom-text no-account">没有账号？<span class="link-to" @click="showRegister"> 立即注册 >></span></h4>
                    </div>
                    <!-- bottom底部样式end -->
                </form>
            </div>
        </div>
        <DialogFindPassword v-show="isShowFindPassword" @hideFindPassword="hideFindPassword"/>
    </div>
</template>

<script>
import DialogFindPassword from './find-password'
export default {
    name: 'DialogLogin',
    components: {
        DialogFindPassword
    },
    data () {
        return {
            /**
             * 是否显示忘记密码弹框的判断值
             */
            isShowFindPassword: false
        }
    },
    methods: {
        /**
         * 点击close按钮隐藏登录弹框事件
         */
        hideLogin () {
            // 子组件DialogMask可以使用$emit触发父组件FixedHeader的hideLogin()函数
            this.$emit('hideLogin')
        },
        /**
         * 显示忘记密码弹框方法
         */
        showFindPassword () {
            this.isShowFindPassword = true
        },
        /**
         * 隐藏忘记密码弹框方法
         * 作用于子组件DialogFindPassword
         */
        hideFindPassword () {
            this.isShowFindPassword = false
        },
        /**
         * 显示注册弹框方法
         * 触发父组件的showLoginRegister()函数
         */
        showRegister () {
            this.$emit('showLoginRegister')
        },
        /**
         * 模拟登录成功方法
         */
        LoginCheck () {
            this.$emit('hideLogin')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "./dialog.sass";
    .login-box {
        .login-content {
            // 对话登录弹框中心主体form样式
            .dialog-main {
                .dialog-list {
                    .dialog-label {
                        font-size: 16px;
                        letter-spacing: 5px; // 设置字体间距
                    }
                }
            }
            // bottom底部样式
            .dialog-bottom {
                margin: 90px 0 19px 0;
                a {
                    display: block;
                }
                .bottom-text {
                    color: #666;
                    font-size: 14px;
                }
                .link-to {
                    cursor: pointer;
                    color: #d90000;
                }
                .no-account {
                    margin-top: 12px;
                }
            }
        }
        @media only screen and (max-width: 500px) {
            .login-content {
                padding: 20px 10px;
                .dialog-main {
                    .dialog-label {
                        font-size: 13px;
                    }
                }
                .dialog-bottom {
                    margin: 60px 0 10px 0;
                    .bottom-text {
                        font-size: 12px;
                    }
                    .dialog-button {
                        margin-top: 0;
                    }
                    .no-account {
                        margin-top: 0;
                    }
                }
            }
        }
    }
</style>
