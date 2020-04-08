<template>
    <div class="questionnaire-wrapper">
        <div class="wrapper">
            <div class="content-box">
                <!-- header 头部 start -->
                <div class="header">
                    <div class="header-left">
                        <h1 class="left-title">银行借贷融资</h1>
                        <p class="left-explanation">本词条由“科普中国”科学百科词条编写与应用工作项目审核。</p>
                    </div>
                    <div class="header-right">
                        <ul>
                            <li class="right-list" @click="collect" @mouseover="changeColor" @mouseout="recoverColor">
                                <a class="list-text">
                                    <span class="iconfont collect-icon" id="collectIcon"></span>
                                    <span id="collect">收藏</span>
                                </a>
                            </li>
                            <li class="right-list" @click="like">
                                <a class="list-text">
                                    <span class="iconfont like-icon" id="likeIcon"></span>
                                    <span id="like">点赞</span>
                                </a>
                            </li>
                            <li class="right-list share" @mouseover="showShareBox" @mouseout="hideShareBox">
                                <a class="list-text">
                                    <span class="iconfont share-icon" id="shareIcon"></span>
                                    <span>分享</span>
                                </a>
                                <div class="share-box" id="shareBox">
                                    <ul class="share-lists">
                                        <li class="share-list">
                                            <span class="iconfont qq-space"></span>
                                        </li>
                                        <li class="share-list">
                                            <span class="iconfont blog"></span>
                                        </li>
                                        <li class="share-list">
                                            <span class="iconfont wechat"></span>
                                        </li>
                                        <li class="share-list">
                                            <span class="iconfont qq"></span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- header 头部 end -->
                <!-- table 表格 start -->
                <div class="table">
                    <table>
                        <tr>
                            <td class="table-title">
                                <a @click="goNounInterpretation">名目诠释</a>
                            </td>
                            <td class="title-detail">名目，人或事物的称谓；诠释，对某事项的讲解、证明。用规范语言解说该名目的定义，阐述名目的外延和内涵，通过归纳演绎，准确地把名目研究的对象、问题概括出来。 名目是企业经营管理体系中的基本元素，也是业务链条中的必要节点，名目质量高低决定了系统整体水平。</td>
                        </tr>
                        <tr>
                            <td class="table-title">
                                <a @click="goQuestionAnswering">问题应答</a>
                            </td>
                            <td class="title-detail">考察对名目预期目标有重要影响的主导性、关键性因素，或重点控制的质量特性、关键技术或关键部位、研究手段，或是必须关注薄弱环节、容易出错的问题等，列出10个有代表性的问题。用户根据企业运行表现，对照该名目10个基本问题，在从ABCDE五项中选一项。答题者认真客观是系统真实性反映的关键。</td>
                        </tr>
                        <tr>
                            <td class="table-title">
                                <a @click="goSystemTesting">系统测试</a>
                            </td>
                            <td class="title-detail">将用户在移动（电脑）终端上输入的关于运行状态问卷答案传送至稷生在线测试与自动评分系统。该系统平台分别根据用户的信息、及对应的经济数据和环境数据对问卷答案进行统计分析，得到用户的企业运行指数及调整建议报告分别发送给移动（电脑）终端，并将企业指数及调整建议报告进行显示。</td>
                        </tr>
                        <tr>
                            <td class="table-title">
                                <a @click="goExpertAdvice">专家建议</a>
                            </td>
                            <td class="title-detail">专家根据系统测试结果，围绕系统测试中显现的痛点问题、及其在监测系统中对应的修正方案，进行分析研究，抓要点、抓根本，提出对策性、战略性、前瞻性的建议。它是一种沟通、交流形式，其目的是将调查结果、战略性的建议以及其他结果传递给用户管理人员或其他担任专门职务的人员。</td>
                        </tr>
                        <tr>
                            <td class="table-title">
                                <a @click="goFunctionAllocation">功能配置</a>
                            </td>
                            <td class="title-detail">开发之前需要对整个项目（名目）有通透的了解，调查分析广大用户需求及现有产品运行状态，吸收业内最新成果、对标同行最优企业，结合每个功能模块之间的关系、数据结构如何实现、以及所需要使用的技术储备是否完善等等问题，对名目项下目标功能系统进行创造性的概念性构建。。</td>
                        </tr>
                        <tr>
                            <td class="table-title">
                                <a @click="goProcessDesign">流程设计</a>
                            </td>
                            <td class="title-detail">基于统一的系统方法和描述语言，定义和优化业务步骤和环节及其每一个环节的负责人、时效以及预期效益，构造端到端的卓越业务流程。流程设计满足三项基本要求：透视现有流程质量；根据当前市场需求调整现有业务流程；尽可能低的成本，最快的速度支持业务活动。名目流程是企业流程结构中一部分。</td>
                        </tr>
                        <tr>
                            <td class="table-title">
                                <a @click="goCaseAnalysis">案例分析</a>
                            </td>
                            <td class="title-detail">稷生案例立足于考察大多数企业经常面临的经营决策困境，一些优秀企业改革发展面临的制度瓶颈，提供的决策情境更接近整体企业的真实环境。案例分析过程能够激发学习者相互之间的观点和思维方式的深度碰撞。稷生案例素材来自全球范围内有影响的正反两方面典型企业，具有时代性、普遍性、经典性。</td>
                        </tr>
                        <tr>
                            <td class="table-title">
                                <a @click="goKnowledgeMap">知识地图</a>
                            </td>
                            <td class="title-detail">以名目词条为知识原点编制知识地图，是一种知识（既包括显性的、可编码的知识，也包括隐性知识）导航系统，显示不同的知识存储之间重要的动态联系。知识地图是知识管理系统的输出模块，输出的内容包括知识的来源，整合后的知识内容，知识流和知识的汇聚。用户可以从中明确该名目的知识系统定位。</td>
                        </tr>
                    </table>
                </div>
                <!-- table 表格 end -->
                <!-- table detail 表格详情 start -->
                <div class="table-detail">
                    <!-- 标题释义 start -->
                    <div class="detail-title" id="nounInterpretation">
                        <h2 class="title-text">名目诠释</h2>
                        <p class="title-line">.</p>
                    </div>
                    <div class="detail-content">
                        <p class="content-para">银行借贷融资是指经济主体与商业银行之间的借贷行为，是指借款人根据自身资金需求，向贷款人提出贷款请求，
