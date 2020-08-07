import { Component, Input, OnInit, Output } from '@angular/core';
import { ColorManagerService } from '../color-manager.service';

@Component({
  selector: 'app-aop-background',
  templateUrl: './aop-background.component.html',
  styleUrls: ['./aop-background.component.scss']
})

export class AopBackgroundComponent implements OnInit {
  scrollTop: number;
  Squares: {s: string, x: string, y: string}[] = [];
  @Input() colorManagerService: ColorManagerService;


  constructor(colorManagerService: ColorManagerService) {
    this.scrollTop = document.scrollingElement.scrollTop;
    this.colorManagerService = colorManagerService;
    this.Squares = [];
    for (let i = 0; i < 1000; i++) {
      this.Squares.push({s: '10vw', x: Math.round(Math.random() * 10) * 10 + 'vw', y: Math.round(Math.random() * 50) * 10 + 'vw'});
    }
  }

  ngOnInit(): void {

  }

  scroll(){
    this.scrollTop = document.scrollingElement.scrollTop;
  }
}
