import { Component, OnInit } from '@angular/core';
import {ShareableService} from "../../../services/shareable.service";
import {FormGroup} from "@angular/forms";
import {TranslateBaseService} from "../../../app-translation/services/translation-base.service";
import {AppStorageService} from "../../../app-factory/services/app-storage.service";


@Component({
  selector: 'appHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public _shareService:ShareableService,
              public _storage:AppStorageService,
              public _tb:TranslateBaseService) { }

  ngOnInit() {
  }

  //open close sidebar
  public toggleSidebar()
  {
    this._shareService.sidenavOpen = !this._shareService.sidenavOpen;
  }

}