并提供贷款人要求的必要材料，贷款人根据借款人申请、相关资料及掌握的信息，对借款人是否符合国家法规和银行业金融机构授信
政策的资格要求与基本条件作出判断，并据以决定是否受理贷款申请。包括国内商业银行贷款和国际商业银行贷款。向金融机构申请
贷款是企业融资的主要方式。银行借贷分类：1、按期限分类:短期贷款,中期贷款,长期贷款；2、按有无担保品分类:信用贷款,担保贷
款；3、按资金来源分类:政策性银行贷款,商业银行贷款,保险公司贷款等。银行借贷内容和形式根据业务发展需要不断进行创新。</p>
                        <p class="content-para">银行借贷融资优势：在我国的资本市场发展不甚完善的情况下，银行信贷融资成了中小企业间接融资的主要渠道。银行贷款可分
为政策性银行贷款和商业银行贷款。中小企业利用银行信贷进行融资具有以下的优点：一是资金来源稳定。由于银行实力雄厚，资金
充足，满足了贷款的发放条件，银行一般总是能及时向企业提供资金；二是融资成本和融资费用相对较低。企业还款时只需按规定的
利率付息，除此之外，没有其他融资费用；三是获得资金比较迅速。当企业需要融资时，只需向银行提出申请，审批同意签订借贷合
同后，资金即可划到企业结算账户；四是贷款种类多，便于企业根据需要进行选择；五是弹性大、灵活性强。贷款在使用期内，如经
营状况发生变化，可与有关金融机构协商，增减借款数量或延长、缩短借款时间，便于企业降低融资成本。</p>
                        <p class="content-para">银行借贷融资劣势： 一是申请条件较为苛刻，要求企业符合国家的产业、行业政策，不属于高污染、高耗能；企业在各家商业银
行信誉状况良好，没有不良信用记录；有必要的组织机构、经营管理制度和财务管理制度，有固定依据和经营场所，合法经营，产品
有市场、有效益；具备履行合同、偿还债务的能力，还款意愿良好。二是使用限制多，银行贷款一般都规定了使用方式，企业必须严
格按照与银行签订的合同使用资金，一旦违约将会造成极其严重的后果，三是筹资数量有限，一般仅限于企业的抵押品价值，如果使
用股权融资或者民间融资可以获得更多地融资额。四是相对于民间融资等方式，银行借贷融资申请流程长，需要准备文件多。</p>
                        <p class="content-para">银行信贷是银行主要资产业务，也是银行主要的收入来源。银行贷款是企业获取资金的主要来源，特别是中小企业，把取得银行
