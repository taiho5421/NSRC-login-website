export default {
  props: ['info'],
  name: 'modalRecord',
  data() {
    return {
      dataList: []
    }
  },
  mounted() {
    $.post('../../php/main.php?cmd=record').then((res) => {
      res = JSON.parse(res)
      this.dataList = res
    })
  },
  template: `
  <div class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <section class="modal-header">
          <h3>Records</h3>
          <button class="close" data-dismiss="modal">&times;</button>
        </section>
        <section class="modal-body" style="max-height: 55vh; overflow: auto">
          <table class="table table-hover table-bordered table-striped">
            <thead>
            <tr>
              <th>編號</th>
              <th>時間</th>
              <th>帳號</th>
              <th>操作</th>
              <th>結果</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="dt in dataList" :key="dt.id">
                <td>{{dt.id}}</td>
                <td>{{dt.time}}</td>
                <td>{{dt.account}}</td>
                <td>{{dt.state}}</td>
                <td :class="{'text-danger': dt.result === '失敗', 'text-success': dt.result === '成功'}">{{dt.result}}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </div>
  `,
  methods: {

  },
  computed: {

  }
}