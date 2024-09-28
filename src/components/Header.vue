<template>
  <section id="navbar">
    <nav class="navbar navbar-expand-lg bg-black bg-gradient fixed-top p-4">
      <div class="container-fluid text-light">
        <a class="navbar-brand" href="#">Chong | Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <span class="navbar-text me-auto">
          </span>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#navbar">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#background">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skill">Skill</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-outline-secondary p-1">English</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {

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