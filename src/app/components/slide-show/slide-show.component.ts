import {Component, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'slideShow',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SlideShowComponent implements OnInit,OnChanges {

  @Input() isRTL : boolean = false;

  slideConfig : any;

  slides : any = [
    {
      img         : "../../assets/images/slider/h-slider-4.png",
      content     : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
      heading_one : "Image1 Title",

    },
    {
      img         : "../../assets/images/slider/h-slider-3.jpg",
      content     : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
      heading_one : "Image2 Title",

    },
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.slideConfig = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      dots: false,
      rtl: this.isRTL,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000
          }
        }
      ]
    };
  }

}
