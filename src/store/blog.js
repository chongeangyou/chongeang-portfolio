import axios from "axios";
import { defineStore } from "pinia";
import { articleAPI } from "@/utils/api.js";

export const useBlogArticleStore = defineStore('aritlces', {
    state: () =>({
        articles: []
    }),
    actions: {
        async getBlogArticles(){
            try {
                // const url = "/v1/courses"
                // const response = await axios.get(url)
                const response = await axios.get(articleAPI());
                const article = response.data;
                this.articles = article;
                console.log(this.articles);
              } catch (error) {
                console.log(error);
              }
        }
    }
})

export default useBlogArticleStore