<template>
    <div>
        <div class="dialog-box register-box">
            <!-- dialog-header对话弹框头部start -->
            <div class="dialog-header">
                <img class="dialog-header-img" src="@/assets/images/dialog/close-button.png" alt="请稍等......"
                @click="hideRegister">
                <h3 class="dialog-header-title">用户注册</h3>
            </div>
            <!-- dialog-header对话弹框头部end -->
            <div class="dialog-content register-content">
                <form action>
                    <ul class="dialog-main">
                        <!-- phonenumber手机号栏start -->
                        <li class="dialog-list">
                            <label class="dialog-label">手机号*</label>
                            <div class="dialog-input">
                                <img class="dialog-input-img" src="@/assets/images/dialog/phonenumber.png" alt="请稍等......">
                                <input class="dialog-input-text" type="text" placeholder="请输入您的手机号">
                            </div>
                        </li>
                        <!-- phonenumber手机号栏end -->
                        <!-- check验证栏start -->
                        <li class="dialog-list check-list">
                            <label class="dialog-label check-label">验证*</label>
                            <!-- check-slider验证滑块start -->
                            <div class="check-slider">
                                <div class="slider-box" id="sliderBox">
                                    <div class="slider-background" id="sliderBackground"></div>
                                    <span class="slider" id="littleSlider">>></span>
                                    <span class="slider-text" id="sliderText">请按住滑块，拖动到最右边</span>
                                </div>
                            </div>
                            <!-- check-slider验证滑块end -->
                        </li>
                        <!-- check验证栏end -->
                        <!-- check-code验证码栏start -->
                        <li class="dialog-list dialog-tip-list code-list" id="dialogRegisterTip">
                            <ul class="check-code">
                                <li cla>
                                    <label class="dialog-label code-label">验证码*</label>
                                </li>
                                <li class="dialog-input check-input">
                                    <img class="dialog-input-img" src="@/assets/images/dialog/check.png" alt="请稍等......">
                                    <input class="dialog-input-text" type="text" placeholder="90s内填写">
                                </li>
                                <li>
                                    <a class="send-code" @click="showCodeTip">发送验证码</a>
                                </li>
                            </ul>
                            <p class="dialog-tip">没有收到验证码？<strong class="resend" id="resendCodeOne" @click="resendCheckCode">点击按钮重新发送</strong></p>
                        </li>
                        <!-- check-code验证码栏end -->
                        <!-- user用户名栏start -->
                        <li class="dialog-list">
                            <label class="dialog-label">用户名*</label>
                            <div class="dialog-input">
                                <img class="dialog-input-img" src="@/assets/images/dialog/user.png" alt="请稍等......">
                                <input class="dialog-input-text" type="text" placeholder="请设置用户名">
                            </div>
                        </li>
                        <!-- user用户名栏end -->
                        <!-- password密码栏start -->
                        <li class="dialog-list dialog-tip-list">
                            <label class="dialog-label">请设置密码</label>
                            <div class="dialog-input">
                                <img class="dialog-input-img" src="@/assets/images/dialog/password.png" alt="请稍等......">
                                <input class="dialog-input-text" type="password" placeholder="请设置密码">
                            </div>
                            <p class="dialog-tip">密码请设置字母开头和数字结合，至少8位</p>
                        </li>
                        <!-- password密码栏end -->
                        <!-- confirm-password确认密码栏start -->
                        <li class="dialog-list dialog-tip-list">
                            <label class="dialog-label">确认密码*</label>
                            <div class="dialog-input">
                                <img class="dialog-input-img" src="@/assets/images/dialog/confirm-password.png" alt="请稍等......">
                                <input class="dialog-input-text" type="password" placeholder="请确认密码">
                            </div>
                            <p class="dialog-tip">密码请设置字母开头和数字结合，至少8位</p>
                        </li>
                        <!-- confirm-password确认密码栏end -->
                        <!-- company公司栏start -->
                        <li class="dialog-list">
                            <label class="dialog-label">公司</label>
                            <div class="dialog-input">
                                <img class="dialog-input-img" src="@/assets/images/dialog/company.png" alt="请稍等......">
                                <input class="dialog-input-text" type="text" placeholder="选填">
                            </div>
                        </li>
                        <!-- company公司栏end -->
                        <!-- job职位栏start -->
                        <li class="dialog-list">
                            <label class="dialog-label">职位</label>
                            <div class="dialog-input">
                                <img class="dialog-input-img" src="@/assets/images/dialog/job.png" alt="请稍等......">
                                <input class="dialog-input-text" type="text" placeholder="选填">
                            </div>
                        </li>
                        <!-- job职位栏end -->
                    </ul>
                    <!-- bottom底部样式start -->
                    <div class="dialog-bottom">
                        <button class="dialog-button">提交</button>
                        <p class="statement">
                            <input class="statement-checkbox" type="checkbox">
                            <span class="statement-text">我已阅读《服务说明》《免责声明》</span>
                        </p>
                    </div>
                    <!-- bottom底部样式end -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DialogRegister',
    data () {
        return {
            /**
             * 是否显示发送验证码提示的判断值
             */
            isShowCodeTip: false
        }
    },
    mounted () {
        this.checkSlider()
    },
    methods: {
        /**
         * 点击“发送验证码”按钮事件
         */
        showCodeTip () {
            var dialogRegisterTip = document.getElementById('dialogRegisterTip')
            dialogRegisterTip.style.padding = '0 0 20px 0'
            this.isShowCodeTip = true
        },
        /**
         * 点击“点击按钮重新发送”文字事件
         */
        resendCheckCode () {
            var resendCodeOne = document.getElementById('resendCodeOne')
            resendCodeOne.innerHTML = '发送验证码成功，请等待'
            resendCodeOne.style.color = 'red'
        },
        /**
         * 点击close按钮隐藏注册弹框方法
         */
        hideRegister () {
            this.$emit('hideRegister')
        },
        /**
         * 验证滑块事件
         */
        checkSlider () {
            // var box = document.getElementById('sliderBox') // 滑块区容器盒子
            var bg = document.getElementById('sliderBackground') // 滑块区背景
            var slider = document.getElementById('littleSlider') // 滑块
            var text = document.getElementById('sliderText') // 滑块区文字
            // 验证滑块是否通过验证的标志
            var success = false
            // 滑动成功的距离(distance)=盒子的宽度(box.offsetWidth)-滑块的宽度(slider.offsetWidth)
            // 此处写常量214是为了解决刷新页面时，distance=0，滑块不能拖动的问题
            const distance = 214
            // 滑块的鼠标按下事件
            slider.onmousedown = (e) => {
                // 鼠标按下之前必须清除掉后面设置的过渡属性
                bg.style.transition = ''
                slider.style.transition = ''
                // 实现兼容性
                e = e || window.event
                /**
                 * clientX事件属性会返回当事件被触发时，鼠标指针指向对于浏览器页面（或用户区）的水平坐标
                 * 当滑块位于初始位置时，得到鼠标按下时的水平位置
                 */
                var downX = e.clientX
                // 滑块的鼠标移动事件
                document.onmousemove = (k) => {
                    k = k || window.event
                    // 获取鼠标移动后的水平位置
                    var moveX = k.clientX
                    // 获取移动鼠标水平位置的偏移量（鼠标移动时的位置-鼠标按下时的位置）
                    var offsetX = moveX - downX
                    // 在此判断：“鼠标水平移动的距离”与“滑动成功的距离”之间的关系
                    if (offsetX > distance) {
                        // 如果滑过了终点，就将滑块停留在终点位置
                        offsetX = distance
                    } else if (offsetX < 0) {
                        // 如果滑到了起点的左侧，就将滑块重置为起点位置
                        offsetX = 0
                    }
                    // 根据鼠标移动的距离来动态设置滑块的偏移量（left值）和滑块区背景的宽度
                    slider.style.left = offsetX + 'px'
                    bg.style.width = offsetX + 'px'
                    // 如果鼠标移动的距离=滑动成功的距离
                    if (offsetX === distance) {
                        text.innerHTML = '验证成功' // 设置验证成功后的text文字提示
                        success = true // 设置验证成功后的状态
                        // 验证成功后，清除掉鼠标按下事件和移动事件
                        slider.onmousedown = null
                        document.onmousemove = null
                    }
                }
                // 滑块的鼠标松开事件
                document.onmouseup = (q) => {
                    // 如果鼠标松开时，滑块没有滑到终点，则滑块复位，并且设置复位运动的过渡效果
                    if (!success) {
                        slider.style.left = 0
                        bg.style.width = 0
                        slider.style.transition = 'left .3s linear'
                        bg.style.transition = 'width .3s linear'
                    }
                    // 只要鼠标松开了，说明此时不需要滑动滑块了，那么就清除掉鼠标移动事件和松开事件
                    document.onmousemove = null
                    document.onmoouseup = null
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "./dialog.sass";
    .register-box {
        .register-content {
            .dialog-main {
                // 验证栏样式
                .check-list {
                    padding: 0;
                    .check-label {
                        margin-top: 7px;
                    }
                    // 验证栏滑块样式start
                    .check-slider {
                        float: right;
                        width: 260px;
                        height: 40px;
                        margin-left: 15px;
                        user-select: none; // 使用户无法选中文字
                        .slider-box {
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                            background: #ecd6d6;
                            border-radius: 2px;
                            position: relative;
                            .slider-background {
                                z-index: 1;
                                height: 100%;
                                background: #7ac23c;
                                position: absolute;
                                top: 0;
                                left: 0;
                            }
                            .slider {
                                cursor: move;
                                z-index: 3;
                                width: 46px;
                                height: 100%;
                                color: #fff;
                                font-size: 16px;
                                font-weight: bold;
                                text-align: center;
                                line-height: 40px;
                                background: #d90000;
                                border-radius: 3px;
                                position: absolute;
                            }
                            .slider-text {
                                z-index: 2;
                                width: 100%;
                                height: 100%;
                                color: #fff;
                                font-size: 13px;
                                text-align: center;
                                line-height: 40px;
                                position: absolute;
                            }
                        }
                    }
                }
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
            // bottom底部样式
            .dialog-bottom {
                .dialog-button {
                    margin-top: 1px;
                }
                .statement {
                    margin-top: 6px;
                    margin-left: 10px !important;
                    .statement-checkbox {
                        vertical-align: middle;
                    }
                    .statement-text {
                        color: #333;
                        font-size: 14px;
                        vertical-align: middle;
                    }
                }
            }
            @media only screen and (max-width: 500px) {
                .dialog-main {
                    .check-list {
                        .check-label {
                            margin-top: 1px;
                        }
                        .check-slider {
                            width: 195px;
                            height: 30px;
                            margin-left: 10px;
                            .slider-box {
                                .slider {
                                    width: 34px;
                                    line-height: 30px;
                                    font-size: 14px;
                                }
                                .slider-text {
                                    font-size: 10px;
                                    line-height: 30px;
                                }
                            }
                        }
                    }
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
                    .statement {
                        margin-top: -5px;
                        margin-left: 0 !important;
                        .statement-checkbox {
                            width: 10px;
                            height: 10px;
                        }
                        .statement-text {
                            font-size: 9px;
                        }
                    }
                }
            }
        }
    }
</style>
