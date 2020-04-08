<template>
    <div>
        <div>中国国情咨询页面</div>
        <ul>
            <li>
                <router-link to="/main/nation/history">历史人文地理</router-link>
            </li>
            <li>
                <router-link to="/main/nation/natural">自然资源禀赋</router-link>
            </li>
            <li>
                <router-link to="/main/nation/social-development">社会发展条件</router-link>
            </li>
            <li>
                <router-link to="/main/nation/macroeconomic">宏观经济政策</router-link>
            </li>
            <li>
                <router-link to="/main/nation/economic-operation">经济运行状态</router-link>
            </li>
            <li>
                <router-link to="/main/nation/economic-map">国家经济图谱</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Nation'
}
</script>

<style lang="scss" scoped>
    div {
        margin: 100px auto;
        ul {
            display: flex; // 解决浮动带来的布局问题
            li {
                float: left;
                margin-right: 20px;
            }
        }
    }
</style>
