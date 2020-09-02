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
    },
    getWinH() {
        let winH = document.documentElement.clientHeight;
        return winH;
    },
    scrollHeight(winHeight,otherHeight) {
        let conHeight = winHeight - otherHeight;
        return `${conHeight}px`;
    },
    isMobile() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            localStorage.setItem('is_mobile',1);
            return 1 // 手机端
          } else {
            localStorage.setItem('is_mobile',0);              
            return 0 // alert('PC端')
          }
    }
}