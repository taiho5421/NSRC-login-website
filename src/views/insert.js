export default {
  name: 'modalInsert',
  data() {
    return {
      info: {
        name: '',
        account: '',
        password: '',
        permissions: '使用者'
      }
    }
  },
  mounted() {

  },
  template: `
    <main>
      <h2>Insert</h2>
      <div class="form-group">
        <label>name:</label>
        <input class="form-control" v-model="info.name" placeholder="please enter name...">
      </div>
      <div class="form-group">
        <label>account:</label>
        <input class="form-control" v-model="info.account" placeholder="please enter account...">
      </div>
      <div class="form-group">
        <label>password:</label>
        <input class="form-control" v-model="info.password" placeholder="please enter password...">
      </div>
      <div class="form-group">
        <label>permissions:</label>
        <select class="form-control" v-model="info.permissions">
          <option value="使用者" selected>使用者</option>
          <option value="管理者">管理者</option>
        </select>
      </div>
      <button class="btn btn-outline-success" data-dismiss="modal" @click="insert_data">確定</button>
    </main>
  `,
  methods: {
    insert_data() {
      $.post('../../php/main.php?cmd=insert', JSON.stringify(this.info))
    }
  },
  computed: {

  }
}