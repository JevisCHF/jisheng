<template>
    <div>
        <MonitorSwiper/>
        <MonitorPuzzle/>
        <Monitorlifecycle/>
        <MonitorDemand/>
        <MonitorServiceCenter/>
        <MonitorChoiceCause/>
        <!-- <DialogMask/> -->
        <!-- <DialogMonitorPuzzle/> -->
    </div>
</template>

<script>
import MonitorSwiper from './components/swiper'
import MonitorPuzzle from './components/puzzle'
import Monitorlifecycle from './components/lifecycle'
import MonitorDemand from './components/demand'
import MonitorServiceCenter from './components/service-center'
import MonitorChoiceCause from './components/choice-cause'
import DialogMask from '../../dialog/mask'
import DialogMonitorPuzzle from '../../dialog/monitor-puzzle'
export default {
    name: 'Monitor',
    components: {
        MonitorSwiper,
        MonitorPuzzle,
        Monitorlifecycle,
        MonitorDemand,
        MonitorServiceCenter,
        MonitorChoiceCause,
        DialogMask,
        DialogMonitorPuzzle
    }
}
</script>

<style lang="scss" scoped>

</style>
