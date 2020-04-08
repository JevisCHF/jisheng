<template>
    <div class="territory-expansion-wrapper">
        <div class="territory-expansion-header">
            <h3 class="about-us-header-title">服务疆域拓展</h3>
            <h5 class="about-us-header-line"></h5>
        </div>
        <div class="territory-expansion-content">
            <img src="@/assets/images/main-aboutus/territory-expansion-img.jpg" alt="请稍等.....">
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUsTerritoryExpansion'
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../about-us.sass";
    .territory-expansion-wrapper {
        padding: 53px 0 35px 0;
        .territory-expansion-content {
            img {
                margin: 0 auto;
            }
        }
    }
</style>