间接融资及持续性取得银行信贷视为生存发展的重要保障。</p>
                    </div>
                     <!-- 标题释义 end -->
                     <!-- 重点问题 start -->
                    <div class="detail-title" id="questionAnswering">
                        <h2 class="title-text">问题应答</h2>
                        <p class="title-line">.</p>
                    </div>
                    <div class="detail-content">
                        <p class="content-para">1、企业是否使用过银行借贷融资。表现：使用次数较多，是企业的主要融资手段之一。经常使用银行借贷融
资的企业比较了解流程以及借款条件，但是借贷融资较多会加大企业的利息负担，并产生破产风险。</p>
                        <div class="content-answer">
                            <ul>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>A、很满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>B、满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>C、一般</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>D、不满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>E、极不满意</label>
                                </li>
                            </ul>
                        </div>
                        <p class="content-para">2、企业收入是否能保证按期还本付息。表现：收入较高。预期使用银行贷款融资能够达到偿还本息的要求，企业在银行借贷融资
中一旦无法按期偿还，将会对其信誉造成极大的影响，从而对以后的融资的可能性以及获取成本造成影响。</p>
                        <div class="content-answer">
                            <ul>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>A、很满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>B、满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>C、一般</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>D、不满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>E、极不满意</label>
                                </li>
                            </ul>
                        </div>
                        <p class="content-para">3、企业信誉状况是否满足银行借贷融资要求。表现：企业在各家商业银行信誉状况良好，没有不良信用记录且年检合格的营业执
照，持有人民银行核发并正常年检的贷款卡，满足申请企业银行贷款的要求。</p>
                        <div class="content-answer">
                            <ul>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>A、很满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>B、满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>C、一般</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>D、不满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>E、极不满意</label>
                                </li>
                            </ul>
                        </div>
                        <p class="content-para">4、企业现有债务情况是否已经到达债务融资极限。表现：企业现有债务较多，利息以及还款负担较重，但在企业的承受范围内。
银行借贷融资一旦超过企业的承受范围会产生破产的可能性。</p>
                        <div class="content-answer">
                            <ul>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>A、很满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>B、满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>C、一般</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>D、不满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>E、极不满意</label>
                                </li>
                            </ul>
                        </div>
                        <p class="content-para">5、企业适合抵押的固定资产状况。表现：企业固定资产不多，大部分已经进行抵押，剩余的可抵押资产不多。企业可以尝试使用
信用贷款和担保贷款的方式进行融资，抵押贷款只是所有银行借贷融资方式的一部分。</p>
                        <div class="content-answer">
                            <ul>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>A、很满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>B、满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>C、一般</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>D、不满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>E、极不满意</label>
                                </li>
                            </ul>
                        </div>
                        <p class="content-para">6、企业规模是否达到银行满意。企业现阶段属于中小企业，无法主板上市或者大规模的发行债券满足自身的资金需求，而且企业所处
行业正在快速发展，拥有项目较多但没有足够的人手和资金支持，需要尽快进行融资加速发展。</p>
                        <div class="content-answer">
                            <ul>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>A、很满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>B、满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>C、一般</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>D、不满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>E、极不满意</label>
                                </li>
                            </ul>
                        </div>
                        <p class="content-para">7、企业所处行业对获取银行贷款有无限制。表现：企业属于国家政策较为支持的新能源行业。一般银行倾向于向符合国家的产业、
行业政策，不属于高污染、高耗能的企业进行贷款，有些企业还可以获得国家补贴的优惠。</p>
                        <div class="content-answer">
                            <ul>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>A、很满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>B、满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>C、一般</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>D、不满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>E、极不满意</label>
                                </li>
                            </ul>
                        </div>
                        <p class="content-para">8、企业所需资金的时间及规模。表现:企业需要资金较多，周期较长，相对于民间融资等方式，银行借贷融资申请流程长，需要
