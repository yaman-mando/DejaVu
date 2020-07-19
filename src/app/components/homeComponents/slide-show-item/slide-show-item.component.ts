import {Component, Input, OnInit} from '@angular/core';
import {WI_SlideShowObject} from "../../../interfaces/general.interface";


@Component({
  selector: 'slideShowItem',
  templateUrl: './slide-show-item.component.html',
  styleUrls: ['./slide-show-item.component.scss']
})
export class SlideShowItemComponent implements OnInit {

  @Input() slideItem:WI_SlideShowObject;

  constructor() { }

  ngOnInit() {
  }

}
