export default {
  props: ['info'],
  name: 'VueHome',
  data() {
    return {
      title: 'HOME',
      dataList: {
        components: false,
        user: null,
        account: null
      }
    }
  },
  mounted() {
    $.post('../../php/main.php?cmd=info').then((res) => {
      res = JSON.parse(res)
      this.dataList = res
      console.log(this.dataList)
    })
  },
  template: `
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" href="#/">{{title}}</a>
    <ul class="navbar-nav" v-if="this.dataList['competence'] !== false">
      <li class="nav-item">
        <a class="nav-link" href="#/manage">manage</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/insert">insert</a>
      </li>
    </ul>
    <span class="ml-auto">
      <span v-if="this.dataList.account !== null">
        <span class="text-white mx-2">身份:</span>
      <span style="color: darkgray">{{this.dataList['user']}}&nbsp;</span>
      <span class="text-white mx-2">帳號:</span>
      <span style="color: darkgray;">{{this.dataList['account']}}&nbsp;</span>
      </span>
      <a class="btn btn-outline-success" href="#/sign" v-if="this.dataList['account'] === null">LogIn</a>
      <a class="btn btn-outline-danger" href="#/sign" v-if="this.dataList['account'] !== null" @click="sign_out">SignOut</a>
    </span>
  </nav>
  `,
  methods: {
    sign_out() {
      $.post('../../php/main.php?cmd=SignOut')
    }
  },
  computed: {

  },
  components: {

  }
}