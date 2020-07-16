
/**** Menu interface ****/
export interface Menu {
  name: string;
  link: string;
  icon:string
}


export const MenuItems_EN = [

  {name:'Latest', link:'',icon:'refresh'},
  {name:'home', link:'home',icon:'home'},
  {name:'admin', link:'admin',icon:'admin_panel_settings'},
  {name:'login', link:'login',icon:'login'},
  {name:'logout', link:'',icon:'exit_to_app'},
];


export const MenuItems_AR = [

  {name:'الأحدث', link:'',icon:'refresh'},
  {name:'الرئيسية', link:'home',icon:'home'},
  {name:'لوحة المسؤول', link:'admin',icon:'admin_panel_settings'},
  {name:'تسجيل الدخول', link:'login',icon:'login'},
  {name:'تسجيل الخروج', link:'',icon:'exit_to_app'},
];

