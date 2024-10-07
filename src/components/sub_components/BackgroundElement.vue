<template>
  <div class="row px-3 align-items-center">
    <div class="col-1"></div>
    <div class="col-lg-5 mx-3">
      <h3 class="mb-4 text-white">{{$t('education')}}</h3>
      <div class="border-left border-primary pt-2 pl-4 ml-2">
        <EducationBackground v-for="(item, index) in educations" 
        :key="index"
        :title="$t(item.title)"
        :name="$t(item.name)"
        :year="$t(item.year)"
        :description="$t(item.description)"
        >
      </EducationBackground>
      </div>
    </div>
    <div class="col-lg-5 mx-3">
      <h3 class="mb-4 text-white">{{$t('experiences')}}</h3>
      <div class="border-left border-primary pt-2 pl-4 ml-2">
        <ExperienceBackground v-for="(item, index) in experiences"
          :key="index"
          :title="$t(item.title)"
          :company="$t(item.company)"
          :year="$t(item.year)"
          :description="$t(item.description)"
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
                    title: 'university_major',
                    name: 'university_name',
                    year: 'university_year',
                    description: "university_desc",
                },
                {
                    title: 'highschool_title',
                    name: 'highschool',
                    year: 'highschool_year',
                    description: "highschool_desc",
                },
                {
                    title: 'secondaryschool_title',
                    name: 'secondaryschool',
                    year: 'secondaryschool_year',
                    description: "secondary_desc",
                },
            ],
             experiences:[
                {
                    title: 'mptc_role',
                    company: 'mptc',
                    year: 'mptc_year',
                    description: 'mptc_desc',
                },
                {
                    title: 'web_dev',
                    company: 'web_freelance',
                    year: 'web_dev_year',
                    description: "web_dev_desc",
                },
                {
                    title: 'web_intern',
                    company: 'web_mc',
                    year: 'web_intern_year',
                    description: 'web_intern_desc',
                },
            ]
        }
    }

};
</script>

<style>
</style>