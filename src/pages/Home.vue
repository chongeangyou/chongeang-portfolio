<template>
  <Hero></Hero>
  <AboutBackground />
  <PersonalSkill/>
  <MyService/>
  <MyBlog/>
  <ContactMe/>
</template>
  
  <script>
import Hero from "@/components/Hero.vue";
import AboutBackground from "@/components/AboutBackground.vue";
import PersonalSkill from "@/components/PersonalSkill.vue";
import MyService from "@/components/MyService.vue";
import MyBlog from "@/components/MyBlog.vue";
import ContactMe from "@/components/ContactMe.vue";

export default {
  name: "App",
  components: {
    Hero,
    AboutBackground,
    PersonalSkill,
    MyService,
    MyBlog,
    ContactMe
  },
};
</script>
  
  <style>
</style>
  