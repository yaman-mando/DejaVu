/*import {langStatic_AR} from "../../app/enums/languages.enum";
import {CurrencyStatic_AR} from "../../app/enums/currency.enum";
import {CountryStatic_AR} from "../../app/enums/country.enum";
import {GenderStatic_AR} from "../../app/enums/gender.enum";*/
import {EN_GLOBE, EN_GLOBE_DATA} from "./en-globe";
import {MenuItems_AR} from "../../app/enums/menuItems.enum";
import {AdminOptionsList_AR} from "../../app/enums/admin-options.enum";



export const AR_GLOBE_DATA: typeof EN_GLOBE_DATA = {
    static: {
      menuItems:MenuItems_AR,
      adminList:AdminOptionsList_AR
    },
    page_title: {
      home: 'الرئيسية',
      admin: 'المسؤول',
      login: 'تسجيل الدخول',
    },
  texts:{
    lang:'en'
  }

};

export const AR_GLOBE: typeof EN_GLOBE = {
  lang: 'ar',
  data: AR_GLOBE_DATA,
};
