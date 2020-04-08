<template>
    <div class="industry-park-wrapper">
        <div class="wrapper">
            <!-- industry-park-header产业园区头部start -->
            <div class="industry-park-header">
                <h3 class="course-header-title">产业园区介绍</h3>
            </div>
            <!-- industry-park-header产业园区头部end -->
            <!-- industry-park-content产业园区内容start -->
            <div class="industry-park-content" id="industry-box">
                <!-- content-list-detail产业园区介绍详情start- -->
                <div class="list-detail">
                    <img class="detail-img" src="@/assets/images/main-course/industry-park-list01.jpg" alt="请稍等......">
                    <div class="detail-introdution">
                        <h5 class="introdution-title">广东龙川产业园</h5>
                        <div class="introdution-text">
                            <p>
                                龙川产业园位于河源市龙川县东南部，区位优越、交通便利，总规划面积29平方公里，首期开发面积4平方公里,2008年被认定为省级工业园。当前，龙川产业园积极参与粤港澳大湾区新兴产业链分工，推进构建“总部+基地”“研发+生产”“创新+孵化”的产业合作发展新模式，谋划并确定了发展“现代建筑工业化”产业路径，提出了“以现代建筑工业化为引领，参与珠三角产业分工，全面促进电子电器、空气能、钢结构等多产业融合发展”的产业思路， 以“中国空气能产业基地”为依托，致力打造“国家级现代建筑工业化产业基地”。
                            </p>
                            <br>
                            <p>
                                今年上半年，龙川产业园实现工业总产值25.31亿元，同比增长9.6%；完成工业增加值5.76亿元，同比增长10.1%；完成税收1.14亿元，同比增长54.3%，固定资产投资完成21亿元，占年度任务45亿元的46.67%，各项数据已经位列河源市、广东省前列，在推动龙川县经济发展上，起到了重要作用。
                            </p>
                        </div>
                    </div>
                </div>
                <!-- content-list-detail产业园区介绍详情end- -->
                <!-- content-lists产业园区列表start- -->
                <div class="content-lists">
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide class="content-list">
                            <img class="swiper-img" src="@/assets/images/main-course/industry-park-list01.jpg" alt="请稍等......">
                            <h6 class="swiper-text">广东龙川产业园</h6>
                        </swiper-slide>
                        <swiper-slide class="content-list">
                            <img class="swiper-img" src="@/assets/images/main-course/industry-park-list02.jpg" alt="请稍等......">
                            <h6 class="swiper-text">广东五华产业园</h6>
                        </swiper-slide>
                        <swiper-slide class="content-list">
                            <img class="swiper-img" src="@/assets/images/main-course/industry-park-list03.jpg" alt="请稍等......">
                            <h6 class="swiper-text">广东平远产业园</h6>
                        </swiper-slide>
                        <swiper-slide class="content-list">
                            <img class="swiper-img" src="@/assets/images/main-course/industry-park-list04.jpg" alt="请稍等......">
                            <h6 class="swiper-text">广东连平产业园</h6>
                        </swiper-slide>
                        <swiper-slide class="content-list">
                            <img class="swiper-img" src="@/assets/images/main-course/industry-park-list05.jpg" alt="请稍等......">
                            <h6 class="swiper-text">广东江东新区产业园</h6>
                        </swiper-slide>
                        <swiper-slide class="content-list">
                            <img class="swiper-img" src="@/assets/images/main-course/industry-park-list06.jpg" alt="请稍等......">
                            <h6 class="swiper-text">广东翁源产业园</h6>
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <!-- content-lists产业园区列表end- -->
            </div>
            <!-- industry-park-content产业园区内容end -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseIndustryPark',
    data () {
        return {
            swiperOption: {
                slidesPerView: 6,
                spaceBetween: 20,
                loop: true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next'
            }
        }
    },
    computed: {
        swiper () {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted () {
        this.industryListChange()
    },
    methods: {
        industryListChange () {
            var industryBox = document.getElementById('industry-box')
            var industryList = industryBox.getElementsByClassName('content-list')
            var listDetail = industryBox.getElementsByClassName('list-detail')[0]
            var detailImg = listDetail.getElementsByClassName('detail-img')[0]
            var detailTitle = listDetail.getElementsByClassName('introdution-title')[0]
            var detailText = listDetail.getElementsByClassName('introdution-text')[0]
            for (var i = 0; i < industryList.length; i++) {
                (function (num) {
                    var listImg = industryList[num].getElementsByClassName('swiper-img')[0]
                    var listText = industryList[num].getElementsByClassName('swiper-text')[0]
                    industryList[num].onclick = () => {
                        if (listText.innerHTML === '广东龙川产业园') {
                            detailImg.src = listImg.src
                            detailTitle.innerHTML = listText.innerHTML
                            detailText.innerHTML = '<p>龙川产业园位于河源市龙川县东南部，区位优越、交通便利，总规划面积29平方公里，首期开发面积4平方公里,2008年被认定为省级工业园。当前，龙川产业园积极参与粤港澳大湾区新兴产业链分工，推进构建“总部+基地”“研发+生产”“创新+孵化”的产业合作发展新模式，谋划并确定了发展“现代建筑工业化”产业路径，提出了“以现代建筑工业化为引领，参与珠三角产业分工，全面促进电子电器、空气能、钢结构等多产业融合发展”的产业思路， 以“中国空气能产业基地”为依托，致力打造“国家级现代建筑工业化产业基地”。</p><br><p>今年上半年，龙川产业园实现工业总产值25.31亿元，同比增长9.6%；完成工业增加值5.76亿元，同比增长10.1%；完成税收1.14亿元，同比增长54.3%，固定资产投资完成21亿元，占年度任务45亿元的46.67%，各项数据已经位列河源市、广东省前列，在推动龙川县经济发展上，起到了重要作用。</p>'
                        } else if (listText.innerHTML === '广东五华产业园') {
                            detailImg.src = listImg.src
                            detailTitle.innerHTML = listText.innerHTML
                            detailText.innerHTML = '<p>广州番禺（五华）产业转移工业园是五华县按照“工业新城、长乐之乡”发展定位，依托原省级经济开发区，与番禺区合作共建，高起点规划、高标准建设的工业园区。园区位于县城西边，总规划面积20平方公里，首期计划开发12.2平方公里，目前已开发至6平方公里。园区道路、供水、供电、排污、绿化和亮化等基础设施正加快完善，承载力不断提升，初步形成了五金机电、食品饮料、医药制造、再生资源利用等产业。园区龙头企业有广东辉胜达电器股份有限公司、广东康奇力药业有限公司、广东创盛工贸有限公司等龙头企业入驻。</p><br><p>园区将围绕“至2016年三年内进园企业达到100家以上，年产值达到50亿元以上，年创税3亿元以上”的目标，抢抓粤东西北和原中央苏区“两大振兴”政策，以及“梅兴华丰产业集聚带”建设的机遇，利用省级产业转移园的扶持政策和资金，借力广州对口帮扶，进一步加大园区建设和招商引资力度，致力将产业转移园打造成为辐射带动全县经济发展的增长值。</p><br><p>今明两年重点招商行业：五金机电、医药制造、食品饮料、塑料再生资源制造。</p>'
                        } else if (listText.innerHTML === '广东平远产业园') {
                            detailImg.src = listImg.src
                            detailTitle.innerHTML = listText.innerHTML
                            detailText.innerHTML = '<p>平远正在加快推动“四高一铁”建设，其中济广高速平远段预计2015年建成通车；梅平高速、鹰梅铁路计划今年动工建设；平武高速、平漳高速已经列入国家规划并开展前期工作。届时，平远3小时可到海西区和珠三角，2小时可到汕头港，直接融入珠三角、潮汕揭、厦漳泉、赣南“3小时经济圈”。园区将成为粤闽赣三省的优势经济集中区。</p><br><p>平远稀土加工产业优势明显，稀土资源丰富、产值较高，而周边仅有寻乌石牌工业园将稀土作为主导产业，因此，平远的稀土产业竞争压力小，优势大。而由稀土带动的汽车电子、金属加工及机械制造等将成为产业转移重点引导产业。</p><br><p>园区2011年入选第二批“广东省小企业创业基地”，2013年4月被确认为省市共建战略性新兴产业（梅州·稀土新材料）基地。2014年4月，平远县与工信部中国电子信息产业发展研究院签订了共建国家稀土新材料产业示范基地战略合作框架协议，共同推进中国南方离子型稀土新材料产业基地建设。园区享受省产业转移和广州对口帮扶相关政策，已形成了以稀土新材料、机械制造、家具制造为主导的产业集群。</p>'
                        } else if (listText.innerHTML === '广东连平产业园') {
                            detailImg.src = listImg.src
                            detailTitle.innerHTML = listText.innerHTML
                            detailText.innerHTML = '<p>生态工业园距忠信镇仅2公里，粤赣高速忠信互通路口从园区东面经过，即将开通的汕昆高速直接通过园区，省道忠定线横穿东西，县道船洋线纵贯南北，距京九铁路火车站不到30公里，离深圳盐田港、广州黄埔港均200公里左右，到河源海关60公里，货物进出口通关十分方便快捷，园区已融入珠三角两小时经济圈，具有明显的区位优势和交通优势。</p><br><p>目前园区的供水、供电、路网、排污及绿化、美化、亮化等市政基础设施建设已基本完善。园区有11万伏和22万伏变电站两座，有可日供2万吨自来水的供水系统。园区内设有集生活、娱乐、商务、物流、金融、技术创新于一体化的服务区，园区内还设有银行、医院、中小学校各1间，同时还拥有日处理1万吨污水处理厂1间。目前园区建有各种标准厂房30多栋，总建筑面积20多万平方米，可供入园企业购买、租赁，园区周边有大量连片丘陵山坡地可供开发利用，现有近1500亩可供开发的储备用地，具有非常广阔的发展空间和潜力。</p><br><p>园区2011年入选第二批“广东省小企业创业基地”，2013年4月被确认为省市共建战略性新兴产业（梅州·稀土新材料）基地。2014年4月，平远县与工信部中国电子信息产业发展研究院签订了共建国家稀土新材料产业示范基地战略合作框架协议，共同推进中国南方离子型稀土新材料产业基地建设。园区享受省产业转移和广州对口帮扶相关政策，已形成了以稀土新材料、机械制造、家具制造为主导的产业集群。</p>'
                        } else if (listText.innerHTML === '广东江东新区产业园') {
                            detailImg.src = listImg.src
                            detailTitle.innerHTML = listText.innerHTML
                            detailText.innerHTML = '<p>河源江东新区产业转移工业园位于古竹镇，由江东新区自建，规划面积2.11平方公里。目前已形成了以光学器件、电子信息、装备制造等为主的产业雏形。此外，园区的产业集聚区位于临江镇，与河源国家级高新区一江之隔，总体规划面积21平方公里，首期规划建设3.4平方公里。</p><br><p>产业集聚区重点发展市场潜力大、产业基础好、带动作用强、社会效益好的高端电子信息产业、新材料与高端装备制造、生物技术与生命健康“三大产业”，目前已与广东省半导体照明联合创新中心合作共建LED项目组团，与中国卫星导航定位协会、广东北斗平台科技有限公司合作共建北斗战略新兴产业项目组团，并拟与北京大学生命科学院开展合作发展生命健康项目组团，力争通过3至5年的努力，使新区产业体系更加完备、更加成型、更具优势，实现新区城市升级、产业升级、效益升级。</p>'
                        } else if (listText.innerHTML === '广东翁源产业园') {
                            detailImg.src = listImg.src
                            detailTitle.innerHTML = listText.innerHTML
                            detailText.innerHTML = '<p>园区以京珠和韶新高速翁城西部沿线为载体，构建翁西新型工业增长极。主要依托占地8000亩、被评为“省中小企业创业基地”和“省涂料行业创新示范工业园”的翁源制造业工业园和2000多亩的广业食品科技产业园、4200亩的电源基地、2200多亩的官渡综合物流基地，致力引进制造业、电源电子、食品科技、综合物流等产业。</p><br><p>园区路网、排水管网、供电设施、污水处理设施已经建成，设有仓储物流、污水处理厂、交易市场、行政办公楼、员工生活区等，生产与生活配套设施完善，为产业转移园区开发强力助推提供可靠的基础设施保障。</p><br><p>区严格按照规划功能分区和产业发展方向，坚持以“项目入园、产业集聚、环保先行、集约用地”的原则，突出发展主导产业，推动产业集聚和企业集散群。园区结合原有产业基础和长远发展布局，以制造业、电源电子、食品科技和综合物流作为未来发展主导产业，倾力承接珠三角工业产业转移。</p>'
                        }
                    }
                })(i)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "../course.sass";
    .industry-park-wrapper {
        padding: 60px 0;
        // 产业园区头部样式
        .industry-park-header {
            .course-header-title {
                color: #038300;
            }
        }
        // 产业园区内容样式
        .industry-park-content {
            // 产业园区介绍详情样式
            .list-detail {
                display: flex;
                margin-top: 60px;
                .detail-img {
                    float: left;
                    width: 33.82%; // 460px
                    height: 320px;
                }
                .detail-introdution {
                    float: right;
                    width: 64.7%; // 880px
                    color: #333;
                    margin-left: 20px;
                    .introdution-title {
                        font-size: 18px;
                        font-weight: bold;
                        line-height: 24px;
                    }
                    .introdution-text {
                        font-size: 14px;
                        text-indent: 2em;
                        line-height: 22px;
                        margin-top: 25px;
                    }
                }
            }
            // 产业园区列表样式
            .content-lists >>> .swiper-container {
                .swiper-wrapper {
                    padding-top: 30px;
                    .swiper-slide {
                        cursor: default;
                        position: relative;
                        transition: all .3s;
                        &:hover {
                            box-shadow: 0 0 20px #999;
                            .swiper-text {
                                color: #dc0000;
                            }
                        }
                        .swiper-img {
                            width: 210px;
                            height: 200px;
                            box-shadow: 0 0 12px #999;
                            transition: all .3s;
                        }
                        .swiper-text {
                            width: 100%;
                            height: 40px;
                            color: #333;
                            font-size: 18px;
                            text-align: center;
                            line-height: 40px;
                            background: rgba(255,255,255,0.6);
                            position: absolute;
                            bottom: 0;
                            @include transition;
                        }
                    }
                }
                .swiper-button-prev, .swiper-button-next {
                    width: 70px;
                    height: 70px;
                    margin-top: -20px;
                }
                .swiper-button-prev {
                    background: url("~images/main-course/industry-park-button-left.png") no-repeat;
                    left: 0;
                }
                .swiper-button-next {
                    background: url("~images/main-course/industry-park-button-right.png") no-repeat;
                    right: 0;
                }
            }
        }
    }
</style>
