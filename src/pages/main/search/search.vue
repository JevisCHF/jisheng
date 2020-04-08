<template>
    <div>
        <div class="wrapper">
            <SearchResult class="search-left"/>
            <SearchReport class="search-right"/>
        </div>
    </div>
</template>

<script>
import SearchResult from './components/result'
import SearchReport from './components/report'
export default {
    name: 'Search',
    components: {
        SearchResult,
        SearchReport
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    .wrapper {
        display: flex;
        margin-bottom: 70px;
        .search-right {
            float: right;
        }
    }
</style>
