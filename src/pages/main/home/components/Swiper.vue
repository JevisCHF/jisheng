<template>
    <div class="home-swiper-wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-home/swiper-banner01.png" alt="请稍等......">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-home/swiper-banner02.png" alt="请稍等......">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-home/swiper-banner03.png" alt="请稍等......">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-home/swiper-banner04.png" alt="请稍等......">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-home/swiper-banner05.png" alt="请稍等......">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-home/swiper-banner06.png" alt="请稍等......">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
            swiperOption: {
                // 设置初始化时swiper的索引为第一张图片
                initialSlide: 0,
                // 实现无限循环
                loop: true,
                // 实现自动播放
                autoplay: 5000,
                // 实现鼠标操作后，图片仍然能够自动播放
                autoplayDisableOnInteraction: false,
                // 鼠标移进swiper内变为手掌形状
                // grabCursor : true,
                // 显示小圆点
                pagination: '.swiper-pagination',
                // 实现点击小圆点，滚动到对应图片
                paginationClickable: true
            }
        }
    },
    computed: {
        swiper () {
            return this.$refs.mySwiper.swiper
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    .home-swiper-wrapper >>> .swiper-pagination-bullets {
        bottom: 15px;
        .swiper-pagination-bullet-active {
            background: #fff;
        }
    }
    .home-swiper-wrapper {
        width: 100%;
        overflow: hidden;
        .swiper-img {
            z-index: 1;
            width: 100%;
        }
    }
</style>
