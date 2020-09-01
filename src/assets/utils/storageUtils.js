import store from '@/store/store.js';

const LOCAL_LANG = "local_lang";

export default {
    setLang(lang) {
        localStorage.setItem(LOCAL_LANG,lang);
        store.commit('setLang',lang);
    },
    getLang() {
        return localStorage.getItem(LOCAL_LANG) || document.documentElement.lang;
    },
    removeLang() {
        localStorage.removeItem(LOCAL_LANG)
    }
}