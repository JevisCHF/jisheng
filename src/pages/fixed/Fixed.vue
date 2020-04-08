<template>
	<div>
		<FixedHeader/>
		<FixedNavigation/>
		<!-- <FixedContact/> -->
	</div>
</template>

<script>
import FixedHeader from './components/header'
import FixedNavigation from './components/navigation'
import FixedContact from './components/contact'
export default {
	name: 'Fixed',
	components: {
		FixedHeader,
		FixedNavigation,
		FixedContact
	}
}
</script>

<style lang="scss" scoped>

</style>
