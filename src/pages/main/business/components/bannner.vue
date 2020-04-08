<template>
    <div class="banner-wrapper">
        <!-- 2045px -->
        <img class="banner-img" src="@/assets/images/main-business/banner.jpg" alt="请稍等......">
        <div class="banner-table">
            <table>
                <tr v-for="(items, indexs) of businessTableList" :key="indexs">
                    <td v-for="(item, index) of items" :key="index"
                        class="table-text"
                        @click="showDialogBusinessBanner(indexs,index)"
                    >
                        <a>{{ item }}</a>
                    </td>
                </tr>
            </table>
        </div>
        <DialogMask v-show="isShowDialogMask"/>
        <DialogBusinessBanner
        :businessBannerData="businessBannerData"
        v-show="isShowDialogBusinessBanner"
        @hideDialogBusinessBanner="hideDialogBusinessBanner"
        />
    </div>
</template>

<script>
import DialogMask from '../../../dialog/mask'
import DialogBusinessBanner from '../../../dialog/business-banner'
import { getBusinessTableInfo } from '../../../../api/business'
export default {
    name: 'BusinessBanner',
    components: {
        DialogMask,
        DialogBusinessBanner
    },
    data () {
        return {
            /**
             * 是否显示弹窗遮罩层和弹窗判断值
             */
            isShowDialogMask: false,
            isShowDialogBusinessBanner: false,
            /**
             * 行业表格数据
             */
            businessTableData: [],
            /**
             * 储存行业数据的二维数组
             */
            businessTableList: [[]],
            /**
             * businessTableList二维数组的行数，即表格的行数
             */
            businessTableListRows: Number,
            businessBannerData: ''
        }
    },
    mounted () {
        this.getBusinessTableData()
    },
    methods: {
        /**
         * 获取行业表格数据
         */
        getBusinessTableData () {
            getBusinessTableInfo().then((response) => {
                this.businessTableData = response.data.data
                // businessTableList二维数组的行数，即表格的行数，向下取整
                this.businessTableListRows = Math.floor(this.businessTableData.length / 13)
                // 给businessTableList二维数组赋值，列数固定为13
                for (var i = 0; i < this.businessTableListRows; i++) {
                    this.$set(this.businessTableList, i, [])
                    for (var j = 0; j < 13; j++) {
                        this.$set(this.businessTableList[i], j, this.businessTableData[13 * i + j].name)
                    }
                }
                // 如果行业表格数据总数不是13的倍数，则继续给businessTableList二维数组的最后一行赋值，即给表格的最后一行赋值
                var assignedData = this.businessTableListRows * 13 // 已赋值的数据总数
                if (this.businessTableData.length % 13 !== 0) {
                    this.$set(this.businessTableList, this.businessTableListRows, [])
                    for (var k = 0; k < this.businessTableData.length - assignedData; k++) {
                        this.$set(this.businessTableList[this.businessTableListRows], k, this.businessTableData[assignedData + k].name)
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        /**
         * 点击显示行业弹窗
         */
        showDialogBusinessBanner (indexs, index) {
            this.isShowDialogMask = true
            this.isShowDialogBusinessBanner = true
            for (var i = 0; i < this.businessTableData.length; i++) {
                if (this.businessTableData[i].name === this.businessTableList[indexs][index]) {
                    this.businessBannerData = this.businessTableData[i]
                }
            }
        },
        /**
         * 隐藏行业弹窗
         */
        hideDialogBusinessBanner () {
            this.isShowDialogMask = false
            this.isShowDialogBusinessBanner = false
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "./banner.sass";
</style>