准备文件多，但较为稳定，可以进行长期融资，而且融资量也远比大多融资方式要大。</p>
                        <div class="content-answer">
                            <ul>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>A、很满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>B、满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>C、一般</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>D、不满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>E、极不满意</label>
                                </li>
                            </ul>
                        </div>
                        <p class="content-para">9、企业对于银行的选择能力。企业能够根据不同的项目选择最适宜的银行进行融资。国家支持的项目可以得到政策性银行的帮助，
不同的贷款方式在不同的银行利息也略有差异，融资银行的选择也能够帮助公司节约部分成本。</p>
                        <div class="content-answer">
                            <ul>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>A、很满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>B、满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>C、一般</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>D、不满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>E、极不满意</label>
                                </li>
                            </ul>
                        </div>
                        <p class="content-para">10、企业制度以及营业状况。表现：有必要的组织机构、经营管理制度和财务管理制度，有固定依据和经营场所，合法经营。公
司的营业状况是到期还本付息的保障，只有营业稳定，管理不出问题的企业才更容易获得银行的贷款。</p>
                        <div class="content-answer">
                            <ul>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>A、很满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>B、满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>C、一般</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>D、不满意</label>
                                </li>
                                <li class="answer-text">
                                    <input type="radio" name="a1">
                                    <label>E、极不满意</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 重点问题 end -->
                    <!-- 测试评分 start  -->
                    <div class="detail-title" id="systemTesting">
                        <h2 class="title-text">系统测试</h2>
                        <p class="title-line">.</p>
                    </div>
                    <div class="detail-content">
                        <button class="content-button" @click="submit">提交</button>
                        <p class="content-tip" id="submitTip">提交测评成功</p>
                        <div class="content-score">
                            本次测评分值：<span class="number" id="number">60</span> 分
                        </div>
                        <div class="content-enter">
                            <router-link to="/main/monitor">
                                <a>进入企业管理服务平台</a>
                            </router-link>
                        </div>
                    </div>
                    <!-- 测试评分 end -->
                    <!-- 专家建议 start -->
                    <div class="detail-title" id="expertAdvice">
                        <h2 class="title-text">专家建议</h2>
                        <p class="title-line">.</p>
                    </div>
                    <div class="detail-content">
                        <img class="content-image" src="@/assets/images/main-monitor/questionnaire-table-detail-expert.jpg" alt="请稍等......">
                        <p class="content-para">一、企业还有部分固定资产可以进行抵押，也有收益可以保证还款付息，但借贷融资无法填补公司所有资金缺口。中小企业流
动资金（包括现金、库存、原材料等）占公司的资本总额比重大，一旦出现资金暂时不足或是断裂，整个企业就立刻面临严重风险，因此，需要大量的贷款来维持资金量通畅。也正是因
为中小企业存在经营风险，筹资能力差，往往导致商业银行不愿意贷款给他们。</p>
                        <p class="content-para">二、尽管各大商业银行积极响应,及时调整贷款结构,创新信贷方式,推出适合小企业的贷款品种,加大中小企业贷款力度,中小企
业获得银行贷款的难度依然很大。因此，中小企业急需寻求新的融资渠道，因为公司有较高的盈利且所处行业前景较好，可以考虑使用股权融资等方式作为银行借贷融资的补充。</p>
                        <p class="content-para">三、随着经济持续快速增长,在各类市场主体资金需求旺盛,中小企业贷款困难的同时,民间资金却日渐充裕,民间借贷市场日趋活
跃,融资规模有逐年扩大趋势。民间借贷成为中小企业发展过程中的更优选择。中小企业是与所处行业的大企业相比人员规模、资产规模与经营规模都比较小的经济单位。此类企业通常可
由单个人或少数人提供资金组成，其雇用人数与营业额皆不大，因此在经营上多半是由业主直接管理，受外界干涉较少，使用民间借贷也更为方便。</p>
                        <p class="content-para">四、企业寻求银行贷款的前提是这个企业本身是合法存在的，且经营状况良好，信用良好。但还须因此注意的是：国家在中小企
业贷款方面，实质是做出了行业限制的，可以说简单经营商业贸易的公司很难获得贷款。</p>
                        <p class="content-para">五、针对合法的中小企业短期迫切的资金需求选择合法的民间借贷公司融资，而用于企业经营的中长期融资则选择商业银行。民
