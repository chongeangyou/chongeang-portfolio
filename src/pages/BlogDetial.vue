<template>
  <div v-for="(item, index) in dataDetail" :key="index" class="py-5 mt-5">
    <h3>{{ item.title }}</h3>
    <h4> {{ item.author }}</h4>
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
        "/title/" + this.$route.params.id;
      const response = await axios.get(url);
      const data = response.data
      this.dataDetail = data;
      console.log(this.dataDetail);
    } catch (error) {
        console.log(error)
    }
  },
  methods:{
    
  }
}
</script>
