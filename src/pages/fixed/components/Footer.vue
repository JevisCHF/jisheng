<template>
    <div class="footer">
        <p>Copyright © 2018 广州稷生科技有限公司 版权所有 MP Consulting Group. All Right Reserved 备案[粤ICP备********号]</p>
    </div>
</template>

<script>
export default {
    name: 'FixedFooter'
}
</script>

<style lang="scss" scoped>
    .footer {
        clear: both;
        width: 100%;
        color: #fff;
        font-size: 16px;
        font-family: "Microsoft Yahei";
        line-height: 60px;
        text-align: center;
        background: #333;
    }
    @media only screen and (max-width: 1050px) {
        .footer {
            font-size: 10px;
            line-height: 35px;
        }
    }
</style>