间借贷公司自身若存在问题，则对投资人业存在很大的风险。另外，由于没有明确的强有力的法律约束，民间借贷双方没有很明显的约束性规定，很多借款行为中的细节都是可以双方约定
达成，这一方面，即符合了当下追求的灵活性，也为中小型企业自身提供是一个可以为自身谋求更大好处的机会。建议将这些问题导入稷生管理服务中心之企划谋策平台，有关专家将与集
团公司沟通，深入调研，作出企业集团上市方案。</p>
                        <p class="content-para">六、从调查中发现，公司存在固定资产权属不清、财务管理不够规范等问题，将影响公司融资效率，请及时纠正。</p>
                    </div>
                    <!-- 专家建议 end -->
                    <!-- 功能设计 start -->
                    <div class="detail-title" id="functionAllocation">
                        <h2 class="title-text">功能配置</h2>
                        <p class="title-line">.</p>
                    </div>
                    <div class="detail-content">
                        <p class="content-para para-title">银行借贷融资</p>
                        <p class="content-para">一、公司自查银行借贷条件。国家规定企业申请银行贷款的条件：符合国家的产业、行业政策，不属于高污染、高耗能的企业；
企业在各家商业银行信誉状况良好，没有不良信用记录；具有工商行政管理部门核准登记，且年检合格的营业执照，持有人民银行核
发并正常年检的贷款卡；有必要的组织机构、经营管理制度和财务管理制度，有固定依据和经营场所，合法经营，产品有市场、有效
益；具备履行合同、偿还债务的能力，还款意愿良好，无不良信用记录，信贷资产风险分类为正常类或非财务因素影响的关注类；企
业经营者或实际控制人从业经历在 3 年以上，素质良好、无不良个人信用记录；企业经营情况稳定，成立年限原则上在 2 年（含）以
上，至少有一个及以上会计年度财务报告，且连续 2 年销售收入增长、总利润为正值；符合建立与小企业业务相关的行业信贷政策；
遵守国家金融法规政策及银行有关规定；在申请行开立基本结算账户或一般结算账户。</p>
                        <p class="content-para">二、公司准备借贷所需文件。1 借款申请书；2 借款人营业执照复印件；3 借款人组织机构代码证复印件；4 借款人税务登记
证复印件（国税、地税）；5 借款人特殊行业经营许可证复印件；6 企业资质等级证书复印件；7 借款人开户许可证复印件；8 贷 款
卡复印件及年检证明；9 借款人公司章程；10 借款人验资报告；11 法人、财务主管签字样式及印鉴；12 法定代表人简历及身份
证复印件；13 主要负责人、财务负责人的简历及身份证明；14 企业主管单位及其附属机构或子公司情况说明；15 经 审 计 的 近
三年财务报告及近期财务报表；16 最近月份的详细财务信息。</p>
                        <p class="content-para">三、公司各部门协作融资业务。首先由企业财务部门和项目执行部门共同确定融资需求。财务部联系融资机构。风险管理提出风
险控制意见、法务部门出具法律意见书。财务部准备融资材料上部门项目会审会、总经办会。按照银行要求准备好申请材料。企业各
部门配合调查人员确定贷款人的信用等级。上公司董事会。公司和担保人签订担保合同，和银行签订贷款合同，还有财产抵押合同。
贷款到期后财务部按照合同规定按时足额还款。</p>
                        <p class="content-para">四、按照公司章程规定在授权范围内由公司财务部具体实施全公司的融资工作，财务部牵头相关部门配合银行完成融资业务。</p>
                    </div>
                    <!-- 功能设计 end -->
                    <!-- 业务流程 start -->
                    <div class="detail-title" id="processDesign">
                        <h2 class="title-text">流程设计</h2>
                        <p class="title-line">.</p>
                    </div>
                    <div class="detail-content">
                        <p class="content-para para-title">企业银行借贷流程</p>
                        <p class="content-para">一、调查阶段：企业需要调查所在城市有哪些银行和小额贷款机构经营本企业需要的贷款业务，看看是否有熟悉的银行或小额贷
款机构，看看自身的条件是否满足，哪一种贷款符合自己企业，具体的贷款额度、期限、要求以及申请资料准备等。</p>
                        <p class="content-para">二、准备阶段：经过调查，对于商业银行贷款产品有了一定了解，确定申请贷款的银行以及相关产品，按照该贷款产品的要求准
