import { ThrowStmt } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ColorManagerService } from '../color-manager.service';

@Component({
  selector: 'app-aop-pattern',
  templateUrl: './aop-pattern.component.html',
  styleUrls: ['./aop-pattern.component.scss']
})

export class AopPatternComponent {

  @Input() colorManagerService: ColorManagerService;
  colorValid: ThemePalette;
  colorInvalid: ThemePalette;

  constructor(colorManagerService: ColorManagerService) {
    this.colorManagerService = colorManagerService;
    this.colorValid = 'primary';
    this.colorInvalid = 'warn';
  }

  changePattern(e){
    this.colorManagerService.layout = e.value;
    this.colorManagerService.update();
  }
  changeNumber(e){
    this.colorManagerService.number = e.value;
    this.colorManagerService.update();
  }
}
