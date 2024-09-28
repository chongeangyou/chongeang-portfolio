<template>
  <div class="about">
    <div class="row py-2">
      <div class="col">
        <div class="position-relative d-flex align-items-center justify-content-center">
          <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6">
            {{ firstTitle }}
          </h1>
          <h1 class="position-absolute text-uppercase text-info">
            {{ secondTitle }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["firstTitle", "secondTitile"],
};
</script>

<style>
</style>