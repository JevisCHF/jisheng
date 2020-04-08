<template>
    <div>
        <div class="background">
            <FinanceSwiper/>
            <FinanceMarket/>
        </div>
        <FinanceTrust/>
        <FinanceInsurance/>
    </div>
</template>

<script>
import FinanceSwiper from './components/swiper'
import FinanceMarket from './components/market'
import FinanceTrust from './components/trust'
import FinanceInsurance from './components/insurance'
export default {
    name: 'Finance',
    components: {
        FinanceSwiper,
        FinanceMarket,
        FinanceTrust,
        FinanceInsurance
    }
}
</script>

<style lang="scss" scoped>
    .background {
        width: auto;
        height: 1350px;
        background: url("~images/main-finance/market-background.jpg") center no-repeat;
        background-size: cover;
    }
</style>
