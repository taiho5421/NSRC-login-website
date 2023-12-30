import modalRecord from "../components/modalRecord.js"
import modalDelete from "../components/modalDelete.js"
import modalUpdate from "../components/modalUpdate.js"

export default {
  name: 'manage',
  data() {
    return {
      dataList: [],
      datas: {}
    }
  },
  mounted() {
    $.post('../../php/main.php?cmd=select').then((res) => {
      res = JSON.parse(res)
      this.dataList = res
    })
  },
  template: `
  <main v-cloak>
    <a href="#/insert" class="btn btn-outline-info">新增</a>
    <button class="btn btn-outline-info float-right" data-toggle="modal" data-target="#record">紀錄</button>
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th>編號</th>
        <th>姓名</th>
        <th>帳號</th>
        <th>密碼</th>
        <th>權限</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="dt in this.dataList" :key="dt.id">
        <td>{{dt.id}}</td>
        <td>{{dt.name}}</td>
        <td>{{dt.account}}</td>
        <td>{{dt.password}}</td>
        <td>{{dt.permissions}}</td>
        <td>
          <button class="btn btn-outline-warning" v-if="dt.permissions !== '超級管理者'" @click="choose(dt)" data-toggle="modal" data-target="#update">編輯</button>
          <button class="btn btn-outline-danger" v-if="dt.permissions !== '超級管理者'" @click="choose(dt)" data-toggle="modal" data-target="#delete">刪除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <modal-record id="record" />
    <modal-delete id="delete" :info="datas" />
    <modal-update id="update" :info="datas" />
  </main>
  `,
  methods: {
    choose(data) {
      this.datas = data
    }
  },
  computed: {

  },
  components: {
    modalRecord,
    modalDelete,
    modalUpdate
  }
}