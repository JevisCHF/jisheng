<template>
    <div class="puzzle">
        <div class="container">
            <!-- <a href="#">
                <img class="puzzle-img" src="@/assets/images/main-monitor/swiper-puzzle00.gif" alt="请稍等......" ismap="ismap">
            </a> -->
            <img class="puzzle-img" :src="puzzleImg" alt="请稍等......" usemap="#puzzlemap">
            <map name="puzzlemap" class="puzzle-plate">
                <!-- 第一大板块 start -->
                <!-- first-one -->
                <area shape="rect" coords="0,0,80,98" alt="请稍等......" @mouseover="puzzleFirstOneActive" @mouseout="puzzleStatic" @click="showFirstOneMonitorPuzzleDialog">
                <area shape="rect" coords="80,0,120,65" alt="请稍等......" @mouseover="puzzleFirstOneActive" @mouseout="puzzleStatic" @click="showFirstOneMonitorPuzzleDialog">
                <area shape="rect" coords="120,0,165,50" alt="请稍等......" @mouseover="puzzleFirstOneActive" @mouseout="puzzleStatic" @click="showFirstOneMonitorPuzzleDialog">
                <!-- first-two -->
                <area shape="rect" coords="165,0,210,50" alt="请稍等......" @mouseover="puzzleFirstTwoActive" @mouseout="puzzleStatic" @click="showFirstTwoMonitorPuzzleDialog">
                <area shape="rect" coords="210,0,250,65" alt="请稍等......" @mouseover="puzzleFirstTwoActive" @mouseout="puzzleStatic" @click="showFirstTwoMonitorPuzzleDialog">
                <area shape="rect" coords="250,0,332,65" alt="请稍等......" @mouseover="puzzleFirstTwoActive" @mouseout="puzzleStatic" @click="showFirstTwoMonitorPuzzleDialog">
                <area shape="rect" coords="250,65,310,98" alt="请稍等......" @mouseover="puzzleFirstTwoActive" @mouseout="puzzleStatic" @click="showFirstTwoMonitorPuzzleDialog">
                <!-- first-three -->
                <area shape="rect" coords="0,98,80,198" alt="请稍等......" @mouseover="puzzleFirstThreeActive" @mouseout="puzzleStatic" @click="showFirstThreeMonitorPuzzleDialog">
                <area shape="rect" coords="80,130,120,198" alt="请稍等......" @mouseover="puzzleFirstThreeActive" @mouseout="puzzleStatic" @click="showFirstThreeMonitorPuzzleDialog">
                <area shape="rect" coords="120,145,165,175" alt="请稍等......" @mouseover="puzzleFirstThreeActive" @mouseout="puzzleStatic" @click="showFirstThreeMonitorPuzzleDialog">
                <area shape="rect" coords="120,175,140,198" alt="请稍等......" @mouseover="puzzleFirstThreeActive" @mouseout="puzzleStatic" @click="showFirstThreeMonitorPuzzleDialog">
                <!-- first-four -->
                <area shape="rect" coords="165,145,210,175" alt="请稍等......" @mouseover="puzzleFirstFourActive" @mouseout="puzzleStatic" @click="showFirstFourMonitorPuzzleDialog">
                <area shape="rect" coords="190,175,210,198" alt="请稍等......" @mouseover="puzzleFirstFourActive" @mouseout="puzzleStatic" @click="showFirstFourMonitorPuzzleDialog">
                <area shape="rect" coords="210,130,250,198" alt="请稍等......" @mouseover="puzzleFirstFourActive" @mouseout="puzzleStatic" @click="showFirstFourMonitorPuzzleDialog">
                <area shape="rect" coords="250,98,310,117" alt="请稍等......" @mouseover="puzzleFirstFourActive" @mouseout="puzzleStatic" @click="showFirstFourMonitorPuzzleDialog">
                <area shape="rect" coords="250,117,332,175" alt="请稍等......" @mouseover="puzzleFirstFourActive" @mouseout="puzzleStatic" @click="showFirstFourMonitorPuzzleDialog">
                <area shape="rect" coords="250,175,310,198" alt="请稍等......" @mouseover="puzzleFirstFourActive" @mouseout="puzzleStatic" @click="showFirstFourMonitorPuzzleDialog">
                <!-- center-one -->
                <area shape="rect" coords="80,65,120,130" alt="请稍等......" @mouseover="puzzleCenterOneActive" @mouseout="puzzleStatic" @click="showCenterOneMonitorPuzzleDialog">
                <area shape="rect" coords="120,50,210,145" alt="请稍等......" @mouseover="puzzleCenterOneActive" @mouseout="puzzleStatic" @click="showCenterOneMonitorPuzzleDialog">
                <area shape="rect" coords="210,65,250,130" alt="请稍等......" @mouseover="puzzleCenterOneActive" @mouseout="puzzleStatic" @click="showCenterOneMonitorPuzzleDialog">
                <!-- 第一大板块 end -->
                <!-- 第二大板块 start -->
                <!-- second-one -->
                <area shape="rect" coords="340,0,422,65" alt="请稍等......" @mouseover="puzzleSecondOneActive" @mouseout="puzzleStatic" @click="showSecondOneMonitorPuzzleDialog">
                <area shape="rect" coords="360,65,422,98" alt="请稍等......" @mouseover="puzzleSecondOneActive" @mouseout="puzzleStatic" @click="showSecondOneMonitorPuzzleDialog">
                <area shape="rect" coords="422,0,460,65" alt="请稍等......" @mouseover="puzzleSecondOneActive" @mouseout="puzzleStatic" @click="showSecondOneMonitorPuzzleDialog">
                <area shape="rect" coords="460,0,507,50" alt="请稍等......" @mouseover="puzzleSecondOneActive" @mouseout="puzzleStatic" @click="showSecondOneMonitorPuzzleDialog">
                <!-- second-two -->
                <area shape="rect" coords="507,0,552,50" alt="请稍等......" @mouseover="puzzleSecondTwoActive" @mouseout="puzzleStatic" @click="showSecondTwoMonitorPuzzleDialog">
                <area shape="rect" coords="552,0,592,65" alt="请稍等......" @mouseover="puzzleSecondTwoActive" @mouseout="puzzleStatic" @click="showSecondTwoMonitorPuzzleDialog">
                <area shape="rect" coords="592,0,675,65" alt="请稍等......" @mouseover="puzzleSecondTwoActive" @mouseout="puzzleStatic" @click="showSecondTwoMonitorPuzzleDialog">
                <area shape="rect" coords="592,65,653,98" alt="请稍等......" @mouseover="puzzleSecondTwoActive" @mouseout="puzzleStatic" @click="showSecondTwoMonitorPuzzleDialog">
                <!-- second-three -->
                <area shape="rect" coords="360,98,422,117" alt="请稍等......" @mouseover="puzzleSecondThreeActive" @mouseout="puzzleStatic" @click="showSecondThreeMonitorPuzzleDialog">
                <area shape="rect" coords="340,117,422,175" alt="请稍等......" @mouseover="puzzleSecondThreeActive" @mouseout="puzzleStatic" @click="showSecondThreeMonitorPuzzleDialog">
                <area shape="rect" coords="360,175,422,198" alt="请稍等......" @mouseover="puzzleSecondThreeActive" @mouseout="puzzleStatic" @click="showSecondThreeMonitorPuzzleDialog">
                <area shape="rect" coords="422,130,460,198" alt="请稍等......" @mouseover="puzzleSecondThreeActive" @mouseout="puzzleStatic" @click="showSecondThreeMonitorPuzzleDialog">
                <area shape="rect" coords="460,145,507,175" alt="请稍等......" @mouseover="puzzleSecondThreeActive" @mouseout="puzzleStatic" @click="showSecondThreeMonitorPuzzleDialog">
                <area shape="rect" coords="460,175,482,198" alt="请稍等......" @mouseover="puzzleSecondThreeActive" @mouseout="puzzleStatic" @click="showSecondThreeMonitorPuzzleDialog">
                <!-- second-four -->
                <area shape="rect" coords="507,145,552,175" alt="请稍等......" @mouseover="puzzleSecondFourActive" @mouseout="puzzleStatic" @click="showSecondFourMonitorPuzzleDialog">
                <area shape="rect" coords="533,175,552,198" alt="请稍等......" @mouseover="puzzleSecondFourActive" @mouseout="puzzleStatic" @click="showSecondFourMonitorPuzzleDialog">
                <area shape="rect" coords="552,130,592,198" alt="请稍等......" @mouseover="puzzleSecondFourActive" @mouseout="puzzleStatic" @click="showSecondFourMonitorPuzzleDialog">
                <area shape="rect" coords="592,98,653,117" alt="请稍等......" @mouseover="puzzleSecondFourActive" @mouseout="puzzleStatic" @click="showSecondFourMonitorPuzzleDialog">
                <area shape="rect" coords="592,117,675,175" alt="请稍等......" @mouseover="puzzleSecondFourActive" @mouseout="puzzleStatic" @click="showSecondFourMonitorPuzzleDialog">
                <area shape="rect" coords="592,175,653,198" alt="请稍等......" @mouseover="puzzleSecondFourActive" @mouseout="puzzleStatic" @click="showSecondFourMonitorPuzzleDialog">
                <!-- center-two -->
                <area shape="rect" coords="422,65,460,130" alt="请稍等......" @mouseover="puzzleCenterTwoActive" @mouseout="puzzleStatic" @click="showCenterTwoMonitorPuzzleDialog">
                <area shape="rect" coords="460,50,552,145" alt="请稍等......" @mouseover="puzzleCenterTwoActive" @mouseout="puzzleStatic" @click="showCenterTwoMonitorPuzzleDialog">
                <area shape="rect" coords="552,65,592,130" alt="请稍等......" @mouseover="puzzleCenterTwoActive" @mouseout="puzzleStatic" @click="showCenterTwoMonitorPuzzleDialog">
                <!-- 第二大板块 end -->
                <!-- 第三大板块 start -->
                <!-- third-one -->
                <area shape="rect" coords="685,0,765,65" alt="请稍等......" @mouseover="puzzleThirdOneActive" @mouseout="puzzleStatic" @click="showThirdOneMonitorPuzzleDialog">
                <area shape="rect" coords="705,65,765,98" alt="请稍等......" @mouseover="puzzleThirdOneActive" @mouseout="puzzleStatic" @click="showThirdOneMonitorPuzzleDialog">
                <area shape="rect" coords="765,0,805,65" alt="请稍等......" @mouseover="puzzleThirdOneActive" @mouseout="puzzleStatic" @click="showThirdOneMonitorPuzzleDialog">
                <area shape="rect" coords="805,0,850,50" alt="请稍等......" @mouseover="puzzleThirdOneActive" @mouseout="puzzleStatic" @click="showThirdOneMonitorPuzzleDialog">
                <!-- third-two -->
                <area shape="rect" coords="850,0,895,50" alt="请稍等......" @mouseover="puzzleThirdTwoActive" @mouseout="puzzleStatic" @click="showThirdTwoMonitorPuzzleDialog">
                <area shape="rect" coords="895,0,935,65" alt="请稍等......" @mouseover="puzzleThirdTwoActive" @mouseout="puzzleStatic" @click="showThirdTwoMonitorPuzzleDialog">
                <area shape="rect" coords="935,0,1016,65" alt="请稍等......" @mouseover="puzzleThirdTwoActive" @mouseout="puzzleStatic" @click="showThirdTwoMonitorPuzzleDialog">
                <area shape="rect" coords="935,65,997,98" alt="请稍等......" @mouseover="puzzleThirdTwoActive" @mouseout="puzzleStatic" @click="showThirdTwoMonitorPuzzleDialog">
                <!-- third-three -->
                <area shape="rect" coords="705,98,765,117" alt="请稍等......" @mouseover="puzzleThirdThreeActive" @mouseout="puzzleStatic" @click="showThirdThreeMonitorPuzzleDialog">
                <area shape="rect" coords="685,117,765,175" alt="请稍等......" @mouseover="puzzleThirdThreeActive" @mouseout="puzzleStatic" @click="showThirdThreeMonitorPuzzleDialog">
                <area shape="rect" coords="705,175,765,198" alt="请稍等......" @mouseover="puzzleThirdThreeActive" @mouseout="puzzleStatic" @click="showThirdThreeMonitorPuzzleDialog">
                <area shape="rect" coords="765,130,805,198" alt="请稍等......" @mouseover="puzzleThirdThreeActive" @mouseout="puzzleStatic" @click="showThirdThreeMonitorPuzzleDialog">
                <area shape="rect" coords="805,145,850,175" alt="请稍等......" @mouseover="puzzleThirdThreeActive" @mouseout="puzzleStatic" @click="showThirdThreeMonitorPuzzleDialog">
                <area shape="rect" coords="805,175,825,198" alt="请稍等......" @mouseover="puzzleThirdThreeActive" @mouseout="puzzleStatic" @click="showThirdThreeMonitorPuzzleDialog">
                <!-- third-four -->
                <area shape="rect" coords="850,145,895,175" alt="请稍等......" @mouseover="puzzleThirdFourActive" @mouseout="puzzleStatic" @click="showThirdFourMonitorPuzzleDialog">
                <area shape="rect" coords="878,175,895,198" alt="请稍等......" @mouseover="puzzleThirdFourActive" @mouseout="puzzleStatic" @click="showThirdFourMonitorPuzzleDialog">
                <area shape="rect" coords="895,130,935,198" alt="请稍等......" @mouseover="puzzleThirdFourActive" @mouseout="puzzleStatic" @click="showThirdFourMonitorPuzzleDialog">
                <area shape="rect" coords="935,98,997,117" alt="请稍等......" @mouseover="puzzleThirdFourActive" @mouseout="puzzleStatic" @click="showThirdFourMonitorPuzzleDialog">
                <area shape="rect" coords="935,117,1016,175" alt="请稍等......" @mouseover="puzzleThirdFourActive" @mouseout="puzzleStatic" @click="showThirdFourMonitorPuzzleDialog">
                <area shape="rect" coords="935,175,997,198" alt="请稍等......" @mouseover="puzzleThirdFourActive" @mouseout="puzzleStatic" @click="showThirdFourMonitorPuzzleDialog">
                <!-- center-three -->
                <area shape="rect" coords="765,65,805,130" alt="请稍等......" @mouseover="puzzleCenterThreeActive" @mouseout="puzzleStatic" @click="showCenterThreeMonitorPuzzleDialog">
                <area shape="rect" coords="805,50,895,145" alt="请稍等......" @mouseover="puzzleCenterThreeActive" @mouseout="puzzleStatic" @click="showCenterThreeMonitorPuzzleDialog">
                <area shape="rect" coords="895,65,935,130" alt="请稍等......" @mouseover="puzzleCenterThreeActive" @mouseout="puzzleStatic" @click="showCenterThreeMonitorPuzzleDialog">
                <!-- 第三大板块 end -->
                <!-- 第四大板块 start -->
                <!-- fourth-one -->
                <area shape="rect" coords="1025,0,1107,65" alt="请稍等......" @mouseover="puzzleFourthOneActive" @mouseout="puzzleStatic" @click="showFourthOneMonitorPuzzleDialog">
                <area shape="rect" coords="1047,65,1107,98" alt="请稍等......" @mouseover="puzzleFourthOneActive" @mouseout="puzzleStatic" @click="showFourthOneMonitorPuzzleDialog">
                <area shape="rect" coords="1107,0,1145,65" alt="请稍等......" @mouseover="puzzleFourthOneActive" @mouseout="puzzleStatic" @click="showFourthOneMonitorPuzzleDialog">
                <area shape="rect" coords="1145,0,1192,50" alt="请稍等......" @mouseover="puzzleFourthOneActive" @mouseout="puzzleStatic" @click="showFourthOneMonitorPuzzleDialog">
                <!-- fourth-two -->
                <area shape="rect" coords="1192,0,1237,50" alt="请稍等......" @mouseover="puzzleFourthTwoActive" @mouseout="puzzleStatic" @click="showFourthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="1237,0,1277,65" alt="请稍等......" @mouseover="puzzleFourthTwoActive" @mouseout="puzzleStatic" @click="showFourthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="1277,0,1360,98" alt="请稍等......" @mouseover="puzzleFourthTwoActive" @mouseout="puzzleStatic" @click="showFourthTwoMonitorPuzzleDialog">
                <!-- fourth-three -->
                <area shape="rect" coords="1047,98,1107,117" alt="请稍等......" @mouseover="puzzleFourthThreeActive" @mouseout="puzzleStatic" @click="showFourthThreeMonitorPuzzleDialog">
                <area shape="rect" coords="1025,117,1107,175" alt="请稍等......" @mouseover="puzzleFourthThreeActive" @mouseout="puzzleStatic" @click="showFourthThreeMonitorPuzzleDialog">
                <area shape="rect" coords="1047,175,1107,198" alt="请稍等......" @mouseover="puzzleFourthThreeActive" @mouseout="puzzleStatic" @click="showFourthThreeMonitorPuzzleDialog">
                <area shape="rect" coords="1107,130,1145,198" alt="请稍等......" @mouseover="puzzleFourthThreeActive" @mouseout="puzzleStatic" @click="showFourthThreeMonitorPuzzleDialog">
                <area shape="rect" coords="1145,145,1192,175" alt="请稍等......" @mouseover="puzzleFourthThreeActive" @mouseout="puzzleStatic" @click="showFourthThreeMonitorPuzzleDialog">
                <area shape="rect" coords="1145,175,1165,198" alt="请稍等......" @mouseover="puzzleFourthThreeActive" @mouseout="puzzleStatic" @click="showFourthThreeMonitorPuzzleDialog">
                <!-- fourth-four -->
                <area shape="rect" coords="1192,145,1237,175" alt="请稍等......" @mouseover="puzzleFourthFourActive" @mouseout="puzzleStatic" @click="showFourthFourMonitorPuzzleDialog">
                <area shape="rect" coords="1218,175,1237,198" alt="请稍等......" @mouseover="puzzleFourthFourActive" @mouseout="puzzleStatic" @click="showFourthFourMonitorPuzzleDialog">
                <area shape="rect" coords="1237,130,1277,198" alt="请稍等......" @mouseover="puzzleFourthFourActive" @mouseout="puzzleStatic" @click="showFourthFourMonitorPuzzleDialog">
                <area shape="rect" coords="1277,98,1360,198" alt="请稍等......" @mouseover="puzzleFourthFourActive" @mouseout="puzzleStatic" @click="showFourthFourMonitorPuzzleDialog">
                <!-- center-four -->
                <area shape="rect" coords="1107,65,1145,130" alt="请稍等......" @mouseover="puzzleCenterFourActive" @mouseout="puzzleStatic" @click="showCenterFourMonitorPuzzleDialog">
                <area shape="rect" coords="1145,50,1237,145" alt="请稍等......" @mouseover="puzzleCenterFourActive" @mouseout="puzzleStatic" @click="showCenterFourMonitorPuzzleDialog">
                <area shape="rect" coords="1237,65,1277,130" alt="请稍等......" @mouseover="puzzleCenterFourActive" @mouseout="puzzleStatic" @click="showCenterFourMonitorPuzzleDialog">
                <!-- 第四大板块 end -->
                <!-- 第五大板块 start -->
                <!-- fifth-one -->
                <area shape="rect" coords="0,205,80,302" alt="请稍等......" @mouseover="puzzleFifthOneActive" @mouseout="puzzleStatic" @click="showFifthOneMonitorPuzzleDialog">
                <area shape="rect" coords="80,205,120,270" alt="请稍等......" @mouseover="puzzleFifthOneActive" @mouseout="puzzleStatic" @click="showFifthOneMonitorPuzzleDialog">
                <area shape="rect" coords="120,205,140,225" alt="请稍等......" @mouseover="puzzleFifthOneActive" @mouseout="puzzleStatic" @click="showFifthOneMonitorPuzzleDialog">
                <area shape="rect" coords="120,225,165,255" alt="请稍等......" @mouseover="puzzleFifthOneActive" @mouseout="puzzleStatic" @click="showFifthOneMonitorPuzzleDialog">
                <!-- fifth-two -->
                <area shape="rect" coords="190,205,210,225" alt="请稍等......" @mouseover="puzzleFifthTwoActive" @mouseout="puzzleStatic" @click="showFifthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="165,225,210,255" alt="请稍等......" @mouseover="puzzleFifthTwoActive" @mouseout="puzzleStatic" @click="showFifthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="210,205,250,270" alt="请稍等......" @mouseover="puzzleFifthTwoActive" @mouseout="puzzleStatic" @click="showFifthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="250,205,310,225" alt="请稍等......" @mouseover="puzzleFifthTwoActive" @mouseout="puzzleStatic" @click="showFifthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="250,225,332,275" alt="请稍等......" @mouseover="puzzleFifthTwoActive" @mouseout="puzzleStatic" @click="showFifthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="250,275,310,302" alt="请稍等......" @mouseover="puzzleFifthTwoActive" @mouseout="puzzleStatic" @click="showFifthTwoMonitorPuzzleDialog">
                <!-- fifth-three -->
                <area shape="rect" coords="0,302,80,400" alt="请稍等......" @mouseover="puzzleFifthThreeActive" @mouseout="puzzleStatic" @click="showFifthThreeMonitorPuzzleDialog">
                <area shape="rect" coords="80,335,120,400" alt="请稍等......" @mouseover="puzzleFifthThreeActive" @mouseout="puzzleStatic" @click="showFifthThreeMonitorPuzzleDialog">
                <area shape="rect" coords="120,350,165,400" alt="请稍等......" @mouseover="puzzleFifthThreeActive" @mouseout="puzzleStatic" @click="showFifthThreeMonitorPuzzleDialog">
                <!-- fifth-four -->
                <area shape="rect" coords="165,350,210,400" alt="请稍等......" @mouseover="puzzleFifthFourActive" @mouseout="puzzleStatic" @click="showFifthFourMonitorPuzzleDialog">
                <area shape="rect" coords="210,335,250,400" alt="请稍等......" @mouseover="puzzleFifthFourActive" @mouseout="puzzleStatic" @click="showFifthFourMonitorPuzzleDialog">
                <area shape="rect" coords="250,302,310,328" alt="请稍等......" @mouseover="puzzleFifthFourActive" @mouseout="puzzleStatic" @click="showFifthFourMonitorPuzzleDialog">
                <area shape="rect" coords="250,328,332,400" alt="请稍等......" @mouseover="puzzleFifthFourActive" @mouseout="puzzleStatic" @click="showFifthFourMonitorPuzzleDialog">
                <!-- center-five -->
                <area shape="rect" coords="80,270,120,335" alt="请稍等......" @mouseover="puzzleCenterFiveActive" @mouseout="puzzleStatic" @click="showCenterFiveMonitorPuzzleDialog">
                <area shape="rect" coords="120,255,210,350" alt="请稍等......" @mouseover="puzzleCenterFiveActive" @mouseout="puzzleStatic" @click="showCenterFiveMonitorPuzzleDialog">
                <area shape="rect" coords="210,270,250,335" alt="请稍等......" @mouseover="puzzleCenterFiveActive" @mouseout="puzzleStatic" @click="showCenterFiveMonitorPuzzleDialog">
                <!-- 第五大板块 end -->
                <!-- 第六大板块 start -->
                <!-- sixth-one -->
                <area shape="rect" coords="360,205,422,225" alt="请稍等......" @mouseover="puzzleSixthOneActive" @mouseout="puzzleStatic" @click="showSixthOneMonitorPuzzleDialog">
                <area shape="rect" coords="340,225,422,275" alt="请稍等......" @mouseover="puzzleSixthOneActive" @mouseout="puzzleStatic" @click="showSixthOneMonitorPuzzleDialog">
                <area shape="rect" coords="360,275,422,302" alt="请稍等......" @mouseover="puzzleSixthOneActive" @mouseout="puzzleStatic" @click="showSixthOneMonitorPuzzleDialog">
                <area shape="rect" coords="422,205,460,270" alt="请稍等......" @mouseover="puzzleSixthOneActive" @mouseout="puzzleStatic" @click="showSixthOneMonitorPuzzleDialog">
                <area shape="rect" coords="460,205,482,225" alt="请稍等......" @mouseover="puzzleSixthOneActive" @mouseout="puzzleStatic" @click="showSixthOneMonitorPuzzleDialog">
                <area shape="rect" coords="460,225,507,255" alt="请稍等......" @mouseover="puzzleSixthOneActive" @mouseout="puzzleStatic" @click="showSixthOneMonitorPuzzleDialog">
                <!-- sixth-two -->
                <area shape="rect" coords="533,205,552,225" alt="请稍等......" @mouseover="puzzleSixthTwoActive" @mouseout="puzzleStatic" @click="showSixthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="507,225,552,255" alt="请稍等......" @mouseover="puzzleSixthTwoActive" @mouseout="puzzleStatic" @click="showSixthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="552,205,592,270" alt="请稍等......" @mouseover="puzzleSixthTwoActive" @mouseout="puzzleStatic" @click="showSixthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="592,205,653,225" alt="请稍等......" @mouseover="puzzleSixthTwoActive" @mouseout="puzzleStatic" @click="showSixthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="592,225,675,275" alt="请稍等......" @mouseover="puzzleSixthTwoActive" @mouseout="puzzleStatic" @click="showSixthTwoMonitorPuzzleDialog">
                <area shape="rect" coords="592,275,653,302" alt="请稍等......" @mouseover="puzzleSixthTwoActive" @mouseout="puzzleStatic" @click="showSixthTwoMonitorPuzzleDialog">
                <!-- sixth-three -->
                <area shape="rect" coords="360,302,422,328" alt="请稍等......" @mouseover="puzzleSixthThreeActive" @mouseout="puzzleStatic" @click="showSixthThreeMonitorPuzzleDialog">
                <area shape="rect" coords="340,328,422,400" alt="请稍等......" @mouseover="puzzleSixthThreeActive" @mouseout="puzzleStatic" @click="showSixthThreeMonitorPuzzleDialog">
                <area shape="rect" coords="422,335,460,400" alt="请稍等......" @mouseover="puzzleSixthThreeActive" @mouseout="puzzleStatic" @click="showSixthThreeMonitorPuzzleDialog">
                <area shape="rect" coords="460,350,507,400" alt="请稍等......" @mouseover="puzzleSixthThreeActive" @mouseout="puzzleStatic" @click="showSixthThreeMonitorPuzzleDialog">
                <!-- sixth-four -->
                <area shape="rect" coords="507,350,552,400" alt="请稍等......" @mouseover="puzzleSixthFourActive" @mouseout="puzzleStatic" @click="showSixthFourMonitorPuzzleDialog">
                <area shape="rect" coords="552,335,592,400" alt="请稍等......" @mouseover="puzzleSixthFourActive" @mouseout="puzzleStatic" @click="showSixthFourMonitorPuzzleDialog">
                <area shape="rect" coords="592,302,653,328" alt="请稍等......" @mouseover="puzzleSixthFourActive" @mouseout="puzzleStatic" @click="showSixthFourMonitorPuzzleDialog">
                <area shape="rect" coords="592,328,675,400" alt="请稍等......" @mouseover="puzzleSixthFourActive" @mouseout="puzzleStatic" @click="showSixthFourMonitorPuzzleDialog">
                <!-- center-six -->
                <area shape="rect" coords="422,270,460,335" alt="请稍等......" @mouseover="puzzleCenterSixActive" @mouseout="puzzleStatic" @click="showCenterSixMonitorPuzzleDialog">
                <area shape="rect" coords="460,255,552,350" alt="请稍等......" @mouseover="puzzleCenterSixActive" @mouseout="puzzleStatic" @click="showCenterSixMonitorPuzzleDialog">
                <area shape="rect" coords="552,270,592,335" alt="请稍等......" @mouseover="puzzleCenterSixActive" @mouseout="puzzleStatic" @click="showCenterSixMonitorPuzzleDialog">
                <!-- 第六大板块 end -->
                <!-- 第七大板块 start -->
                <!-- seventh-one -->
                <area shape="rect" coords="705,205,765,225" alt="请稍等......" @mouseover="puzzleSeventhOneActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="685,225,765,275" alt="请稍等......" @mouseover="puzzleSeventhOneActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="705,275,765,302" alt="请稍等......" @mouseover="puzzleSeventhOneActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="765,205,805,270" alt="请稍等......" @mouseover="puzzleSeventhOneActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="805,205,825,225" alt="请稍等......" @mouseover="puzzleSeventhOneActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="805,225,850,255" alt="请稍等......" @mouseover="puzzleSeventhOneActive" @mouseout="puzzleStatic">
                <!-- seventh-two -->
                <area shape="rect" coords="878,205,895,225" alt="请稍等......" @mouseover="puzzleSeventhTwoActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="850,225,895,255" alt="请稍等......" @mouseover="puzzleSeventhTwoActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="895,205,935,270" alt="请稍等......" @mouseover="puzzleSeventhTwoActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="935,205,997,225" alt="请稍等......" @mouseover="puzzleSeventhTwoActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="935,225,1016,275" alt="请稍等......" @mouseover="puzzleSeventhTwoActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="935,275,997,302" alt="请稍等......" @mouseover="puzzleSeventhTwoActive" @mouseout="puzzleStatic">
                <!-- seventh-three -->
                <area shape="rect" coords="705,302,765,328" alt="请稍等......" @mouseover="puzzleSeventhThreeActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="685,328,765,400" alt="请稍等......" @mouseover="puzzleSeventhThreeActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="765,335,805,400" alt="请稍等......" @mouseover="puzzleSeventhThreeActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="805,350,850,400" alt="请稍等......" @mouseover="puzzleSeventhThreeActive" @mouseout="puzzleStatic">
                <!-- seventh-four -->
                <area shape="rect" coords="850,350,895,400" alt="请稍等......" @mouseover="puzzleSeventhFourActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="895,335,935,400" alt="请稍等......" @mouseover="puzzleSeventhFourActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="935,302,997,328" alt="请稍等......" @mouseover="puzzleSeventhFourActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="935,328,1016,400" alt="请稍等......" @mouseover="puzzleSeventhFourActive" @mouseout="puzzleStatic">
                <!-- center-seven -->
                <area shape="rect" coords="765,270,805,335" alt="请稍等......" @mouseover="puzzleCenterSevenActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="805,255,895,350" alt="请稍等......" @mouseover="puzzleCenterSevenActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="895,270,935,335" alt="请稍等......" @mouseover="puzzleCenterSevenActive" @mouseout="puzzleStatic">
                <!-- 第七大板块 end -->
                <!-- 第八大板块 start -->
                <!-- eighth-one -->
                <area shape="rect" coords="1047,205,1107,225" alt="请稍等......" @mouseover="puzzleEighthOneActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1025,225,1107,275" alt="请稍等......" @mouseover="puzzleEighthOneActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1047,275,1107,302" alt="请稍等......" @mouseover="puzzleEighthOneActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1107,205,1145,270" alt="请稍等......" @mouseover="puzzleEighthOneActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1145,302,1165,225" alt="请稍等......" @mouseover="puzzleEighthOneActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1145,225,1192,255" alt="请稍等......" @mouseover="puzzleEighthOneActive" @mouseout="puzzleStatic">
                <!-- eighth-two -->
                <area shape="rect" coords="1218,205,1237,225" alt="请稍等......" @mouseover="puzzleEighthTwoActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1192,225,1237,255" alt="请稍等......" @mouseover="puzzleEighthTwoActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1237,225,1277,270" alt="请稍等......" @mouseover="puzzleEighthTwoActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1277,205,1360,302" alt="请稍等......" @mouseover="puzzleEighthTwoActive" @mouseout="puzzleStatic">
                <!-- eighth-three -->
                <area shape="rect" coords="1047,302,1107,328" alt="请稍等......" @mouseover="puzzleEighthThreeActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1025,328,1107,400" alt="请稍等......" @mouseover="puzzleEighthThreeActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1107,335,1145,400" alt="请稍等......" @mouseover="puzzleEighthThreeActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1145,350,1192,400" alt="请稍等......" @mouseover="puzzleEighthThreeActive" @mouseout="puzzleStatic">
                <!-- eighth-four -->
                <area shape="rect" coords="1192,350,1237,400" alt="请稍等......" @mouseover="puzzleEighthFourActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1237,335,1277,400" alt="请稍等......" @mouseover="puzzleEighthFourActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1277,302,1360,400" alt="请稍等......" @mouseover="puzzleEighthFourActive" @mouseout="puzzleStatic">
                <!-- center-eight -->
                <area shape="rect" coords="1107,270,1145,335" alt="请稍等......" @mouseover="puzzleCenterEightActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1145,255,1237,350" alt="请稍等......" @mouseover="puzzleCenterEightActive" @mouseout="puzzleStatic">
                <area shape="rect" coords="1237,270,1277,335" alt="请稍等......" @mouseover="puzzleCenterEightActive" @mouseout="puzzleStatic">
                <!-- 第八大板块 end -->
            </map>
            <!-- puzzle text 拼图文字信息 start -->
            <div class="puzzle-title">
                <div v-for="(item, index) of puzzleTextList" :key="index">
                    <h5 class="title-text"
                        :style="{ top: position[index].top, left: position[index].left }"
                        @mouseover="puzzleAcrtive(index)"
                        @mouseout="puzzleStatic"
                        @click="showMonitorPuzzleDialog(index)"
                    >
                        {{ item.name }}
                    </h5>
                </div>
            </div>
            <!-- puzzle text 拼图文字信息 end -->
        </div>
        <DialogMask v-show="isShowDialogMask"/>
        <DialogMonitorPuzzle
            :monitorPuzzleData="monitorPuzzleData"
            :tabeleRows="tabeleRows"
            :tableCols="tableCols"
            v-show="isShowDialogMonitorPuzzle"
            @hideDialogMonitorPuzzle="hideDialogMonitorPuzzle"
        />
    </div>
