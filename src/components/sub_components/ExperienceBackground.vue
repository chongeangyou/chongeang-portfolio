<template>
     <div class="position-relative mb-4">
          <i
            class="far fa-dot-circle text-des position-absolute"
            style="top: 5px; left: -25px"
          ></i>
          <h5 class="fw-light mb-1 text-white">
            {{ title }}
          </h5>
          <p class="fw-light mb-2 text-white">
            <strong>{{ company }}</strong> | <small>{{year}}</small>
          </p>
          <p class="text-des">
            {{description}}
          </p>
        </div>
</template>
  
  <script>
  export default {
    props: [
      
        "title",
         "company",
         "year",
         "description",
    ],
  };
  </script>
  
  <style scoped>
    .text-des{
      color:  #c7d0d8
    }
  </style>