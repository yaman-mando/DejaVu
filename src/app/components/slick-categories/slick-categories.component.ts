import {Component, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'slickCategories',
  templateUrl: './slick-categories.component.html',
  styleUrls: ['./slick-categories.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SlickCategoriesComponent implements OnInit, OnChanges {

  @Input() isRTL : any;

  slideConfig : any;


  slides = [
    {
      img: "../../assets/images/categories/cat1.png",
      title:"Image Title",
      case_icon:'add',
      rate:3,
    },
    {
      img: "../../assets/images/categories/cat2.png",
      title:"Image Title",
      case_icon:'done',
      rate:2,
    },
    {
      img: "../../assets/images/categories/cat3.png",
      title:"Image Title",
      case_icon:'add',
      rate:3,
    },
    {
      img: "../../assets/images/categories/cat4.png",
      title:"Image Title",
      case_icon:'add',
      rate:5,
    },
    {
      img: "../../assets/images/categories/cat5.png",
      title:"Image Title",
      case_icon:'done',
      rate:3,
    },
    {
      img: "../../assets/images/categories/cat6.png",
      title:"Image Title",
      case_icon:'add',
      rate:4,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.slideConfig = {
      infinite: true,
      centerMode: true,
      centerPadding: '400px',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      dots: false,
      rtl: this.isRTL,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '300px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 1199,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '150px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 899,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '75px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0',
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
