<template>
    <div>
        <div class="dialog-box requirement-box">
            <!-- dialog-header对话弹框头部start -->
            <div class="dialog-header">
                <img class="dialog-header-img" src="@/assets/images/dialog/close-button.png" alt="请稍等......"
                @click="hideRequirement">
                <h3 class="dialog-header-title">提交需求，轻松解决问题</h3>
            </div>
            <!-- dialog-header对话弹框头部end -->
            <div class="dialog-content requirement-content">
                <form action>
                    <!-- dialog-main输入框主体start -->
                    <ul class="dialog-main">
                        <li class="dialog-list">
                            <span class="list-sign">*</span>
                            <div class="requirement-list-input">
                                <label class="input-label">您的姓名：</label>
                                <input class="input-text" type="text">
                            </div>
                        </li>
                        <li class="dialog-list">
                            <span class="list-sign">*</span>
                            <div class="requirement-list-input">
                                <label class="input-label">您的电话：</label>
                                <input class="input-text" type="text">
                            </div>
                        </li>
                        <li class="dialog-list">
                            <span class="list-sign">*</span>
                            <div class="requirement-list-input">
                                <label class="input-label">公司名称：</label>
                                <input class="input-text" type="text">
                            </div>
                        </li>
                        <li class="requirement-list">
                            <span class="requirement-sign">*</span>
                            <label class="requirement-label">您的需求：</label>
                            <div class="requirement-input">
                                <textarea placeholder="需求说明"></textarea>
                            </div>
                        </li>
                    </ul>
                    <!-- dialog-main输入框主体end -->
                    <!-- bottom底部样式start -->
                    <div class="dialog-bottom">
                        <button class="dialog-button">提交需求</button>
                    </div>
                    <!-- bottom底部样式end -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DialogRequirement',
    mounted () {
        this.changeClass()
    },
    methods: {
        /**
         * 点击close隐藏提交需求弹框方法
         */
        hideRequirement () {
            this.$emit('hideRequirement')
        },
        /**
         * 改变输入框边框颜色方法
         */
        changeClass () {
            var listInput = document.getElementsByClassName('requirement-list-input')
            /**
             * 清除输入框边框颜色变化方法
             */
            function clearClass () {
                for (var j = 0; j < listInput.length; j++) {
                    (function (temp) {
                        listInput[temp].style.borderColor = '#ccc'
                    })(j)
                }
            }
            // 点击页面任何地方（除了listInput）发生的事情（清除输入框边框颜色变化）
            document.addEventListener('click', function () {
                clearClass()
            })
            for (var i = 0; i < listInput.length; i++) {
                (function (num) {
                    listInput[num].addEventListener('click', function (event) {
                        event = event || window.event
                        event.stopPropagation() // 实现点击listInput时，上面的事件不发生作用，也防止此处影响上面的事件
                        clearClass()
                        listInput[num].style.borderColor = '#d90000'
                    })
                })(i)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "./dialog.sass";
    .requirement-box {
        width: 500px;
        .dialog-header {
            .dialog-header-title {
                background: url("~images/dialog/requirement-header.png") 110px no-repeat;
            }
        }
        .requirement-content {
            font-size: 18px;
            .dialog-main {
                .dialog-list {
                    .list-sign {
                        color: #d90000;
                    }
                    .requirement-list-input {
                        width: 98%;
                        border-bottom: 1px solid #ccc;
                        padding: 0 0 12px 12px;
                        position: relative;
                        @include transition;
                        .input-label {
                            color: #333;
                        }
                        .input-text {
                            width: 248px;
                            padding-bottom: 2px;
                        }
                    }
                }
                // “您的需求”栏样式
                .requirement-list {
                    overflow: hidden;
                    margin-bottom: 30px;
                    .requirement-sign {
                        color: #d90000;
                    }
                    .requirement-label {
                        color: #333;
                        padding: 0 0 12px 7px;
                    }
                    .requirement-input {
                        width: 98%;
                        padding: 0 0 12px 7px;
                        position: relative;
                        textarea {
                            width: 90%;
                            height: 160px;
                            font-family: "Microsoft Yahei";
                            background: url("~images/dialog/requirement-describe.png") #f2f2f2 10px 15px no-repeat;
                            padding: 10px 10px 10px 35px;
                            margin-top: 15px;
                            resize: none; // 消除textarea右下角符号
                        }
                    }
                }
            }
            // bottom底部样式
            .dialog-bottom {
                padding-left: 0;
                text-align: center;
                .dialog-button {
                    font-size: 18px;
                    background: url("~images/dialog/requirement-button.png") center center no-repeat;
                    margin: 20px auto 30px;
                }
            }
        }
    }
    @media only screen and (max-width: 550px) {
        .requirement-box {
            width: 330px;
            .dialog-header {
                line-height: 50px;
                .dialog-header-img {
                    width: 30px;
                    height: 30px;
                    top: 10px;
                    right: 10px;
                }
                .dialog-header-title {
                    font-size: 18px;
                    background: url("~images/dialog/requirement-header.png") 40px no-repeat;
                }
            }
            .requirement-content {
                padding: 20px 8px;
                font-size: 16px;
                .dialog-main {
                    .dialog-list {
                        margin-bottom: 10px;
                        .requirement-list-input {
                            padding-bottom: 5px;
                            .input-text {
                                width: 190px;
                                padding-bottom: 5px;
                            }
                        }
                    }
                    .requirement-list {
                        margin-bottom: 20px;
                        .requirement-input {
                            padding: 0 0 10px 0;
                            textarea {
                                height: 125px;
                                margin-top: 10px;
                            }
                        }
                    }
                }
                .dialog-bottom {
                    .dialog-button {
                        width: 160px;
                        height: 30px;
                        font-size: 14px;
                        margin: 0 auto 30px;
                    }
                }
            }
        }
    }
</style>
