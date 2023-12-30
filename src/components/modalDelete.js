export default {
  props: ['info'],
  name: 'modalDelete',
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
            <h3>Delete</h3>
            <button class="close" data-dismiss="modal">&times;</button>
          </section>
          <section class="modal-body" style="max-height: 55vh; overflow: auto">
            <p class="text-danger">確定刪除？後果自負。</p>
          </section>
          <section class="modal-footer">
            <button class="btn btn-outline-success" data-dismiss="modal" @click="delete_data">確定</button>
          </section>
        </div>
      </div>
    </div>
  `,
  methods: {
    delete_data() {
      $.post('../../php/main.php?cmd=delete', JSON.stringify(this.info))
    }
  },
  computed: {

  }
}