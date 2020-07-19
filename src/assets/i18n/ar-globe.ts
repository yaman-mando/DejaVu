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
    lang:'en',
    search:'بحث',
    login_msg:'أدخل أي اسم مستخدم و كلمة مرور:123456 لتسجيل الدخول',
    signIn_title:'تسجيل دخول المستخدم',
    user_name:'اسم المستخدم',
    password:'كلمة المرور',
    signIn:'تسجيل دخول',
    signOut:'تسجيل خروج',
    check_email_password: 'يرجى التحقق من البريد الالكتروني او كلمة المرور',
    SIGNIN_SUCCESS: "تم تسجيل الدخول بنجاح",
    Management:'إدارة',
    notifications:'الإشعارات',
    category:'التصنيف'
  }

};

export const AR_GLOBE: typeof EN_GLOBE = {
  lang: 'ar',
  data: AR_GLOBE_DATA,
};
