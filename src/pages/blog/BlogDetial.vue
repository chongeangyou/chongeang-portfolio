<template>
  <div class="container">
    <div class="row">
      <div class="col-xxl-12 py-5 mt-5">
        <div
          v-for="(item, index) in dataDetail"
          :key="index"
          class=""
          style="max-width: 100%"
        >
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.author }}</p>
          <p>{{ item.linecount }}</p>
        </div>
        <router-link class="btn btn-outline-info" to="/blog">back</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dataDetail: [],
    };
  },
  async created() {
    try {
      const url =
        `${process.env.VUE_APP_URL}` + "/title/" + this.$route.params.id;
      const response = await axios.get(url);
      const data = response.data;
      this.dataDetail = data;
      console.log(this.dataDetail);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {},
};
</script>
