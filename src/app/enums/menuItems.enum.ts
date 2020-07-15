
/**** Menu interface ****/
export interface Menu {
  name: string;
  link: string;
  icon:string
}

/* Enum Of Items Menu*/
export const MenuItems = [

  {name:'Latest', link:'',icon:'refresh'},
  {name:'home', link:'home',icon:'home'},
  {name:'admin', link:'admin',icon:'admin_panel_settings'},
  {name:'login', link:'login',icon:'login'},
  {name:'logout', link:'',icon:'exit_to_app'},
];

