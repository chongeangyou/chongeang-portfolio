<template>
  
     <div>
      <section class="py-5">
        <div
          class="d-flex justify-content-center align-items-center flex-column text-center w-100"
        >
          <div class="bg_img w-50">
          </div>
          <div>
            <p class="display-4">{{ $t(welcomeTitle) }}</p>
            <p class="display-6">{{ $t(welcomeDetial) }}</p>
            <router-link
              to="/service"
              class="text-white text-decoration-none px-4 py-3 bg-success d-inline-block mt-2 rounded"
            >
              {{ $t(goHome) }}
          </router-link>
          </div>
        </div>
      </section>
    </div>
    </template>
    
    <script>

    export default {
        components: {
        },
        data(){
            return{
                welcomeTitle: 'welcome_title',
                welcomeDetial: 'welcome_detial',
                goHome: 'go_home'
            }
        }
    };
    </script>

    <style scoped>
    
    .bg_img {
      /* background: url("https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220131222755/Vue.js-Tutorial.png"); */
      height: 300px; 
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    </style>