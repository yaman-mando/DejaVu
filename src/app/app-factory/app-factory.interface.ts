export interface AppStorageInterface {
  //role: "Vendor" | "CustomerUser";
  //isVendor: boolean;
  //isCustomer: boolean;
  isLoggedIn: boolean;
  //token: string;
  //userId:number;
  // userId: string;
  // userName: string;
  // userImg: string;
  // schoolId: number;
  // isEnabledFingerPrint:boolean;
}


export interface AppUserPreferences {
  userName:string;
  lang:string,
  langId:number;
  isLoggedIn:boolean
  //currency:number;
  //rate:number;
  //country:number;
  // doNotShowFingerModal:boolean;
}
