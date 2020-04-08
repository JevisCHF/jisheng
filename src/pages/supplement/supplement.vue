<template>
    <div>
        <FixedHeader/>
        <FixedContact/>
        <router-view></router-view>
        <FixedFooter/>
    </div>
</template>

<script>
import FixedHeader from '../fixed/components/header';
import FixedContact from '../fixed/components/contact';
import FixedFooter from '../fixed/components/footer';
export default {
    name: 'Supplement',
    components: {
        FixedHeader,
        FixedContact,
        FixedFooter
    }
}
</script>

<style lang="scss" scoped>

</style>