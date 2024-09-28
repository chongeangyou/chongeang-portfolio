<template>
  <div class="row px-3 align-items-center">
    <div class="col-1"></div>
    <div class="col-lg-5 mx-3">
      <h3 class="mb-4 text-body-secondary">Educations</h3>
      <div class="border-left border-primary pt-2 pl-4 ml-2">
        <EducationBackground v-for="(item, index) in educations" 
        :key="index"
        :title="item.title"
        :name="item.name"
        :year="item.year"
        :description="item.description"
        >
      </EducationBackground>
      </div>
    </div>
    <div class="col-lg-5 mx-3">
      <h3 class="mb-4 text-body-secondary">My Expericence</h3>
      <div class="border-left border-primary pt-2 pl-4 ml-2">
        <ExperienceBackground v-for="(item, index) in experiences"
          :key="index"
          :title="item.title"
          :company="item.company"
          :year="item.year"
          :description="item.description"
        >

        </ExperienceBackground>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
import EducationBackground from '@/components/sub_components/EducationBackground.vue';
import ExperienceBackground from './ExperienceBackground.vue';
export default {
    components:{
      EducationBackground,
      ExperienceBackground
    },

    data(){
        return{
            educations:[
                {
                    title: 'Bacherlor In CSE',
                    name: 'Royal University Phnom Penh',
                    year: '2000 - 2050',
                    description: " Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor e ",
                },
                {
                    title: 'Bacherlor In CSE',
                    name: 'Royal University Phnom Penh',
                    year: '2000 - 2050',
                    description: " Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor e ",
                },
                {
                    title: 'Bacherlor In CSE',
                    name: 'Royal University Phnom Penh',
                    year: '2000 - 2050',
                    description: " Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor e ",
                },
            ],
             experiences:[
                {
                    title: 'Bacherlor In CSE',
                    company: 'Royal University Phnom Penh',
                    year: '2000 - 2050',
                    description: " Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor e ",
                },
                {
                    title: 'Bacherlor In CSE',
                    company: 'Royal University Phnom Penh',
                    year: '2000 - 2050',
                    description: " Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor e ",
                },
                {
                    title: 'Bacherlor In CSE',
                    company: 'Royal University Phnom Penh',
                    year: '2000 - 2050',
                    description: " Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor e ",
                },
            ]
        }
    }

};
</script>

<style>
</style>