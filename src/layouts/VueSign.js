export default {
  name: 'VueSign',
  data() {
    return {
      title: 'Sign'
    }
  },
  mounted() {

  },
  template: `
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" href="#/sign">{{title}}</a>
    <a class="btn btn-outline-danger ml-auto" href="#/">Back</a>
  </nav>
  `,
  methods: {

  },
  computed: {

  }
}