备好申请材料。如果申请的担保或者抵押类贷款，申请人需要办理相应的抵押财产证明或者准备担保人的相关材料。</p>
                        <p class="content-para">三、申请阶段：资料准备好后向银行提出贷款申请。企业按照银行的要求填写申请表单、提交申请资料、准备贷款卡等各项手续。
申请材料包括：1.基本资料。企业法人营业执照（已年检）、企业法人资格认定书、企业组织机构代码证书、税务登记证、基本户开
户行的开户许可证、法人身份证（以上均为正本复印件）、法人简历；企业连续三年的财务审计报告，最近一期财务报表（均需加盖
财务印鉴）；企业贷款卡（复印件）；企业在各商业银行的业务合作及企业内部融资状况；公司章程、企业董事会人员名单；企业章
程、法人和被授权人签字及授权书；企业概况、有关背景资料等基础信息资料。2.辅助资料。企业自身经营规模、财务状况分析及趋
势预测；产品情况、市场情况、企业发展规模情况、同行业所处水平；合作需求、计划及建议。3.业务操作必须资料。授信申请、企
业董事会决议（如公司章程要求）；企业具体贷款用途及资金使用方向（用款计划、用款总额度）；还款来源分析（计划和措施），
并且就还款的资金安排做出每月的现金流量分析；抵押情况、其他相关法律性文件、函电等。此外，如果需担保，担保公司也需要提
供上述材料。 银行对企业提交的资料进行审核，确定企业可以申请的是信用贷款还是担保贷款，并通知申请企业。</p>
                        <p class="content-para">四、信用评估：调查人员根据贷款人的领导人素质、经济实力、资金结构、履约情况、经营效益和企业发展前景等因素确定贷款
人的信用等级。这种评估由银行信贷具体负责人或者有关部门批准的评估机构进行。</p>
                        <p class="content-para">五、办理阶段：申请人已经完成了贷款的申请。和担保人签订担保合同，和银行签订贷款合同，财产抵押合同，贷款用途证明等
合约。银行落实贷款条件后，按规定程序办理放款手续，双方按照合同规定核实贷款，将贷款资金划入借款人在银行开立的账户。</p>
                        <p class="content-para">六、还款阶段：这个阶段就是申请人需要按照合同规定按时按量的还款。无论是企业还是个人，都需要有按时还款的意识，因为
违约将会对自己的信用记录产生不良的影响，对以后在银行的相关金融业务有负面影响，得不偿失。</p>
                        <p class="content-para">上图：企业申请商业银行信贷资金业务流程；下图：商业银行办理企业信贷资金业务流程。</p>
                    </div>
                    <!-- 业务流程 end -->
                    <!-- 案例分析 start -->
                    <div class="detail-title" id="caseAnalysis">
                        <h2 class="title-text">案例分析</h2>
                        <p class="title-line">.</p>
                    </div>
                    <div class="detail-content">
                        <p class="content-para para-title">南宁磐石建筑公司银行借贷融资</p>
                        <p class="content-para">一、申办贷款证和贷款卡</p>
                        <p class="content-para">贷款卡是企业办理贷款业务的基本条件，因此在申办任何贷款业务之前，企业必须首先到当地中国人民银行申请办理贷款卡。凡经
工商行政管理机关（或主管机关）核准登记的各类企事业单位需向国内金融机构办理贷款及提供经济担保的，均须向中国人民银行申领贷款证和贷款卡，并将发生的贷款业务在贷款证和贷款
卡上进行记录。人民银行将在五个工作日内发给申请人贷款证和贷款卡。公司除了上述企业需提供的企业营业执照、税务登记证等还需提供开户许可证，拟定贷款申请书。本次申请的为项目
贷款，所以公司还需提供国有土地使用证、建设用地规划许可证、建设工程规划许可证、建筑工程施工许可证。</p>
                        <p class="content-para">提出借款申请。企业向银行借款时，首先应向主办银行或其经办机构直接提出申请。申请时，企业应提交包括借款金额、借款用途、
