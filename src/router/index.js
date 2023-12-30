import VueHome from "../layouts/VueHome.js"
import VueSign from "../layouts/VueSign.js"
import manage from "../views/manage.js"
import insert from "../views/insert.js"
import home from "../views/home.js"
import sign from "../views/sign.js"


const routes = {
  '/': {layout: VueHome, component: home},
  '/manage': {layout: VueHome, component: manage},
  '/insert': {layout: VueHome, component: insert},
  '/sign': {layout: VueSign, component: sign}
}
let current = null
function handleChange() {
  const path = window.location.hash.slice(1)
  const route = routes[path] || routes['/']
  const {layout: Layout, component: Component} = route
  if (current)
    current.unmount()
  current = Vue.createApp({
    template: `
    <header>
      <div class="jumbotron m-0 text-center">
        <h3>NSRC login website</h3>
        <p>全國技能競賽分區賽 - 登入系統</p>
      </div>
      <Layout />
    </header>
    <main class="container card my-5 py-3 shadow">
      <Component />
    </main>
    `,
    components: {
      Layout,
      Component
    }
  })
  current.mount('#router')
}
window.addEventListener('hashchange', handleChange)
window.addEventListener('load', handleChange)