import { Injectable } from '@angular/core';
import {sideNavMode} from "../enums/general.enum";

@Injectable({
  providedIn: 'root'
})
export class ShareableService {

  sidenavOpen                 : boolean = false;
  adminSideBarOpen 	          : boolean = true;
  adminSideBarMode 	          : string = sideNavMode.side ;


  constructor() { }
}