偿还能力及还款方式等内容的《借款申请书》，并提交营业执照复印件、税务登记证复印件、贷款卡复印件、财务报表、项目贷款的还需提供可行性报告等。首先，公司前面还需提供营业执
照、税务登记、贷款卡等，提供授权委托书。 然后，基于公司申请的是项目贷款，所以需提供项目开发可行性报告。</p>
                        <p class="content-para">资金用途及还款来源说明：此次借款主要用于南宁别墅项目建设。还款主要来源为商品房款销售收入。项目预计销售收入说明：住
宅总建筑面积：平方米，销售均价56200元/㎡销售收入5亿元。</p>
                        <p class="content-para">二、提供公司基本情况</p>
                        <p class="content-para">（一）南宁磐石建筑有限责任公司于2010年5月10日成立，注册地址为号，注册号为430100000，法人代表项智勇，公司类型为有限
责任公司，经营范围为房地产开发,经营注册资金为人民币5000万元，占出资比例的50%；自然人出资3000万元,出资方式为货币。开发资质为3级。</p>
                        <p class="content-para">（二）夕苑总公司基本情况公司高级管理人员基本情况</p>
                        <p class="content-para">夕苑地产集团有限公司是一家以房地产开发为主体，集工程建筑、装饰设计、商业运营及物业管理等为一体的综合性、跨区域的大型
民营企业。公司总部位于南宁市金秀中路1路，净资产84014000元，拥有房地产开发及建筑总承包资质。公司旗下企业有房地产开发有限公司、海南省工程有限公司。集团共有员工5000余名，
中级专业技术职称人数占公司总人数的20%以上，其中有高级专业职称300多人，集团公司董事长1名、公司主要领导平均学历在本科以上，全部拥有中级以上专业技术职称。法人代表项智勇，
男、大学本科文化、工程师、经济师、1970年出生，1990年参加工作，就职于无不良信用记录。项目开发进度和需求：“桂美别墅”是由我有限公司投资开发，是南宁市政府重点招商引资项目，
项目总用地面积86497平方米，总建筑面积35万㎡,规划为中高档别墅，全部为商业地产产权。前期项目总投资4亿元（原可研报告总投为3亿元，由于建设工程延迟一年多，成本增加约20%，土
地款6000万元,2014年2月底已经投入资金2.3亿元，其中公司资本金1.8亿元、工程已经建设到整体73%。该项目预计总收入7.8亿元。四证情况，目前已经取得所有证书。预计工程在2016年2月
建设到达100%，2016年11月开始销售。施工单位为南宁省工程有限公司。</p>
                        <p class="content-para">（三）借款用途：为继续扩大我公司的区位优势，我公司决定开展“桂美别墅”三期工程、现尚差资金缺口5000万元，需要贷款5000万元，
借款期限3年（2016年4月30日至2018年4月30日）。</p>
                        <p class="content-para">（四）保障措施</p>
                        <p class="content-para">为了保证还款，公司承诺用位于南宁市蓝天路土地［桂国用（2009）第0203622号］及“名门商业广场”一、二期项目、桂美别墅预售商
品房作为资金使用的安全保证，其中房产面积55000平方（证号34312）、土地面积100000平方（证号66241461）；抵押物评估价值为6000多万元，评估依据为：2014年11月20日南宁市房地产
评估有限责任公司的预评估报告。我公司名门商业广场的每月租金及月营业利润额为300万元，该收入足以覆盖资金使用的每月利息成本。项目总投资2.5亿元，公司资本金1.8亿元和股东追加投
入1.3亿元，资金缺口5000万元。</p>
                        <p class="content-para">还款来源：我公司目前所开发的两个项目正在进行，资金回收周期为20个月，况且桂美别墅二期、三期尚存大量土地（约198000平方米），
加上桂美别墅二期已被政府规划为商业中心，其地价升值、房价大幅上涨，未来两年内，我公司所有土地开发完毕，参照目前周边交易价格体系，预计可获利7000万至8000万元。且名门商业广场
项目，又可获利约2.1亿元，我公司相信，3年内无压力偿还5000万元贷款。</p>
                    </div>
                    <!-- 案例分析 end -->
                    <!-- 知识地图 start -->
                    <div class="detail-title" id="knowledgeMap">
                        <h2 class="title-text">知识地图</h2>
                        <p class="title-line">.</p>
                    </div>
                    <div class="detail-content">
                        <p class="content-para">一、企业还有部分固定资产可以进行抵押，也有收益可以保证还款付息，但借贷融资无法填补公司所有资金缺口。中小企业流
