<template>
    <div class="course-swiper-wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-course/swiper-banner01.png" alt="请稍等......">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-course/swiper-banner02.png" alt="请稍等......">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/images/main-course/swiper-banner03.png" alt="请稍等......">
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'CourseSwiper',
    data () {
        return {
            swiperOption: {
                initialSlide: 0,
                loop: true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next'
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
    .course-swiper-wrapper >>> .swiper-container {
        .swiper-button-prev {
            background: url("~images/main-course/swiper-button-prev01.png") center no-repeat;
            @include transition;
        }
        .swiper-button-next {
            background: url("~images/main-course/swiper-button-next01.png") center no-repeat;
            @include transition;
        }
    }
    .course-swiper-wrapper {
        width: 100%;
        overflow: hidden;
        .swiper-img {
            width: 100%;
        }
    }
    @media only screen and (min-width: 1300px) {
        .course-swiper-wrapper >>> .swiper-container {
            .swiper-button-prev, .swiper-button-next {
                width: 26px;
                height: 88px;
                margin: -45px;
            }
            .swiper-button-prev {
                background: url("~images/main-course/swiper-button-prev.png") center no-repeat;
                left: 300px;
            }
            .swiper-button-next {
                background: url("~images/main-course/swiper-button-next.png") center no-repeat;
                right: 300px;
            }
        }
    }
</style>
