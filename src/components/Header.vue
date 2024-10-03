<template>
  <section id="navbar">
    <nav class="navbar navbar-expand-lg bg-black bg-gradient fixed-top p-3">
      <div class="container-fluid text-light">
        <a class="navbar-brand" href="#">{{$t('chong')}} | Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <span class="navbar-text me-auto">
          </span>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item" v-for="(item, index) in navs" :key="index">
              <router-link class="nav-link" :class="{active: $route.path == item.path }" :to="item.path" > {{ $t(item.name) }}</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" :class="{active: $route.path == '/about'}" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{active: $route.path == '/skill'}" to="/skill">Skill</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{active: $route.path == '/service'}" to="/service">Service</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{active: $route.path == '/blog'}" to="/blog">Blog</router-link>
            </li> -->
            <!-- <li class="nav-item">
              <router-link class="nav-link" :class="{active: $route.path == '/contact'}" to="/contact">Contact</router-link>
            </li> -->
            <!-- <li class="nav-item">
              <router-link class="nav-link" :class="{active: $route.path == '/test'}" to="/test">Test</router-link>
            </li> -->
            <li class="nav-item">
              <button type="button" @click="changeLanguage" class="btn btn-sm btn-outline-secondary p-1 align-center mt-1">{{ $t('langCode')}}</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  data(){
    return{
      navs :[
        {
          path:'/',
          name: 'home'
        },
        {
          path: '/about',
          name: 'about'
        },
        {
          path: '/skill',
          name: 'skill'
        },
        {
          path: '/service',
          name: 'service'
        },
        {
          path: '/blog',
          name: 'blog'
        },
        {
          path: '/contact',
          name: 'contact'
        }
      ],
    }
  },
  methods:{
    changeLanguage(){
      console.log('dd')
      if(this.$i18n.locale == 'en'){
        this.$i18n.locale = 'khm';
        console.log('dpppd')
      }else{
        this.$i18n.locale = 'en'
      }
    },
  },
  
}
</script>

<style scoped>
.navbar-brand{
  color: white;
}

.nav-item>a{
  color: #6c757d
}
.nav-item .active{
  color: white
}
.navbar-toggler{
  background-color:white !important
}
</style>