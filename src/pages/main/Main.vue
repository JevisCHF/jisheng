<template>
    <div>
        <Fixed/>
        <router-view></router-view>
        <FixedFooter/>
    </div>
</template>

<script>
import Fixed from '../fixed/fixed'
import FixedFooter from '../fixed/components/footer'
export default {
    name: 'Main',
    components: {
        Fixed,
        FixedFooter
    }
}
</script>

<style lang="scss" scoped>

</style>
