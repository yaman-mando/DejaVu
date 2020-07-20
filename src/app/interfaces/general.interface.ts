
/*Category Card Interface*/
export interface WI_CategoryCardObject{
  img:string;
  title:string;
  case_icon:string;
  rate:number
}

/*Category List Card Interface*/
export interface WI_CategoryCardList {
  categoriesList:WI_CategoryCardObject[]
}

/*Slider Object Interface*/
export interface WI_SlideShowObject {
  img:string;
  title:string;
  content:string
}

/*Slider List  Interface*/
export interface WI_SlideShowList {
  slidesList:WI_SlideShowObject[]
}

/*AdminCategoryCard Object Interface*/
export interface WI_AdminCatCardObject {
  title:string;
  items:number;
  members:{name: string; image:string }[]

}


export interface WI_AdminCatCardList {
  catCardList:WI_AdminCatCardObject[]
}