</template>

<script>
import imgOrigin from '@/assets/images/main-monitor/puzzle-origin.gif'
import imgFirstOne from '@/assets/images/main-monitor/puzzle-first-one.gif'
import imgFirstTwo from '@/assets/images/main-monitor/puzzle-first-two.gif'
import imgFirstThree from '@/assets/images/main-monitor/puzzle-first-three.gif'
import imgFirstFour from '@/assets/images/main-monitor/puzzle-first-four.gif'
import imgCenterOne from '@/assets/images/main-monitor/puzzle-center-one.gif'
import imgSecondOne from '@/assets/images/main-monitor/puzzle-second-one.gif'
import imgSecondTwo from '@/assets/images/main-monitor/puzzle-second-two.gif'
import imgSecondThree from '@/assets/images/main-monitor/puzzle-second-three.gif'
import imgSecondFour from '@/assets/images/main-monitor/puzzle-second-four.gif'
import imgCenterTwo from '@/assets/images/main-monitor/puzzle-center-two.gif'
import imgThirdOne from '@/assets/images/main-monitor/puzzle-third-one.gif'
import imgThirdTwo from '@/assets/images/main-monitor/puzzle-third-two.gif'
import imgThirdThree from '@/assets/images/main-monitor/puzzle-third-three.gif'
import imgThirdFour from '@/assets/images/main-monitor/puzzle-third-four.gif'
import imgCenterThree from '@/assets/images/main-monitor/puzzle-center-three.gif'
import imgFourthOne from '@/assets/images/main-monitor/puzzle-fourth-one.gif'
import imgFourthTwo from '@/assets/images/main-monitor/puzzle-fourth-two.gif'
import imgFourthThree from '@/assets/images/main-monitor/puzzle-fourth-three.gif'
import imgFourthFour from '@/assets/images/main-monitor/puzzle-fourth-four.gif'
import imgCenterFour from '@/assets/images/main-monitor/puzzle-center-four.gif'
import imgFifthOne from '@/assets/images/main-monitor/puzzle-fifth-one.gif'
import imgFifthTwo from '@/assets/images/main-monitor/puzzle-fifth-two.gif'
import imgFifthThree from '@/assets/images/main-monitor/puzzle-fifth-three.gif'
import imgFifthFour from '@/assets/images/main-monitor/puzzle-fifth-four.gif'
import imgCenterFive from '@/assets/images/main-monitor/puzzle-center-five.gif'
import imgSixthOne from '@/assets/images/main-monitor/puzzle-sixth-one.gif'
import imgSixthTwo from '@/assets/images/main-monitor/puzzle-sixth-two.gif'
import imgSixthThree from '@/assets/images/main-monitor/puzzle-sixth-three.gif'
import imgSixthFour from '@/assets/images/main-monitor/puzzle-sixth-four.gif'
import imgCenterSix from '@/assets/images/main-monitor/puzzle-center-six.gif'
import imgSeventhOne from '@/assets/images/main-monitor/puzzle-seventh-one.gif'
import imgSeventhTwo from '@/assets/images/main-monitor/puzzle-seventh-two.gif'
import imgSeventhThree from '@/assets/images/main-monitor/puzzle-seventh-three.gif'
import imgSeventhFour from '@/assets/images/main-monitor/puzzle-seventh-four.gif'
import imgCenterSeven from '@/assets/images/main-monitor/puzzle-center-seven.gif'
import imgEighthOne from '@/assets/images/main-monitor/puzzle-eighth-one.gif'
import imgEighthTwo from '@/assets/images/main-monitor/puzzle-eighth-two.gif'
import imgEighthThree from '@/assets/images/main-monitor/puzzle-eighth-three.gif'
import imgEighthFour from '@/assets/images/main-monitor/puzzle-eighth-four.gif'
import imgCenterEight from '@/assets/images/main-monitor/puzzle-center-eight.gif'
import { getMonitorTitleInfo } from '../../../../api/monitor'
import DialogMask from '../../../dialog/mask'
import DialogMonitorPuzzle from '../../../dialog/monitor-puzzle'
export default {
    name: 'MonitorPuzzle',
    components: {
        DialogMask,
        DialogMonitorPuzzle
    },
    data () {
        return {
            /*
             * puzzle图片
             */
            puzzleImg: imgOrigin,
            /**
             * puzzle里的文字信息
             */
            puzzleTextList: [],
            /**
             * monitor-puzzle弹窗里的对应信息
             */
            monitorPuzzleData: [],
            /**
             * monitor-puzzle组件中表格的行数
             */
            tabeleRows: [],
            /**
             * monitor-puzzle组件中表格的列数（固定9列）
             */
            tableCols: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            /**
             * 每一个puzzle text的文字信息定位
             */
            position: [
                // 第一大板块
                {
                    top: '57px',
                    left: '62px'
                },
                {
                    top: '57px',
                    left: '244px'
                },
                {
                    top: '109px',
                    left: '153px'
                },
                {
                    top: '161px',
                    left: '62px'
                },
                {
                    top: '161px',
                    left: '244px'
                },
                // 第二大板块
                {
                    top: '57px',
                    left: '402px'
                },
                {
                    top: '57px',
                    left: '587px'
                },
                {
                    top: '109px',
                    left: '495px'
                },
                {
                    top: '161px',
                    left: '402px'
                },
                {
                    top: '161px',
                    left: '587px'
                },
                // 第三大板块
                {
                    top: '57px',
                    left: '743px'
                },
                {
                    top: '57px',
                    left: '930px'
                },
                {
                    top: '109px',
                    left: '837px'
                },
                {
                    top: '161px',
                    left: '743px'
                },
                {
                    top: '161px',
                    left: '930px'
                },
                // 第四大板块
                {
                    top: '57px',
                    left: '1086px'
                },
                {
                    top: '57px',
                    left: '1270px'
                },
                {
                    top: '109px',
                    left: '1179px'
                },
                {
                    top: '161px',
                    left: '1086px'
                },
                {
                    top: '161px',
                    left: '1270px'
                },
                // 第五大板块
                {
                    top: '261px',
                    left: '62px'
                },
                {
                    top: '261px',
                    left: '244px'
                },
                {
                    top: '313px',
                    left: '153px'
                },
                {
                    top: '365px',
                    left: '62px'
                },
                {
                    top: '365px',
                    left: '244px'
                },
                // 第六大板块
                {
                    top: '261px',
                    left: '402px'
                },
                {
                    top: '261px',
                    left: '587px'
                },
                {
                    top: '313px',
                    left: '469px'
                },
                {
                    top: '365px',
                    left: '402px'
                },
                {
                    top: '365px',
                    left: '587px'
                },
                // 第七大板块
                {
                    top: '261px',
                    left: '743px'
                },
                {
                    top: '261px',
                    left: '930px'
                },
                {
                    top: '313px',
                    left: '837px'
                },
                {
                    top: '365px',
                    left: '743px'
                },
                {
                    top: '365px',
                    left: '930px'
                },
                // 第八大板块
                {
                    top: '261px',
                    left: '1086px'
                },
                {
                    top: '261px',
                    left: '1270px'
                },
                {
                    top: '313px',
                    left: '1179px'
                },
                {
                    top: '365px',
                    left: '1086px'
                },
                {
                    top: '365px',
                    left: '1270px'
                }
            ],
            /**
             * 是否显示遮罩层和弹窗判断值
             */
            isShowDialogMask: false,
            isShowDialogMonitorPuzzle: false
        }
    },
    mounted () {
        this.getPuzzleTextData()
    },
    methods: {
        /**
         * 获取puzzle里的文字信息数据
         */
        getPuzzleTextData () {
            getMonitorTitleInfo().then((response) => {
                this.puzzleTextList = response.data.data
            }).catch((error) => {
                console.log(error)
            })
        },
        /**
         * puzzle拼图区域鼠标经过与移出效果
         */
        // 鼠标移出恢复原拼图
        puzzleStatic () {
           this.puzzleImg = imgOrigin
        },
        // 第一大板块鼠标经过效果
        puzzleFirstOneActive () {
            this.puzzleImg = imgFirstOne
        },
        puzzleFirstTwoActive () {
            this.puzzleImg = imgFirstTwo
        },
        puzzleFirstThreeActive () {
            this.puzzleImg = imgFirstThree
        },
        puzzleFirstFourActive () {
            this.puzzleImg = imgFirstFour
        },
        puzzleCenterOneActive () {
            this.puzzleImg = imgCenterOne
        },
        // 第二大板块鼠标经过效果
        puzzleSecondOneActive () {
            this.puzzleImg = imgSecondOne
        },
        puzzleSecondTwoActive () {
            this.puzzleImg = imgSecondTwo
        },
        puzzleSecondThreeActive () {
            this.puzzleImg = imgSecondThree
        },
        puzzleSecondFourActive () {
            this.puzzleImg = imgSecondFour
        },
        puzzleCenterTwoActive () {
            this.puzzleImg = imgCenterTwo
        },
        // 第三大板块鼠标经过效果
        puzzleThirdOneActive () {
            this.puzzleImg = imgThirdOne
        },
        puzzleThirdTwoActive () {
            this.puzzleImg = imgThirdTwo
        },
        puzzleThirdThreeActive () {
            this.puzzleImg = imgThirdThree
        },
        puzzleThirdFourActive () {
            this.puzzleImg = imgThirdFour
        },
        puzzleCenterThreeActive () {
            this.puzzleImg = imgCenterThree
        },
        // 第四大板块鼠标经过效果
        puzzleFourthOneActive () {
            this.puzzleImg = imgFourthOne
        },
        puzzleFourthTwoActive () {
            this.puzzleImg = imgFourthTwo
        },
        puzzleFourthThreeActive () {
            this.puzzleImg = imgFourthThree
        },
        puzzleFourthFourActive () {
            this.puzzleImg = imgFourthFour
        },
        puzzleCenterFourActive () {
            this.puzzleImg = imgCenterFour
        },
        // 第五大板块鼠标经过效果
        puzzleFifthOneActive () {
            this.puzzleImg = imgFifthOne
        },
        puzzleFifthTwoActive () {
            this.puzzleImg = imgFifthTwo
        },
        puzzleFifthThreeActive () {
            this.puzzleImg = imgFifthThree
        },
        puzzleFifthFourActive () {
            this.puzzleImg = imgFifthFour
        },
        puzzleCenterFiveActive () {
            this.puzzleImg = imgCenterFive
        },
        // 第六大板块鼠标经过效果
        puzzleSixthOneActive () {
            this.puzzleImg = imgSixthOne
        },
        puzzleSixthTwoActive () {
            this.puzzleImg = imgSixthTwo
        },
        puzzleSixthThreeActive () {
            this.puzzleImg = imgSixthThree
        },
        puzzleSixthFourActive () {
            this.puzzleImg = imgSixthFour
        },
        puzzleCenterSixActive () {
            this.puzzleImg = imgCenterSix
        },
        // 第七大板块鼠标经过效果
        puzzleSeventhOneActive () {
            this.puzzleImg = imgSeventhOne
        },
        puzzleSeventhTwoActive () {
            this.puzzleImg = imgSeventhTwo
        },
        puzzleSeventhThreeActive () {
            this.puzzleImg = imgSeventhThree
        },
        puzzleSeventhFourActive () {
            this.puzzleImg = imgSeventhFour
        },
        puzzleCenterSevenActive () {
            this.puzzleImg = imgCenterSeven
        },
        // 第八大板块鼠标经过效果
        puzzleEighthOneActive () {
            this.puzzleImg = imgEighthOne
        },
        puzzleEighthTwoActive () {
            this.puzzleImg = imgEighthTwo
        },
        puzzleEighthThreeActive () {
            this.puzzleImg = imgEighthThree
        },
        puzzleEighthFourActive () {
            this.puzzleImg = imgEighthFour
        },
        puzzleCenterEightActive () {
            this.puzzleImg = imgCenterEight
        },
        // 拼图文字鼠标经过效果
        puzzleAcrtive (index) {
            if (index === 0) {
                this.puzzleImg = imgFirstOne
            } else if (index === 1) {
                this.puzzleImg = imgFirstTwo
            } else if (index === 2) {
                this.puzzleImg = imgCenterOne
            } else if (index === 3) {
                this.puzzleImg = imgFirstThree
            } else if (index === 4) {
                this.puzzleImg = imgFirstFour
            } else if (index === 5) {
                this.puzzleImg = imgSecondOne
            } else if (index === 6) {
                this.puzzleImg = imgSecondTwo
            } else if (index === 7) {
                this.puzzleImg = imgCenterTwo
            } else if (index === 8) {
                this.puzzleImg = imgSecondThree
            } else if (index === 9) {
                this.puzzleImg = imgSecondFour
            } else if (index === 10) {
                this.puzzleImg = imgThirdOne
            } else if (index === 11) {
                this.puzzleImg = imgThirdTwo
            } else if (index === 12) {
                this.puzzleImg = imgCenterThree
            } else if (index === 13) {
                this.puzzleImg = imgThirdThree
            } else if (index === 14) {
                this.puzzleImg = imgThirdFour
            } else if (index === 15) {
                this.puzzleImg = imgFourthOne
            } else if (index === 16) {
                this.puzzleImg = imgFourthTwo
            } else if (index === 17) {
                this.puzzleImg = imgCenterFour
            } else if (index === 18) {
                this.puzzleImg = imgFourthThree
            } else if (index === 19) {
                this.puzzleImg = imgFourthFour
            } else if (index === 20) {
                this.puzzleImg = imgFifthOne
            } else if (index === 21) {
                this.puzzleImg = imgFifthTwo
            } else if (index === 22) {
                this.puzzleImg = imgCenterFive
            } else if (index === 23) {
                this.puzzleImg = imgFifthThree
            } else if (index === 24) {
                this.puzzleImg = imgFifthFour
            } else if (index === 25) {
                this.puzzleImg = imgSixthOne
            } else if (index === 26) {
                this.puzzleImg = imgSixthTwo
            } else if (index === 27) {
                this.puzzleImg = imgCenterSix
            } else if (index === 28) {
                this.puzzleImg = imgSixthThree
            } else if (index === 29) {
                this.puzzleImg = imgSixthFour
            } else if (index === 30) {
                this.puzzleImg = imgSeventhOne
            } else if (index === 31) {
                this.puzzleImg = imgSeventhTwo
            } else if (index === 32) {
                this.puzzleImg = imgCenterSeven
            } else if (index === 33) {
                this.puzzleImg = imgSeventhThree
            } else if (index === 34) {
                this.puzzleImg = imgSeventhFour
            } else if (index === 35) {
                this.puzzleImg = imgEighthOne
            } else if (index === 36) {
                this.puzzleImg = imgEighthTwo
            } else if (index === 37) {
                this.puzzleImg = imgCenterEight
            } else if (index === 38) {
                this.puzzleImg = imgEighthThree
            } else if (index === 40) {
                this.puzzleImg = imgEighthFour
            }
        },
        /**
         * 给tabeleRows数组赋值
         */
        assignTabeleRows (length) {
            if (length % 9 === 0) {
                for (var j = 0; j < length / 9; j++) {
                    this.tabeleRows[j] = j
                }
            } else {
                for (var k = 0; k < (length - length % 9) / 9; k++) {
                    this.tabeleRows[k] = k
                }
            }
        },
        /**
         * 拼图文字点击显示对应弹窗
         */
        showMonitorPuzzleDialog (index) {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            // 清空tableRows数组，避免影响下一个标题子标题的显示表格的行数
            this.tabeleRows = []
            for (var i = 0; i < this.puzzleTextList.length; i++) {
                if (index === i) {
                    this.monitorPuzzleData = this.puzzleTextList[i]
                }
            }
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        /**
         * puzzle拼图区域点击显示对应弹窗
         */
        // 第一大板块
        showFirstOneMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[0]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showFirstTwoMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[1]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showCenterOneMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[2]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showFirstThreeMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[3]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showFirstFourMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[4]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        // 第二大板块
        showSecondOneMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[5]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showSecondTwoMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[6]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showCenterTwoMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[7]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showSecondThreeMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[8]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showSecondFourMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[9]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        // 第三大板块
        showThirdOneMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[10]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showThirdTwoMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[11]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showCenterThreeMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[12]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showThirdThreeMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[13]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showThirdFourMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[14]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        // 第四大板块
        showFourthOneMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[15]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showFourthTwoMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[16]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showCenterFourMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[17]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showFourthThreeMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[18]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showFourthFourMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[19]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        // 第五大板块
        showFifthOneMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[20]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showFifthTwoMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[21]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showCenterFiveMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[22]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showFifthThreeMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[23]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showFifthFourMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[24]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        // 第六大板块
        showSixthOneMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[25]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showSixthTwoMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[26]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showCenterSixMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[27]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showSixthThreeMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[28]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        showSixthFourMonitorPuzzleDialog () {
            this.isShowDialogMask = true
            this.isShowDialogMonitorPuzzle = true
            this.tabeleRows = []
            this.monitorPuzzleData = this.puzzleTextList[29]
            this.assignTabeleRows(this.monitorPuzzleData.children.length)
        },
        // 第七大板块
        // showSeventhOneMonitorPuzzleDialog () {
        //     this.isShowDialogMask = true
        //     this.isShowDialogMonitorPuzzle = true
        //     this.tabeleRows = []
        //     this.monitorPuzzleData = this.puzzleTextList[30]
        //     this.assignTabeleRows(this.monitorPuzzleData.children.length)
        // },
        // showSeventhTwoMonitorPuzzleDialog () {
        //     this.isShowDialogMask = true
        //     this.isShowDialogMonitorPuzzle = true
        //     this.tabeleRows = []
        //     this.monitorPuzzleData = this.puzzleTextList[31]
        //     this.assignTabeleRows(this.monitorPuzzleData.children.length)
        // },
        // showCenterSevenMonitorPuzzleDialog () {
        //     this.isShowDialogMask = true
        //     this.isShowDialogMonitorPuzzle = true
        //     this.tabeleRows = []
        //     this.monitorPuzzleData = this.puzzleTextList[32]
        //     this.assignTabeleRows(this.monitorPuzzleData.children.length)
        // },
        // showSeventhThreeMonitorPuzzleDialog () {
        //     this.isShowDialogMask = true
        //     this.isShowDialogMonitorPuzzle = true
        //     this.tabeleRows = []
        //     this.monitorPuzzleData = this.puzzleTextList[33]
        //     this.assignTabeleRows(this.monitorPuzzleData.children.length)
        // },
        // showSeventhFourMonitorPuzzleDialog () {
        //     this.isShowDialogMask = true
        //     this.isShowDialogMonitorPuzzle = true
        //     this.tabeleRows = []
        //     this.monitorPuzzleData = this.puzzleTextList[34]
        //     this.assignTabeleRows(this.monitorPuzzleData.children.length)
        // },
        // // 第八大板块
        // showEighthOneMonitorPuzzleDialog () {
        //     this.isShowDialogMask = true
        //     this.isShowDialogMonitorPuzzle = true
        //     this.tabeleRows = []
        //     this.monitorPuzzleData = this.puzzleTextList[35]
        //     this.assignTabeleRows(this.monitorPuzzleData.children.length)
        // },
        // showEighthTwoMonitorPuzzleDialog () {
        //     this.isShowDialogMask = true
        //     this.isShowDialogMonitorPuzzle = true
        //     this.tabeleRows = []
        //     this.monitorPuzzleData = this.puzzleTextList[36]
        //     this.assignTabeleRows(this.monitorPuzzleData.children.length)
        // },
        // showCenterEightMonitorPuzzleDialog () {
        //     this.isShowDialogMask = true
        //     this.isShowDialogMonitorPuzzle = true
        //     this.tabeleRows = []
        //     this.monitorPuzzleData = this.puzzleTextList[37]
        //     this.assignTabeleRows(this.monitorPuzzleData.children.length)
        // },
        // showEighthThreeMonitorPuzzleDialog () {
        //     this.isShowDialogMask = true
        //     this.isShowDialogMonitorPuzzle = true
        //     this.tabeleRows = []
        //     this.monitorPuzzleData = this.puzzleTextList[38]
        //     this.assignTabeleRows(this.monitorPuzzleData.children.length)
        // },
        // showEighthFourMonitorPuzzleDialog () {
        //     this.isShowDialogMask = true
        //     this.isShowDialogMonitorPuzzle = true
        //     this.tabeleRows = []
        //     this.monitorPuzzleData = this.puzzleTextList[39]
        //     this.assignTabeleRows(this.monitorPuzzleData.children.length)
        // },
        /**
         * 隐藏弹窗
         */
        hideDialogMonitorPuzzle () {
            this.isShowDialogMask = false
            this.isShowDialogMonitorPuzzle = false
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './puzzle.sass';
</style>
