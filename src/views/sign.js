export default {
  name: 'sign',
  data() {
    return {
      ms: this.re_cha(),
      dataList: {
        account: '',
        password: '',
        captcha: []
      }
    }
  },
  mounted() {

  },
  directives: {
    draggable: {
      mounted(el, binding) {
        $(el).draggable({
          revert: true,
          cursor: 'grabbing',
          drag(_, ui) {
            ui.helper.data('value', binding.value)
          }
        });
      },
      beforeUnmount(el, binding) {
        $(el).draggable('destroy')
      }
    },
    droppable: {
      mounted(el, binding) {
        $(el).droppable({
          hoverClass: 'ui-state-hover',
          drop(_, ui) {
            binding.instance.dataList.captcha[binding.value] = ui.helper.data('value')
          }
        })
      },
      beforeUnmount(el, binding) {
        $(el).droppable('destroy')
      }
    }
  },
  template: `
  <div class="container col-5">
    <section class="text-center">
      <h3>LogIn System</h3>
    </section>
    <section>
      <article class="form-group">
        <label>account:</label>
        <input class="form-control" placeholder="please enter your account..." v-model="dataList.account">
      </article>
      <article class="form-group">
        <label>password:</label>
        <input class="form-control" placeholder="please enter your password..." v-model="dataList.password">
      </article>
      <article class="form-group">
        <label class="d-block">captcha:<small class="text-danger">use ASCII to sort</small></label>
        <button class="btn btn-sm btn-outline-secondary mx-1" @click="re_cha">Re Captcha</button>
        <img :src="'../../php/img.php?i='+ t + '&' + this.ms" alt="fail." v-for="t in [0, 1, 2, 3]" class="img" v-draggable="t">
        <span class="mx-1"></span>
        <img :src="'../../php/img.php?i='+ dataList.captcha[t]" alt="" v-for="t in [0, 1, 2, 3]" class="img" v-droppable="t">
      </article>
      <button class="btn btn-info mx-1 my-2" @click="clean">Clean</button>
      <button class="btn btn-info mx-1 my-2" @click="submit">Done</button>
    </section>
  </div>
  `,
  methods: {
    re_cha() {
      $.post('../../php/gen.php').then(() => {
        return new Date().getMilliseconds()
      })
    },
    clean() {
      this.dataList = { account: '', password: '', captcha: [] }
    },
    submit() {
      $.post('../../php/main.php?cmd=LogIn', JSON.stringify(this.dataList)).then((res) =>{
        res = JSON.parse(res)
        if (res['fail'] >= 3)
          window.location.href = '../../php/fail.php'
        if (res['state'] === 1)
          window.location.href = '../../../NSRC-login-website/public/index.html'
        else
          console.log(res['message'])
      })
    },
  },
  computed: {

  }
}