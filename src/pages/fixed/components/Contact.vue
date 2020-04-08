<template>
    <div>
        <div class="right-fixed">
            <ul>
                <li class="fixed-box fixed-call">
                    <img src="@/assets/images/fixed/icon-call.png" alt="请稍等...">
                    <p>联系我们</p>
                    <!-- hide-call隐藏的联系我们盒子start -->
                    <div class="hide-box call-box">
                        <h3>热线电话</h3>
                        <h4>020-83622775</h4>
                    </div>
                    <!-- hide-call隐藏的联系我们盒子end -->
                </li>
                <li class="fixed-box fixed-consultation">
                    <img src="@/assets/images/fixed/icon-consultation.png" alt="请稍等...">
                    <p>服务咨询</p>
                    <!-- hide-consultation隐藏的服务咨询盒子start -->
                    <div class="hide-box consultation-box">
                        <ul>
                            <li>
                                <a class="first-consultation">客服1</a>
                            </li>
                            <li>
                                <a class="second-consultation">客服2</a>
                            </li>
                            <li>
                                <a class="third-consultation">客服3</a>
                            </li>
                        </ul>
                        <h4>在线时间</h4>
                        <h5>AM 08:00-12:00</h5>
                        <h5>PM 14:00-22:00</h5>
                    </div>
                    <!-- hide-consultation隐藏的服务咨询盒子end -->
                </li>
                <li class="fixed-box" @click="showRequirement">
                    <img src="@/assets/images/fixed/icon-advice.png" alt="请稍等...">
                    <p>发布需求</p>
                </li>
                <li class="fixed-box" @click="goTop">
                    <img src="@/assets/images/fixed/gotop.png" alt="请稍等...">
                </li>
            </ul>
        </div>
        <!-- dialog-requirement需求对话弹框start -->
        <DialogMask v-show="isShowMask"/>
        <DialogRequirement v-show="isShowRequirement" @hideRequirement="hideRequirement"/>
        <!-- dialog-requirement需求对话弹框end -->
    </div>
</template>

<script>
import DialogMask from '../../dialog/mask'
import DialogRequirement from '../../dialog/requirement'
export default {
    name: 'FixedContact',
    components: {
        DialogMask,
        DialogRequirement
    },
    data () {
        return {
            /**
             * 是否显示对话弹框遮罩层判断值
             */
            isShowMask: false,
            /**
             * 是否显示提交需求弹框判断值
             */
            isShowRequirement: false
        }
    },
    methods: {
        /**
         * 实现点击箭头，返回页面顶部的功能
         */
        goTop () {
            document.body.scrollTop = document.documentElement.scrollTop = 0
        },
        /**
         * 显示提交需求弹框方法
         */
        showRequirement () {
            this.isShowMask = true
            this.isShowRequirement = true
        },
        /**
         * 隐藏提交需求弹框方法
         * 作用于子组件DialogRequirement
         */
        hideRequirement () {
            this.isShowMask = false
            this.isShowRequirement = false
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    .right-fixed {
        position: fixed;
        top: 30%;
        right: 0;
        z-index: 9999;
        ul > .fixed-box {
            cursor: pointer;
            width: 30px;
            padding: 15px;
            background: rgba(12, 26, 99, 0.65);
            margin-bottom: 3px;
            position: relative;
            @include transition;
            &:last-child {
                padding: 10px 15px;
            }
            &:hover {
                background: #1831bf;
            }
            img {
                margin: 0 auto;
            }
            p {
                color: #fff;
                font-size: 12px;
                text-align: center;
                line-height: 16px;
            }
            .hide-box {
                text-align: center;
                background: #fff;
                box-shadow: 5px 5px 20px rgba(0,0,0,.5);
                position: absolute;
                top: 0;
                right: 100%;
                h3 {
                    font-size: 16px;
                }
                h4 {
                    font-size: 14px;
                }
            }
            .call-box {
                display: none;
                opacity: 0;
                width: 160px;
                padding: 20px 0 28px 0;
                @include transition;
                h3 {
                    color: red;
                }
                h4 {
                    color: #000;
                    font-weight: bold;
                    margin-top: 15px;
                }
            }
            .consultation-box {
                display: none;
                opacity: 0;
                width: 100px;
                padding: 30px 30px 25px;
                @include transition;
                li {
                    margin-bottom: 10px;
                    a {
                        display: block;
                        width: 68px;
                        height: 23px;
                        color: #000;
                        font-size: 10px;
                        line-height: 25px;
                        text-align: right;
                        border: 1px solid #999999;
                        border-radius: 8px;
                        padding-right: 20px;
                        margin: 0 auto;
                        @include transition;
                        &:hover {
                            border-color: #e60012;
                        }
                    }
                    .first-consultation {
                        background: url("~images/fixed/qq1.png") 12px center no-repeat;
                    }
                    .second-consultation {
                        background: url("~images/fixed/qq2.png") 12px center no-repeat;
                    }
                    .third-consultation {
                        background: url("~images/fixed/qq3.png") 12px center no-repeat;
                    }
                }
                h4 {
                    color: #000;
                    margin: 15px 0;
                }
                h5 {
                    color: #d90000;
                    font-size: 11px;
                    line-height: 12.8px;
                }
            }
        }
        // 问题：没有渐变效果
        .fixed-call:hover > .call-box {
            opacity: 1;
            display: block;
        }
        .fixed-consultation:hover > .consultation-box {
            opacity: 1;
            display: block;
        }
    }
</style>
