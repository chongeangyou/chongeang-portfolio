<template>
  <div v-for="(item, index) in dataDetail" :key="index" class="py-5 mt-5">
    <h3>{{ item.title }}</h3>
    <p> {{ item.author }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dataDetail:[],
    };
  },
  async created() {
    try {
      const url =
        "https://poetrydb.org/title/" + this.$route.params.id;
      const response = await axios.get(url);
      const data = response.data
      this.dataDetail = data;
      console.log(this.dataDetail);
    } catch (error) {
        console.log(error)
    }
  },
}
</script>
