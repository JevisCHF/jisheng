<template>
    <!-- dialog-mask对话弹框遮罩层 -->
    <div class="mask"></div>
</template>

<script>
export default {
    name: 'DialogMask'
}
</script>

<style lang="scss" scoped>
    .mask {
        z-index: 99990;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        left: 0;
        top: 0;
    }
</style>
