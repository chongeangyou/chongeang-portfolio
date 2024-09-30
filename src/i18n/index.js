import { createI18n } from "vue-i18n";

const messages = {
    en: {
        home: 'Home',
        about: 'About',
        skill: 'Skill',
        service: 'Service',
        blog: 'Blog',
        contact: 'Contact',
        langCode: 'English'
    },
    khm: {
        home: 'ទំព៏រដើម',
        about: 'អំពីខ្ញុំ',
        skill: 'ជំនាញ',
        service: 'សេវាកម្ម',
        blog: 'ប្លុក',
        contact: 'ទំនាក់ទំនង',
        langCode: 'ភាសាខ្មែរ'
    }

}

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
})
export default i18n