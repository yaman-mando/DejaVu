import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'Loading',
  templateUrl: './loadings.component.html',
  styleUrls: ['./loadings.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoadingsComponent implements OnInit {

  @Input() loadingNum:number;
  constructor() { }

  ngOnInit() {
  }

}
