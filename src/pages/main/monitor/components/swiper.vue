<template>
    <div class="monitor-swiper-wrapper" id="financeSwiperContainer">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <img class="swiper-img check-img" src="@/assets/images/main-monitor/swiper-check1.gif" alt="请稍等......">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-monitor/swiper-banner01.png" alt="请稍等......">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-monitor/swiper-banner03.png" alt="请稍等......">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'MonitorSwiper',
    data () {
        return {
            swiperOption: {
                initialSlide: 0,
                loop: true,
                // autoplay: 5000,
                autoplayDisableOnInteraction: false,
                pagination: '.swiper-pagination',
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
    .monitor-swiper-wrapper >>> .swiper-pagination-bullet-active {
       background: #fff;
    }
    .monitor-swiper-wrapper {
        width: 100%;
        overflow: hidden;
        .swiper-img {
            width: 100%;
        }
        .check-img {
            height: 423.13px;
        }
    }
</style>
