<template>
  <section id="blog">
    <div class="container_fluid mt-5">
      <div class="my_blog pt-2">
        <div class="row pt-2">
          <div class="col">
            <div
              class="position-relative d-flex align-items-center justify-content-center"
            >
              <h1
                class="display-1 text-uppercase text-white"
                style="-webkit-text-stroke: 1px #00f2fe"
              >
                blog
              </h1>
              <h1 class="position-absolute text-uppercase text-secondary">
                Lates Articles
              </h1>
            </div>
          </div>
        </div>
        <div class="blog_item px-3">
          <div class="row">
            <!-- <BlogCard
              v-for="(item, index) in articles" :key="index"
              :title="item.title"
              :description="item.shortDescription"
            >
            </BlogCard> -->
            <BlogCard
            :title="articles.reference"
            :description="articles.text"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogCard from "@/components/sub_components/BlogCard.vue";
import axios from "axios";
import { courseAPI } from "@/utils/api.js";
export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      blogDatas: [
        {
          title: "Vue JS 3",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
          title: "Vue JS 3",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
      ],
      articles: []
    };
  },
  async created() {
    try {
      // const url = "/v1/courses"
      // const response = await axios.get(url)
      const response = await axios.get(courseAPI())
      const article = response.data
      this.articles = article;
      console.log(this.articles)
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
</style>