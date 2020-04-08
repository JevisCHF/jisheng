<template>
    <div class="dialog-box monitor-puzzle-box">
        <!-- dialog-header 对话弹框头部 start -->
        <div class="dialog-header">
            <img class="dialog-header-img" src="@/assets/images/dialog/close-button.png" alt="请稍等......"
            @click="hideDialogMonitorPuzzle">
            <h3 class="dialog-header-title">{{ monitorPuzzleData.name }}</h3>
        </div>
        <!-- dialog-header 对话弹框头部 end -->
        <!-- dialog-content 对话框内容 start -->
        <div class="monitor-dialog-content">
            <table>
                <tr v-for="n of tabeleRows" :key="n">
                    <td class="children-title" v-for="m of tableCols" :key="m">
                        <router-link target="_blank" to="/supplement/monitor-questionnaire">
                            <a>{{ monitorPuzzleData.children[n*9+m].name }}</a>
                        </router-link>
                    </td>
                </tr>
            </table>
        </div>
        <!-- dialog-content 对话框内容 end -->
    </div>
</template>

<script>
export default {
    name: 'DialogMonitorPuzzle',
    props: {
        monitorPuzzleData: '',
        tabeleRows: Array,
        tableCols: Array
    },
    mounted () {
        // this.dataArray()
    },
    methods: {
        /**
         * 隐藏弹窗
         */
        hideDialogMonitorPuzzle () {
            this.$emit('hideDialogMonitorPuzzle')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "./dialog.sass";
    .monitor-puzzle-box {
        width: 1360px;
        top: 40%;
        .dialog-header {
            line-height: 50px;
            border-radius: 15px;
            .dialog-header-img {
                top: 7px;
                right: 8px;
            }
            .dialog-header-title {
                font-size: 18px;
                font-weight: bold;
            }
        }
        .monitor-dialog-content {
            padding: 25px 20px 35px 20px;
            table {
                width: 1320px;
                .children-title {
                    // width: 140px;
                    height: 30px;
                    text-align: center;
                    // line-height: 20px;
                    a {
                        cursor: pointer;
                        color: #333;
                        font-size: 14px;
                        font-weight: bold;
                        @include transition;
                        &:hover {
                            color: #d90000;
                        }
                    }
                }
            }
        }
    }
</style>