动资金（包括现金、库存、原材料等）占公司的资本总额比重大，一旦出现资金暂时不足或是断裂，整个企业就立刻面临严重风险，因此，需要大量的贷款来维持资金量通畅。也正是因
为中小企业存在经营风险，筹资能力差，往往导致商业银行不愿意贷款给他们。</p>
                        <p class="content-para">二、尽管各大商业银行积极响应,及时调整贷款结构,创新信贷方式,推出适合小企业的贷款品种,加大中小企业贷款力度,中小企
业获得银行贷款的难度依然很大。因此，中小企业急需寻求新的融资渠道，因为公司有较高的盈利且所处行业前景较好，可以考虑使用股权融资等方式作为银行借贷融资的补充。</p>
                        <p class="content-para">三、随着经济持续快速增长,在各类市场主体资金需求旺盛,中小企业贷款困难的同时,民间资金却日渐充裕,民间借贷市场日趋活
跃,融资规模有逐年扩大趋势。民间借贷成为中小企业发展过程中的更优选择。中小企业是与所处行业的大企业相比人员规模、资产规模与经营规模都比较小的经济单位。此类企业通常可
由单个人或少数人提供资金组成，其雇用人数与营业额皆不大，因此在经营上多半是由业主直接管理，受外界干涉较少，使用民间借贷也更为方便。</p>
                    </div>
                    <!-- 知识地图 end -->
                </div>
                <!-- table detail 表格详情 end -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MonitorQuestionnaire',
    methods: {
        /**
         * 头部右侧收藏与点赞
         */
        collect () {
            var collectIcon = document.getElementById('collectIcon')
            var collect = document.getElementById('collect')
            if (collect.innerHTML === '已收藏') {
                collectIcon.style.color = '#888'
                collect.innerHTML = '收藏'
            } else {
                collectIcon.style.color = '#ebb111'
                collect.innerHTML = '已收藏'
            }
        },
        like () {
            var likeIcon = document.getElementById('likeIcon')
            var like = document.getElementById('like')
            likeIcon.style.color = '#ebb111'
            like.innerHTML = '已点赞'
        },
        /**
         * 头部右侧收藏hover效果(为了实现取消收藏后恢复原来的hover效果)
         */
        changeColor () {
            var collectIcon = document.getElementById('collectIcon')
            var collect = document.getElementById('collect')
            if (collect.innerHTML === '收藏') {
                collectIcon.style.color = '#ebb111'
            }
        },
        recoverColor () {
            var collectIcon = document.getElementById('collectIcon')
            var collect = document.getElementById('collect')
            if (collect.innerHTML === '收藏') {
                collectIcon.style.color = '#888'
            }
        },
        /**
        * 头部右侧分享盒子显示与隐藏
        */
        showShareBox () {
            var shareIcon = document.getElementById('shareIcon')
            var shareBox = document.getElementById('shareBox')
            shareIcon.style.color = '#ebb111'
            shareBox.style.display = 'block'
        },
        hideShareBox () {
            var shareIcon = document.getElementById('shareIcon')
            var shareBox = document.getElementById('shareBox')
            shareIcon.style.color = '#888'
            shareBox.style.display = 'none'
        },
        /**
        * 测试评分提交
        */
        submit () {
            var submitTip = document.getElementById('submitTip')
            var number = document.getElementById('number')
            submitTip.style.display = 'block'
            number.style.display = 'inline-block'
        },
        /**
         * 目录定位锚点
         */
        goNounInterpretation () {
            document.getElementById('nounInterpretation').scrollIntoView()
        },
        goQuestionAnswering () {
            document.getElementById('questionAnswering').scrollIntoView()
        },
        goSystemTesting () {
            document.getElementById('systemTesting').scrollIntoView()
        },
        goExpertAdvice () {
            document.getElementById('expertAdvice').scrollIntoView()
        },
        goFunctionAllocation () {
            document.getElementById('functionAllocation').scrollIntoView()
        },
        goProcessDesign () {
            document.getElementById('processDesign').scrollIntoView()
        },
        goCaseAnalysis () {
            document.getElementById('caseAnalysis').scrollIntoView()
        },
        goKnowledgeMap () {
            document.getElementById('knowledgeMap').scrollIntoView()
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~styles/variables.sass";
    @import "./monitor-questionnaire.sass";
</style>
