<template>
    <div class="management-team-wrapper">
        <div class="wrapper">
            <!-- management-team-header管理团队头部start -->
            <div class="management-team-header">
                <h3 class="about-us-header-title">经营管理团队</h3>
                <h5 class="about-us-header-line"></h5>
            </div>
            <!-- management-team-header管理团队头部end -->
            <!-- management-team-content管理团队内容start -->
            <div class="management-team-content">
                <ul class="content-lists">
                    <li class="content-list">
                        <img src="@/assets/images/main-aboutus/management-team-list01.jpg" alt="请稍等......">
                        <img class="list-img-active" src="@/assets/images/main-aboutus/management-team-list-active.png" alt="请稍等......">
                        <div class="list-text">
                            <h3 class="text-title">管理层</h3>
                            <p class="text-detail">制定组织的总目标、总战略，掌握组织的大致方针，并评价整个组织的绩效</p>
                        </div>
                    </li>
                    <li class="content-list">
                        <img src="@/assets/images/main-aboutus/management-team-list02.jpg" alt="请稍等......">
                        <img class="list-img-active" src="@/assets/images/main-aboutus/management-team-list-active.png" alt="请稍等......">
                        <div class="list-text">
                            <h3 class="text-title">系统建设团队</h3>
                            <p class="text-detail">每一个成员的知识和技能协同工作，解决问题，达到共同的目标</p>
                        </div>
                    </li>
                    <li class="content-list">
                        <img src="@/assets/images/main-aboutus/management-team-list03.jpg" alt="请稍等......">
                        <img class="list-img-active" src="@/assets/images/main-aboutus/management-team-list-active.png" alt="请稍等......">
                        <div class="list-text">
                            <h3 class="text-title">产品营销团队</h3>
                            <p class="text-detail">为客户创造最大的价值，使客户满意最大化，使企业从中获得长远发展和稳定利润</p>
                        </div>
                    </li>
                    <li class="content-list">
                        <img src="@/assets/images/main-aboutus/management-team-list04.jpg" alt="请稍等......">
                        <img class="list-img-active" src="@/assets/images/main-aboutus/management-team-list-active.png" alt="请稍等......">
                        <div class="list-text">
                            <h3 class="text-title">综合管理团队</h3>
                            <p class="text-detail">公司的综合管理部门，负责公司行政、人力资源及法律事务，组织公司企划、贯标</p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- management-team-content管理团队内容end -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutusManagementTeam'
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../about-us.sass";
    .management-team-wrapper {
        padding: 50px 0 75px 0;
        // 管理团队内容样式
        .management-team-content {
            margin-top: 22px;
            .content-lists {
                .content-list {
                    cursor: default;
                    overflow: hidden;
                    margin-top: 10px;
                    position: relative;
                    @include transition;
                    &:hover {
                        box-shadow: 0 0 30px #9f9f9f;
                        .list-img-active {
                            display: block;
                        }
                        .list-text {
                            .text-detail {
                                opacity: 1;
                            }
                        }
                    }
                    img {
                        width: 100%;
                    }
                    .list-img-active {
                        display: none;
                        height: 100%;
                        position: absolute;
                        top: 0;
                    }
                    .list-text {
                        width: 78%;
                        color: #fff;
                        text-align: center;
                        padding: 0 11%;
                        position: absolute;
                        top: 45%;
                        left: 0;
                        .text-title {
                            font-size: 30px;
                            line-height: 33px;
                            margin-bottom: 60px;
                            @include transition;
                        }
                        .text-detail {
                            opacity: 0;
                            font-size: 18px;
                            line-height: 28.8px;
                            @include transition;
                        }
                    }
                    @media only screen and (max-width: 1100px) {
                        .list-text {
                            .text-title {
                                font-size: 25px;
                                margin-bottom: 40px;
                            }
                            .text-detail {
                                font-size: 14px;
                                line-height: 25px;
                            }
                        }
                    }
                    @media only screen and (max-width: 900px) {
                        .list-text {
                            .text-title {
                                font-size: 20px;
                                margin-bottom: 20px;
                            }
                            .text-detail {
                                font-size: 12px;
                                line-height: 20px;
                            }
                        }
                    }
                    @media only screen and (max-width: 770px) {
                        .list-text {
                            .text-title {
                                font-size: 33px;
                                margin-bottom: 60px;
                            }
                            .text-detail {
                                font-size: 20px;
                                line-height: 30px;
                            }
                        }
                    }
                }
            }
            @media only screen and (min-width: 770px) {
                .content-lists {
                    display: flex;
                    .content-list {
                        float: left;
                        width: 25%;
                    }
                }
            }
        }
        @media only screen and (max-width: 1360px) {
            .management-team-content {
                margin: 22px 10px 0 10px;
            }
        }
    }
</style>
