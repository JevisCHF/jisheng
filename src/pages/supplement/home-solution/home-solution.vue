<template>
    <div>
        <FixedNavigation/>
        <div>客户解决方案详情页面</div>
    </div>
</template>

<script>
import FixedNavigation from '../../fixed/components/navigation';
export default {
    name: 'HomeClientSolution',
    components: {
        FixedNavigation
    }
}
</script>

<style lang="scss" scoped>
    div {
        margin-bottom: 100px;
    }
</style>