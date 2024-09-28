<template>
     <div class="position-relative mb-4">
          <i
            class="far fa-dot-circle text-primary position-absolute"
            style="top: 5px; left: -25px"
          ></i>
          <h5 class="font-weight-bold mb-1 text-body-secondary">
            {{ title }}
          </h5>
          <p class="mb-2 text-body-secondary">
            <strong>{{ company }}</strong> | <small>{{year}}</small>
          </p>
          <p>
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
  
  <style>
  </style>