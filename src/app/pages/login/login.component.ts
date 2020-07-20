import { Component, OnInit } from '@angular/core';
import {TranslateBaseService} from "../../app-translation/services/translation-base.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _tb:TranslateBaseService) { }

  ngOnInit() {
  }

}
