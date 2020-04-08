import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/main'
import Home from '@/pages/main/home/home'
import HomeCustomerSolution from '@/pages/main/home/customer-solution'
import Nation from '@/pages/main/nation/nation'
import NationHistory from '@/pages/main/nation/components/history'
import NationNatural from '@/pages/main/nation/components/natural'
import NationSocialDevelopment from '@/pages/main/nation/components/social-development'
import NationMacroeconomic from '@/pages/main/nation/components/macroeconomic'
import NationEconomicOperation from '@/pages/main/nation/components/economic-operation'
import NationEconomicMap from '@/pages/main/nation/components/economic-map'
import Development from '@/pages/main/development/development'
import Business from '@/pages/main/business/business'
import Monitor from '@/pages/main/monitor/monitor'
import Finance from '@/pages/main/finance/finance'
import Course from '@/pages/main/course/course'
import CourseCoursewareDetail from '@/pages/main/course/courseware-detail'
import CourseLectureDetail from '@/pages/main/course/lecture-detail'
import CourseTrainingDetail from '@/pages/main/course/training-detail'
import AboutUs from '@/pages/main/about-us/about-us'
import Search from '@/pages/main/search/search'
import Supplement from '@/pages/supplement/supplement'
import Vip from '@/pages/supplement/vip/vip'
import MonitorQuestionnaire from '@/pages/supplement/monitor-questionnaire/monitor-questionnaire'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 网站主体导航页面的路由设置
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/main/home',
          name: 'Home',
          component: Home
        },
        // 首页客户解决方案页面路由
        {
          path: '/main/home/customer-solution/:solutionId',
          name: 'HomeCustomerSolution',
          component: HomeCustomerSolution
        },
        {
          path: '/main/nation',
          name: 'Nation',
          component: Nation,
          children: [
            // 重定向，使进入中国国情咨询时首先显示历史人文地理页面history
            {
              path: '/',
              name: 'NationHistory',
              component: NationHistory
            },
            // 中国国情咨询页面导航路由设置
            {
              path: '/main/nation/history',
              name: 'NationHistory',
              component: NationHistory
            },
            {
              path: '/main/nation/natural',
              name: 'NationNatural',
              component: NationNatural
            },
            {
              path: '/main/nation/social-development',
              name: 'NationSocialDevelopment',
              component: NationSocialDevelopment
            },
            {
              path: '/main/nation/macroeconomic',
              name: 'NationMacroeconomic',
              component: NationMacroeconomic
            },
            {
              path: '/main/nation/economic-operation',
              name: 'NationEconomicOperation',
              component: NationEconomicOperation
            },
            {
              path: '/main/nation/economic-map',
              name: 'NationEconomicMap',
              component: NationEconomicMap
            }
          ]
        },
        {
          path: '/main/development',
          name: 'Development',
          component: Development
        },
        {
          path: '/main/business',
          name: 'Business',
          component: Business
        },
        {
          path: '/main/monitor',
          name: 'Monitor',
          component: Monitor
        },
        {
          path: '/main/finance',
          name: 'Finance',
          component: Finance
        },
        {
          path: '/main/course',
          name: 'Course',
          component: Course
        },
        // 云课堂智慧树热门课程详情路由
        {
          path: '/main/course/courseware-detail/:coursewareId',
          name: 'CourseCoursewareDetail',
          component: CourseCoursewareDetail
        },
        // 云课堂智慧树知识讲座详情路由
        {
          path: '/main/course/lecture-detail/:lectureId',
          name: 'CourseLectureDetail',
          component: CourseLectureDetail
        },
        // 云课堂智慧树技能培训详情路由
        {
          path: '/main/course/training-detail/:trainingId',
          name: 'CourseTrainingDetail',
          component: CourseTrainingDetail
        },
        {
          path: '/main/about-us',
          name: 'AboutUs',
          component: AboutUs
        },
        {
          path: '/main/search',
          name: 'Search',
          component: Search
        }
      ]
    },
    // 重定向，使进入网站时首先显示首页home
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      // 网站补充页面（vip页面、监测问卷页面、课程详情页面等）路由设置
      path: '/supplement',
      name: 'Supplement',
      component: Supplement,
      children: [
        {
          path: '/supplement/vip',
          name: 'Vip',
          component: Vip
        },
        {
          path: '/supplement/monitor-questionnaire',
          name: 'MonitorQuestionnaire',
          component: MonitorQuestionnaire
        }
      ]
    }
  ]
})
