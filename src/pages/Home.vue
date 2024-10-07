<template>
  <Hero></Hero>
  <AboutBackground />
  <Skill/>
  <Service/>
  <Blog/>
  <Contact/>
  
</template>
  
  <script>
import Hero from "@/components/Hero.vue";
import AboutBackground from "@/components/AboutBackground.vue";
import Skill from "@/pages/Skill.vue";
import Blog from "@/pages/blog/Blog.vue";
import Contact from "@/pages/Contact.vue";
import Service from "@/pages/service/Service.vue";

export default {
  name: "App",
  components: {
    Hero,
    AboutBackground,
    Skill,
    Service,
    Blog,
    Contact
  },
};
</script>
  
  <style>
</style>
  