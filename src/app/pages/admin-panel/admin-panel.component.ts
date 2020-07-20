import { Component, OnInit } from '@angular/core';
import {ShareableService} from "../../services/shareable.service";
import {HelpService} from "../../services/help.service";
import {sideNavMode} from "../../enums/general.enum";
import {WI_AdminCatCardList, WI_CategoryCardList} from "../../interfaces/general.interface";
import {adminCategoryCardsList} from "../../data/general.data";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  host: {
    "(window:resize)":"this._helpService.checkSideBar()",
    "(window:load)":"this._helpService.checkSideBar()",
  }
})
export class AdminPanelComponent implements OnInit {

  adminCatCards:WI_AdminCatCardList;

  constructor(public _shareService:ShareableService,
              public _helpService:HelpService) {

    /*getting data from source*/
    this.adminCatCards = adminCategoryCardsList
  }

  ngOnInit() {

  }



}
