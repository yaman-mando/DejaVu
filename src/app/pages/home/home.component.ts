import { Component, OnInit } from '@angular/core';
import {AppStorageService} from "../../app-factory/services/app-storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _Storage:AppStorageService) { }

  ngOnInit() {
  }

}
