<template>
    <div>
        <AboutUsIntroduction/>
        <AboutusManagementTeam/>
        <AboutUsCooperationAlliance/>
        <AboutUsTerritoryExpansion/>
    </div>
</template>

<script>
import AboutUsIntroduction from './components/introduction'
import AboutusManagementTeam from './components/management-team'
import AboutUsCooperationAlliance from './components/cooperation-alliance'
import AboutUsTerritoryExpansion from './components/territory-expansion'
export default {
    name: 'AboutUs',
    components: {
        AboutUsIntroduction,
        AboutusManagementTeam,
        AboutUsCooperationAlliance,
        AboutUsTerritoryExpansion
    }
}
</script>

<style lang="scss" scoped>

</style>
