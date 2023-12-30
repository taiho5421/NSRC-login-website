export default {
  props: ['info'],
  name: 'modalUpdate',
  data() {
    return {

    }
  },
  mounted() {

  },
  template: `
    <div class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <section class="modal-header">
            <h3>Update</h3>
            <button class="close" data-dismiss="modal">&times;</button>
          </section>
          <section class="modal-body" style="max-height: 55vh; overflow: auto">
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
          </section>
          <section class="modal-footer">
            <button class="btn btn-outline-success" data-dismiss="modal" @click="update_data">確定</button>
          </section>
        </div>
      </div>
    </div>
  `,
  methods: {
    update_data() {
      $.post('../../php/main.php?cmd=update', JSON.stringify(this.info))
    }
  },
  computed: {

  }
}