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

let lang = i18n.locale || storageUtils.getLang();
let t = i18n.messages[lang];


export default [
  {
    url: "/",
    name: t.navBar_home,
    slug: "home",
    icon: "HomeIcon",
  },
  {
    url: "/deposit",
    name: t.navBar_deposit,
    slug: "deposit",
    icon: "HomeIcon",
  },
  {
    url: "/borrow",
    name: t.navBar_borrow,
    slug: "borrow",
    icon: "HomeIcon",
  },
  {
    url: "/history",
    name: t.navBar_history,
    slug: "history",
    icon: "HomeIcon",
  },
  {
    url: "/liquidations",
    name: t.navBar_liquidation,
    slug: "liquidations",
    icon: "HomeIcon",
  },
  {
    url: "/faq",
    name: t.navBar_faq,
    slug: "faq",
    icon: "HomeIcon",
  },
  {
    url: "/page2",
    name: "Page 2",
    slug: "page2",
    icon: "FileIcon",
  }
]
