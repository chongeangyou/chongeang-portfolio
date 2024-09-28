<template>
  <section id="profile-photo">
    <div class="container-fluid p-0 m-0">
      <!-- about photo hero -->
      <div class="hero-profile">
        <div class="row">
          <div
            class="col-xxl-6 col-lg-6 col-md-6 col-sm-12 img-profile text-center"
          >
            <img
              class=".img-fluid img-image"
              src="images/my_image2.jpeg"
              alt=""
            />
          </div>
          <div class="col-xxl-6 col-lg-6 col-md-6 col-sm-12 text-profile px-5">
            <div>
              <h2 class="text-intro">Hi I'm</h2>
              <h1
                class="display-1 text-uppercase text-white"
                style="-webkit-text-stroke: 1px #dee2e6"
              >
                Chong Eang
              </h1>
              <h2 class="text-intro">This is<span>my Portfolio</span></h2>
              <span id="typedMessage" class="typed">{{ typed }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Typed from 'typed.js'
export default {
  data(){
    return{
       typed: ''
    }
  },
  mounted() {
      console.log('show sth');
      this.typed = new Typed('#typedMessage', {
         strings: ['Designer', 'Developer', 'Freelancer'],
         typeSpeed: 150,
         loop: "true"
      });
   }
};
</script>

<style>
</style>