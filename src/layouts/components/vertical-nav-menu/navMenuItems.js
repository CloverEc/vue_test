/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import i18n from '@/lang/i18n.js';
import storageUtils from '@/assets/utils/storageUtils.js';
import store from '@/store/store.js';
let en = i18n.messages['en'];
let zh = i18n.messages['zh']; 
 
// let lang = store.state.local_lang;
// let t = i18n.messages[lang];

export default {
    en:[ {
        url: "/",
        name: en.navBar_home,
        slug: "home",
        icon: "HomeIcon",
      },
      {
        url: "/deposit",
        name: en.navBar_deposit,
        slug: "deposit",
        icon: "icon-github",
      },
      {
        url: "/borrow",
        name: en.navBar_borrow,
        slug: "borrow",
        icon: "HomeIcon",
      },
      {
        url: "/history",
        name: en.navBar_history,
        slug: "history",
        icon: "HomeIcon",
      },
      {
        url: "/liquidations",
        name: en.navBar_liquidation,
        slug: "liquidations",
        icon: "HomeIcon",
      },
      {
        url: "/faq",
        name: en.navBar_faq,
        slug: "faq",
        icon: "HomeIcon",
      },
      {
        url: "/page2",
        name: "Page 2",
        slug: "page2",
        icon: "FileIcon",
      }],
    zh:[{
        url: "/",
        name: zh.navBar_home,
        slug: "home",
        icon: "HomeIcon",
      },
      {
        url: "/deposit",
        name: zh.navBar_deposit,
        slug: "deposit",
        icon: "HomeIcon",
      },
      {
        url: "/borrow",
        name: zh.navBar_borrow,
        slug: "borrow",
        icon: "HomeIcon",
      },
      {
        url: "/history",
        name: zh.navBar_history,
        slug: "history",
        icon: "HomeIcon",
      },
      {
        url: "/liquidations",
        name: zh.navBar_liquidation,
        slug: "liquidations",
        icon: "HomeIcon",
      },
      {
        url: "/faq",
        name: zh.navBar_faq,
        slug: "faq",
        icon: "HomeIcon",
      },
      {
        url: "/page2",
        name: "Page 2",
        slug: "page2",
        icon: "FileIcon",
      }]
}