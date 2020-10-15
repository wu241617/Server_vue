import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import('../views/common/Layout')

const OverviewApp = () => import('../views/overview/OverviewApp')

const AnalysisMenu = () => import('../views/common/AnalysisMenu')
const TopoOverview = () => import('../views/topo/overview/Overview')

const NotFound = () => import('../views/common/NotFound')

const Setting = () => import('../views/setting/setting')

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: Layout,
    redirect: 'overview',
    children: [{
      path: 'overview',
      name: 'overview',
      component: OverviewApp,
      meta: {
        title: 'menu.application_overview'
      }
    }, {
      path: 'setting',
      name: 'setting',
      component: Setting
    }, {
      path: 'analysis',
      name: 'analysis',
      component: AnalysisMenu,
      children: [{
        path: '',
        component: TopoOverview,
        redirect: '/analysis/topo'
      }, {
        path: 'topo',
        name: 'topo',
        component: TopoOverview
      }]
    }]
  }, {
    path: '*',
    name: '404',
    component: NotFound
  }]
})

export default router
