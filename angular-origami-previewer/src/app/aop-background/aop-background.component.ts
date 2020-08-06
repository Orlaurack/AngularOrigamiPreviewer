import { Component, Input, OnInit } from '@angular/core';
import { ColorManagerService } from '../color-manager.service';

@Component({
  selector: 'app-aop-background',
  templateUrl: './aop-background.component.html',
  styleUrls: ['./aop-background.component.scss']
})


export class AopBackgroundComponent implements OnInit {

  Squares: {x: number, y: number}[] = [];
  @Input() colorManagerService: ColorManagerService;

  constructor(colorManagerService: ColorManagerService) {
    this.colorManagerService = colorManagerService;
    this.Squares = [];
    for (let i = 0; i < 300; i++) {
      this.Squares.push({x: this.rng(), y: this.rng()});
    }
  }

  ngOnInit(): void {

  }

  rng(){
    return Math.round(Math.random() * 100);
  }
}
