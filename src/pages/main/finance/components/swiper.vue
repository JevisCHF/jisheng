<template>
    <div class="finance-swiper-wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-finance/swiper-banner01.png" alt="请稍等......">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-finance/swiper-banner02.png" alt="请稍等......">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-finance/swiper-banner03.png" alt="请稍等......">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'FinanceSwiper',
    data () {
        return {
            swiperOption: {
                initialSlide: 0,
                loop: true,
                autoplay: 2000,
                autoplayDisableOnInteraction: true,
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
    .finance-swiper-wrapper >>> .swiper-pagination-bullet-active {
        background: #fff;
    }
    .finance-swiper-wrapper {
        width: 100%;
        overflow: hidden;
        .swiper-img {
            width: 100%;
        }
    }
</style>
