<template>
   <section id="contact">
    <div class="container_fluid mt-5">
      <div class="contact_me py-2">
        <div class="row py-2">
          <div class="col">
            <div class="position-relative d-flex align-items-center justify-content-center">
              <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke:1px #1488CC;">Contact
              </h1>
              <h1 class="position-absolute text-uppercase text-secondary">Contact Me</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="form_contact mx-5">
        <div class="intro-contact px-2">
          <p class="lead">
            If you'd like to get in touch with me, please fill out the form below, and I will respond to your inquiry as soon as possible. I look forward to assisting you with your project!
          </p>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <Form class="row g-3 text-secondary">
              <div class="col-md-6">
                <label for="inputFullname" class="Form-label">You Fullname</label>
                <Field type="text" class="form-control border-secondary" name="fullname" :rules="nameRule" :v-model="fullname" id="fullname" placeholder="Please input your fullname" />
                <ErrorMessage name="fullname"/>
              </div>
              <div class="col-md-6">
                <label for="inputEmail" class="form-label mb-0">You Email</label>
                <Field type="text" class="form-control border-secondary" name="email" :rules="emailRule" :v-model="email" id="inputEmail" placeholder="Please input your eamail" />
                <ErrorMessage name="email"/>
              </div>
              <div class="col-12">
                <label for="inputSubject" class="form-label">Subject</label>
                <Field type="text" class="form-control border-secondary" name="subject" :rules="subjectRule" :v-model="subject" id="inputSubject" placeholder="What is your subject?" />
                <ErrorMessage name="subject"/>
              </div>
              <div class="col-12">
                <label for="inputMessage" class="form-label">Message</label>
                <Field class="form-control border-secondary" name="message" :rules="messageRule" :v-model="message" type="text" id="inputMessage" rows="3" placeholder="Input your message" />
                <ErrorMessage name="message"/>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" name="check" type="checkbox" id="gridCheck">
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div class="col-12 ">
                <button type="submit" class="btn btn-outline-primary text-uppercase">Send Message</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate"
import * as Yup from "yup"
export default {
  components: { Form, Field, ErrorMessage },
  data(){
    return{
      fullname: '',
      email: '',
      subject:'',
      message: '',
      check:'',
      nameRule: Yup.string().required(),
      emailRule: Yup.string().email().required(),
      subjectRule: Yup.string().required(),
      messageRule: Yup.string().required()
    }
  }
}
</script>

<style scoped>
 .submit-text{
  color: #1488CC
 }
 p.lead{
  font-weight: 150;
  font-size: 1.4rem;
  line-height: 1.833;
  margin-bottom: 3.6rem;
  color: #000000;
 }
 ErrorMessage {
  color:red
 }
</style>