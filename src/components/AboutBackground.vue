<template>
  <section id="background">
    <div class="container_fluid mt-5">
      <div class="about py-2">
        <div class="row py-2">
          <div class="col">
            <div
              class="position-relative d-flex align-items-center justify-content-center"
            >
              <h1
                class="display-1 text-uppercase text-white"
                style="-webkit-text-stroke: 1px #4FACFE"
              >
                About
              </h1>
              <h1 class="position-absolute text-uppercase text-secondary">
                About Me
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="background-profile">
        <div class="row px-4">
          <div class="col-xxl-8 col-lg-7 col-md-7 col-sm-6">
            <div class="background-summary px-2 mt-3 mb-3">
              <h3 class="mb-4" style="color: #213A57">{{ $t(mainTitle) }}</h3>
              <p class="lead">
                {{ $t(shortDescription) }}
              </p>
              <div class="row mb-3">
                <div class="col-sm-6 py-2" v-for="(item, index) in dataInfo" :key="index">
                  <h5 class="general-info fw-light">
                    {{ $t(item.title) }} : <span class="text-secondary"> {{item.data}}</span>
                  </h5>
                </div>
                <!-- <div class="col-sm-6 py-2">
                  <h5>
                    Birthday: <span class="text-secondary">1 April 1900</span>
                  </h5>
                </div>
                <div class="col-sm-6 py-2">
                  <h5>Degree: <span class="text-secondary">Bacherlor</span></h5>
                </div>
                <div class="col-sm-6 py-2">
                  <h5>
                    Experience: <span class="text-secondary">1 Years</span>
                  </h5>
                </div>
                <div class="col-sm-6 py-2">
                  <h5>
                    Phone: <span class="text-secondary">+012 345 6789</span>
                  </h5>
                </div>
                <div class="col-sm-6 py-2">
                  <h5>
                    Email: <span class="text-secondary">chong@email.com</span>
                  </h5>
                </div>
                <div class="col-sm-6 py-2">
                  <h5>
                    Address:
                    <span class="text-secondary"
                      >123 Street, Phnom Penh, Cambodia</span
                    >
                  </h5>
                </div>
                <div class="col-sm-6 py-2">
                  <h5>
                    Freelance: <span class="text-secondary">Available</span>
                  </h5>
                </div> -->
              </div>
              <router-link to="/contact" class="btn btn-outline-primary fw-light">{{ $t('contact_me') }}</router-link>
              <!-- <a href="#" class="btn btn-outline-primary  ms-3">Learn More</a> -->
            </div>
          </div>
          <div class="col-xxl-4 col-lg-5 col-md-5 col-sm-6">
            <img
              class="img-fluid hero-photo"
              src="images/my_image.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="background-experience py-5">
        <BackgroundElement></BackgroundElement>
        <!-- <div class="row px-3 align-items-center">
          <div class="col-1"></div>
          <div class="col-lg-5 mx-3">
            <h3 class="mb-4 text-body-secondary">My Education</h3>
            <div class="border-left border-primary pt-2 pl-4 ml-2">
              <div class="position-relative mb-4"><i class="far fa-dot-circle text-primary position-absolute"
                  style="top:5px;left:-25px;"></i>
                <h5 class="font-weight-bold mb-1 text-body-secondary">Bacherlor In CSE</h5>
                <p class="mb-2 text-body-secondary"><strong>Royal University Phnom Penh</strong> | <small>2000 - 2050</small></p>
                <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est
                  tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
              </div>
              <div class="position-relative mb-4"><i class="far fa-dot-circle text-primary position-absolute"
                  style="top:5px;left:-25px;"></i>
                <h5 class="font-weight-bold mb-1 text-body-secondary">Bacherlor In CS</h5>
                <p class="mb-2 text-body-secondary"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est
                  tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
              </div>
              <div class="position-relative mb-4"><i class="far fa-dot-circle text-primary position-absolute"
                  style="top:5px;left:-25px;"></i>
                <h5 class="font-weight-bold mb-1 text-body-secondary">Bacherlor In CSE</h5>
                <p class="mb-2 text-body-secondary"><strong>Royal University Phnom Penh</strong> | <small>2000 - 2050</small></p>
                <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est
                  tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 mx-3">
            <h3 class="mb-4 text-body-secondary">My Expericence</h3>
            <div class="border-left border-primary pt-2 pl-4 ml-2">
              <div class="position-relative mb-4"><i class="far fa-dot-circle text-primary position-absolute"
                  style="top:5px;left:-25px;"></i>
                <h5 class="font-weight-bold mb-1 text-body-secondary">Web Designer</h5>
                <p class="mb-2 text-body-secondary"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est
                  tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
              </div>
              <div class="position-relative mb-4"><i class="far fa-dot-circle text-primary position-absolute"
                  style="top:5px;left:-25px;"></i>
                <h5 class="font-weight-bold mb-1 text-body-secondary">Web Designer</h5>
                <p class="mb-2 text-body-secondary"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est
                  tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
              </div>
              <div class="position-relative mb-4"><i class="far fa-dot-circle text-primary position-absolute"
                  style="top:5px;left:-25px;"></i>
                <h5 class="font-weight-bold mb-1 text-body-secondary">Web Designer</h5>
                <p class="mb-2 text-body-secondary"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est
                  tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
              </div>
            </div>
          </div>
          <div class="col-1"></div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import BackgroundElement from "@/components/sub_components/BackgroundElement.vue";
export default {
  components: {
    BackgroundElement,
  },
  data() {
    return {
      headTitle: ["about", "about me"],
      mainTitle: "main_title",
      shortDescription: "about_description" ,
      dataInfo: [
        {
          title: 'name',
          data: 'ChongEang'
        },
        {
          title: 'degree',
          data:'Bacherlor'
        },
        {
          title: 'phone',
          data:'+012 345 678'
        },
        {
          title: 'address',
          data:'123 Street, Phnom Penh, Cambodia'
        },
        {
          title: 'birthday',
          data:'1 April 1900'
        },
        {
          title: 'experience',
          data:'1 Years'
        },
        {
          title: 'email',
          data:'chong@email.com'
        },
        {
          title: 'freelance',
          data:'Available'
        },
      ]
    };
  },
};
</script>

<style scoped>
p.lead {
  font-weight: 150;
  font-size: 1.4rem;
  line-height: 1.833;
  margin-bottom: 3.6rem;
  color: #000000;
}
.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 500 !important;
  line-height: 1.2;
}

.background-experience {
  background: #213A57; 
}
</style>