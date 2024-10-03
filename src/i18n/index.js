import { createI18n } from "vue-i18n";

const messages = {
    en: {
        home: 'Home',
        about: 'About',
        skill: 'Skill',
        service: 'Service',
        blog: 'Blog',
        contact: 'Contact',
        langCode: 'English',
        iam:"I'm",
        welcome: 'Welcome to my portfolio',
        developer: 'Developer',
        freelancer: 'Freelancer',
        blogger: 'Blogger',
        main_title: 'Web Developer & Blogger',
        about_description: 'A Web Developer and Blogger designs and develops websites. I also create and manage blog content. This role combines coding skills with writing. It ensures seamless website functionality and engaging user experiences.',
        name: 'Name',
        phone: 'Phone',
        birtday: 'Birthday',
        email: 'Email',
        degree: 'Degree',
        address: 'Address',
        experience: 'Experience',
        freelance: 'Freelance',


        skill_description: "I have strong programming skills in JavaScript, HTML, and CSS, which allow me to build dynamic, responsive web interfaces. I'm proficient in Vue.js, using its reactive framework to create seamless user experiences. Additionally, I have experience with PHP and Laravel, enabling me to develop robust back-end solutions and integrate front-end and back-end systems efficiently.",

        service_description:'I offer comprehensive services in development projects, focusing on creating functional and efficient web applications. My expertise in design ensures visually appealing and user-friendly interfaces, while my hosting services provide reliable and secure environments for websites and applications to run smoothly.',
        dev_description: 'Provide professional development services focused on creating high-quality web applications and platforms. .',
        design_description: 'With attention to detail and a deep understanding of user experience (UX) principles, I craft designs that enhance functionality and engagement.',
        host_description: 'My hosting solutions offer fast performance, high uptime, and robust security measures to protect your data',
        view_more: 'View details',

        blog_description: 'On my portfolio blog, I regularly post content about web development, sharing insights and tips on JavaScript, Vue.js, Laravel, and other technologies I work with. I also cover topics related to design principles, project development, and the importance of secure and reliable hosting. My blog aims to provide valuable resources for developers and clients alike.',
        contact_description: "If you'd like to get in touch with me, please fill out the form below, and I will respond to your inquiry as soon as possible. I look forward to assisting you with your project",
        full_name: 'Full Name',
        contact_email:'Email',
        subject:'Phone',
        message: 'Message',
        check:'Check me out',
        submit: 'Submit'
    
    },
    khm: {
        home: 'ទំព័រដើម',
        about: 'អំពីខ្ញុំ',
        skill: 'ជំនាញ',
        service: 'សេវាកម្ម',
        blog: 'អត្ថបទ',
        contact: 'ទំនាក់ទំនង',
        langCode: 'ភាសាខ្មែរ',
        iam:"ខ្ញុំ គឺ",
        welcome: "សួស្ដីការមកកាន់ Portfolio របស់ខ្ញុំ",
        developer: 'អ្នកភិវឌ្ឍកម្មវិធី',
        freelancer: 'Freelancer',
        blogger: 'អ្នកសរសេរប្លុក',
        main_title: 'អ្នកសរសេរវេបសាយ និងប្លុក',
        about_description: 'ជាអ្នកបង្កើតគេហទំព័រ និង Blogger រចនា និងអភិវឌ្ឍគេហទំព័រ។ ហើយខ្ញុំក៏ធ្វើការ លើការបង្កើត និងគ្រប់គ្រងមាតិកាប្លុកផងដែរ។ តួនាទីនេះរួមបញ្ចូលគ្នានូវជំនាញសរសេរកូដជាមួយនឹងការសរសេរ ហើយ ធានានូវមុខងារគេហទំព័រគ្មានបញ្ហា និងនាំនូវបទពិសោធន៍ល្អសម្រាប់អ្នកប្រើប្រាស់។',
        name: 'ឈ្មោះ',
        phone: 'លេខទូរសព្ទ',
        birthday: 'ថ្ងៃកំណើត',
        email: 'អ៉ីមែល',
        degree: 'កម្រិសិក្សា',
        address: 'អាសយដ្ឋាន',
        experience: 'បទពិសោធន៍',
        freelance: 'ទទួលការងារក្រៅ',

        skill_description: "ខ្ញុំមានជំនាញសរសេរកម្មវិធីនៅជាមួយ JavaScript, HTML, និង CSS ដែលអនុញ្ញាតឱ្យខ្ញុំបង្កើតនូវកម្មវិធីសម្រាប់ដោះស្រាយបញ្ហាផ្សេងៗដោយបច្ចេកវិទ្យា។ ខ្ញុំមានបទពិសោធជាមួយ Vue.js ដោយប្រើ ដើម្បីបង្កើតវេបសាយ លើសពីនេះ ខ្ញុំមានបទពិសោធន៍ជាមួយ PHP និង Laravel ដែលអាចឱ្យខ្ញុំបង្កើតដំណោះស្រាយផ្នែកខាងក្រោយដ៏រឹងមាំ និងរួមបញ្ចូលប្រព័ន្ធផ្នែកខាងមុខ និងផ្នែកខាងក្រោយប្រកបដោយប្រសិទ្ធភាព។ ",

        service_description:'ខ្ញុំផ្តល់ជូននូវសេវាកម្មដ៏ទូលំទូលាយនៅក្នុងគម្រោងអភិវឌ្ឍន៍ ដោយផ្តោតលើការបង្កើតកម្មវិធីគេហទំព័រដែលមានមុខងារ និងប្រសិទ្ធភាព។ ជំនាញរបស់ខ្ញុំក្នុងការរចនាធានានូវចំណុចប្រទាក់ដែលទាក់ទាញដោយមើលឃើញ និងងាយស្រួលប្រើ ខណៈពេលដែលសេវាកម្មបង្ហោះរបស់ខ្ញុំផ្តល់នូវបរិយាកាសដែលអាចទុកចិត្តបាន និងមានសុវត្ថិភាពសម្រាប់គេហទំព័រ និងកម្មវិធីដើម្បីដំណើរការយ៉ាងរលូន។',
        dev_description: 'ផ្តល់សេវាកម្មអភិវឌ្ឍន៍ប្រកបដោយវិជ្ជាជីវៈ ផ្តោតលើការបង្កើតកម្មវិធី និងវេទិកាគេហទំព័រគុណភាពខ្ពស់។',
        design_description: 'ដោយយកចិត្តទុកដាក់ចំពោះព័ត៌មានលម្អិត និងការយល់ដឹងស៊ីជម្រៅអំពីគោលការណ៍បទពិសោធន៍អ្នកប្រើប្រាស់ (UX/UI)',
        host_description: 'ដំណោះស្រាយបង្ហោះរបស់ខ្ញុំផ្តល់នូវដំណើរការលឿន ពេលវេលាដំណើរការខ្ពស់ និងវិធានការសុវត្ថិភាពដ៏រឹងមាំដើម្បីការពារទិន្នន័យរបស់អ្នក',
        view_more: 'អានលំអិត',

        blog_description: 'នៅលើប្លក់របស់ខ្ញុំ ខ្ញុំបានបង្ហោះមាតិកាអំពីគេហទំព័រជាប្រចាំ ការអភិវឌ្ឍន៍ ការចែករំលែកការយល់ដឹង និងការណែនាំអំពី JavaScript, Vue.js, Laravel និងបច្ចេកវិទ្យាផ្សេងទៀតដែលខ្ញុំធ្វើការជាមួយ ទាក់ទងនឹងគោលការណ៍នៃការរចនា ការអភិវឌ្ឍន៍គម្រោង និង សារៈសំខាន់នៃការបង្ហោះសុវត្ថិភាព និងអាចទុកចិត្តបាន។ ប្លុករបស់ខ្ញុំមានគោលបំណងផ្តល់ ធនធានដ៏មានតម្លៃសម្រាប់អ្នកអភិវឌ្ឍន៍ និងអតិថិជនដូចគ្នា។',
        contact_description: 'ប្រសិនបើអ្នកចង់ទាក់ទងមកខ្ញុំ សូមបំពេញទម្រង់ខាងក្រោម ហើយខ្ញុំនឹងឆ្លើយតបទៅនឹងសំណួររបស់អ្នកឱ្យបានឆាប់តាមដែលអាចធ្វើទៅបាន ខ្ញុំរង់ចាំជួយអ្នកក្នុងគម្រោងរបស់អ្នក!',
        full_name: 'ឈ្មោរបស់អ្នក',
        contact_email:'អ៉ីមែល',
        subject:'ប្រធានបទ',
        message: 'សារបន្ថែម',
        check:'Check me out',
        submit: 'បញ្ជូន'


    }

}

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
})
export default i18n