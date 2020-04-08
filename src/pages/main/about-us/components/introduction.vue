<template>
    <div class="introduction-wrapper">
        <div class="wrapper">
            <div class="introduction-text">
                <img class="text-img" src="@/assets/images/main-aboutus/introduction-title.png" alt="请稍等......">
                <p class="text-detail">公司全称：广州稷生科技有限公司，位于广州市天河区中山大道89号。公司集中了一批优秀的IT工程师及投融资人才，是一家以互联网平台运营、WEB应用开发、软件开发、大数据分析、移动互联网通讯技术、云计算等运营的投资咨询与投资管理企业。主要从事资产运营、资本管理、实业投资、境外融资、管理资讯等业务。公司实行市场化管理，激励机制灵活，发展势头强劲，具有良好的市场信誉。</p>
                <p class="text-detail">公司主要以技术研发创新为主导，把握互联网行业的需求，利用互联网核心技术为客户提供稳定、可靠、功能优异的软硬一体解决方案。我们秉承着“为合作伙伴创造价值”的核心价值观，并以“诚实、宽容、创新、服务”为企业精神，通过自主创新和真诚合作为互联网及金融、信息服务等行业创造价值。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUsIntroduction'
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../about-us.sass";
    .introduction-wrapper {
        width: 100%;
        height: 435px;
        padding-top: 65px;
        overflow: hidden;
        background: url("~images/main-aboutus/introduction-background.jpg") center no-repeat;
        background-size: cover;
        .introduction-text {
            width: 83.6%;
            .text-img {
                margin-bottom: 20px;
            }
            .text-detail {
                color: #fff;
                font-size: 18px;
                line-height: 45px;
                margin-bottom: 20px;
                @include transition;
            }
            @media only screen and (max-width: 980px) {
                .text-detail {
                    font-size: 16px;
                    line-height: 30px;
                }
            }
        }
        @media only screen and (max-width: 1450px)  {
            padding-left: 1.7%;
        }
    }
</style>
