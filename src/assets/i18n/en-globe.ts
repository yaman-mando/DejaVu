/*import {CountryStatic_EN} from "../../app/enums/country.enum";
import {GenderStatic_EN} from "../../app/enums/gender.enum";
import {langStatic_EN} from "../../app/enums/languages.enum";
import {CurrencyStatic_EN} from "../../app/enums/currency.enum";*/


import {MenuItems_AR, MenuItems_EN} from "../../app/enums/menuItems.enum";
import {AdminOptionsList_AR, AdminOptionsList_EN} from "../../app/enums/admin-options.enum";


export const EN_GLOBE_DATA = {
  static: {
    menuItems:MenuItems_EN,
    adminList:AdminOptionsList_EN
  },
  page_title: {
    home: 'home',
    admin: 'admin',
    login: 'login',
  },
  texts:{
    lang:'ar'
  }

};

export const EN_GLOBE = {
  lang: 'en',
  data: EN_GLOBE_DATA,
};
