<template>
  <div class="position-relative mb-4">
    <i
      class="far fa-dot-circle position-absolute text-des"
      style="top: 5px; left: -25px"
    ></i>
    <h5 class="fw-light mb-1 text-white">
      {{ title }}
    </h5>
    <p class="fw-light mb-2 text-white">
      <strong>{{ name }}</strong> |
      <small>{{ year }}</small>
    </p>
    <p class="text-des">
      {{ description }}
    </p>
  </div>
  <!-- <div class="position-relative mb-4">
          <i
            class="far fa-dot-circle text-primary position-absolute"
            style="top: 5px; left: -25px"
          ></i>
          <h5 class="font-weight-bold mb-1 text-body-secondary">
            Bacherlor In CS
          </h5>
          <p class="mb-2 text-body-secondary">
            <strong>Cambridge University</strong> | <small>2000 - 2050</small>
          </p>
          <p>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </p>
        </div>
        <div class="position-relative mb-4">
          <i
            class="far fa-dot-circle text-primary position-absolute"
            style="top: 5px; left: -25px"
          ></i>
          <h5 class="font-weight-bold mb-1 text-body-secondary">
            Bacherlor In CSE
          </h5>
          <p class="mb-2 text-body-secondary">
            <strong>Royal University Phnom Penh</strong> |
            <small>2000 - 2050</small>
          </p>
          <p>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </p>
        </div> -->
</template>

<script>
export default {
  props: [
    
      "title",
       "name",
       "year",
       "description",
  ],
};
</script>

<style scoped>
.text-des{
      color: #c7d0d8
    }
</style>