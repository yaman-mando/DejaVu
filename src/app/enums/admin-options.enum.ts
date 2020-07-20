
/**** Menu interface ****/
export interface AdminOption {
  name: string;
  link: string;
  icon:string
}

/* Enum Of Items Menu*/
export const AdminOptionsList_EN = [
  {name:'category', link:'admin',icon:'list'},
  {name:'option 1', link:'admin',icon:'radio'},
  {name:'option 2', link:'admin',icon:'video_settings'},
  {name:'option 3', link:'admin',icon:'admin_panel_settings'},
  {name:'option 4', link:'admin',icon:'settings'},
];

export const AdminOptionsList_AR = [
  {name:'التصنيفات', link:'admin',icon:'list'},
  {name:'العنصر 1', link:'admin',icon:'radio'},
  {name:'العنصر 2', link:'admin',icon:'video_settings'},
  {name:'العنصر 3', link:'admin',icon:'admin_panel_settings'},
  {name:'العنصر 4', link:'admin',icon:'settings'},
];

/**** Menu interface ****/
export interface CategoryCardItem {
  name: string;
  link: string;
  icon:string
}


