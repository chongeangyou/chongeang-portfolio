<template>
   <section id="contact">
    <div class="container_fluid">
      <div class="contact_me">
        <div class="row py-2">
          <div class="col">
            <div class="position-relative d-flex align-items-center justify-content-center">
              <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke:1px #6c757d;">Contact
              </h1>
              <h1 class="position-absolute text-uppercase text-secondary">Contact Me</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="form_contact mx-5">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <form class="row g-3 text-secondary">
              <div class="col-md-6">
                <label for="inputFullname" class="form-label">You Fullname</label>
                <input type="text" class="form-control border-secondary" id="fullname" placeholder="Please input your fullname">
              </div>
              <div class="col-md-6">
                <label for="inputEmail" class="form-label">You Email</label>
                <input type="text" class="form-control border-secondary" id="inputEmail" placeholder="Please input your eamail">
              </div>
              <div class="col-12">
                <label for="inputSubject" class="form-label">Subject</label>
                <input type="text" class="form-control border-secondary" id="inputSubject" placeholder="What is your subject?">
              </div>
              <div class="col-12">
                <label for="inputMessage" class="form-label">Message</label>
                <textarea class="form-control border-secondary" type="text" id="inputMessage" rows="3" placeholder="Input your message"></textarea>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck">
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div class="col-12 ">
                <button type="submit" class="btn btn-secondary text-uppercase text-white">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>