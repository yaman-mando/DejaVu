import {Injectable} from '@angular/core';
import {sideNavMode} from "../enums/general.enum";

@Injectable({
  providedIn: 'root'
})
export class ShareableService {

  /*sideNav case in website */
  sidenavOpen: boolean = false;

  /*Admin side bar case*/
  adminSideBarOpen: boolean = true;

  /*Admin side bar mode*/
  adminSideBarMode: string = sideNavMode.side;

  /*direction mode in project*/
  isRtl: boolean = false;


  constructor() {
  }
}
