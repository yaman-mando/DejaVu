import { Component } from '@angular/core';
import {ShareableService} from "./services/shareable.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DejaVu';

  constructor(public _shareService:ShareableService) {
  }

}
