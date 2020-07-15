import { Component, OnInit } from '@angular/core';
import {ShareableService} from "../../services/shareable.service";

@Component({
  selector: 'appHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _shareService:ShareableService) { }

  ngOnInit() {
  }

  public toggleSidebar()
  {
    this._shareService.sidenavOpen = !this._shareService.sidenavOpen;
  }
}
