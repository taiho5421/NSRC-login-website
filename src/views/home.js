export default {
  name: 'home',
  data() {
    return {

    }
  },
  mounted() {

  },
  template: `
  <main class="carousel" id="demo" data-ride="carousel">
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
      <li data-target="#demo" data-slide-to="3"></li>
      <li data-target="#demo" data-slide-to="4"></li>
    </ul>
    <section class="carousel-inner">
      <article class="carousel-item active">
        <img src="../../img/image_1.jpg" class="d-block w-100 image" alt="load.">
        <div class="carousel-caption d-none d-md-block">
          <h5>First Image</h5>
          <p>Lightning shines in the sky</p>
        </div>
      </article>
      <article class="carousel-item">
        <img src="../../img/image_2.jpg" class="d-block w-100 image" alt="load.">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second Image</h5>
          <p>A meteor streaks across the sky</p>
        </div>
      </article>
      <article class="carousel-item">
        <img src="../../img/image_3.jpg" class="d-block w-100 image" alt="load.">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third Image</h5>
          <p>Elegant Paintings</p>
        </div>
      </article>
      <article class="carousel-item">
        <img src="../../img/image_4.jpg" class="d-block w-100 image" alt="load.">
        <div class="carousel-caption d-none d-md-block">
          <h5>Fourth Image</h5>
          <p>The night is coming</p>
        </div>
      </article>
      <article class="carousel-item">
        <img src="../../img/image_5.jpg" class="d-block w-100 image" alt="load.">
        <div class="carousel-caption d-none d-md-block">
          <h5>Fifth Image</h5>
          <p>The Holy City</p>
        </div>
      </article>
    </section>
    <button class="carousel-control-prev" data-target="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Prev</span>
    </button>
    <button class="carousel-control-next" data-target="#demo" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </main>
  `,
  methods: {

  },
  computed: {

  }
}