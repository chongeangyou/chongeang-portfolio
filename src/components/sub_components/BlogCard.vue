<template>
  <div class="col-lg-3 col-md-6 mb-5">
    <div class="card position-relative h-100">
      <img src="images/blog1.jpg" class="card-img-top" alt="..." />
      <!-- <div class="blog-date">
        <h4 class="font-weight-bold mb-n1">01</h4>
        <small class="text-white text-uppercase">Jan</small>
      </div> -->
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ description }}
        </p>
      </div>
      <div class="card-footer">
        <router-link class="btn btn-sm btn-outline-info" :to="`/blog/${url}`">Read More</router-link>
        <small class="text-muted ms-2">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "url"]
}
</script>

<style>
</style>