<template>
  <Header />
  <Hero></Hero>
  <AboutBackground />
  <Footer />
</template>
  
  <script>
//import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import AboutBackground from "@/components/AboutBackground.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Footer,
    AboutBackground,
  },
};
</script>
  
  <style>
</style>
  