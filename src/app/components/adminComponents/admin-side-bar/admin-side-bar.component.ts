import { Component, OnInit } from '@angular/core';
import {TranslateBaseService} from "../../../app-translation/services/translation-base.service";
import {AdminOption} from "../../../enums/admin-options.enum";
import {ShareableService} from "../../../services/shareable.service";
import {PerfectScrollbarConfigInterface} from "ngx-perfect-scrollbar";

@Component({
  selector: 'adminSideBar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.scss']
})
export class AdminSideBarComponent implements OnInit {

  active:number = 0;

  public config : PerfectScrollbarConfigInterface = {};

  constructor(public _tb:TranslateBaseService,
              public _shareService:ShareableService) { }

  ngOnInit() {
  }

  /*Method for getting Admin items form Enum*/
  getAdminItems() : AdminOption[]{
    return this._tb.translate.static.adminList;
  }

  /*for close sidebar*/
  public toggleSidebar()
  {
    this._shareService.adminSideBarOpen =false;
  }

}
