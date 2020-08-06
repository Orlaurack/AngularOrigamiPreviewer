import { Component, Input } from '@angular/core';
import { ColorManagerService } from '../color-manager.service';

@Component({
  selector: 'app-aop-color-selection',
  templateUrl: './aop-color-selection.component.html',
  styleUrls: ['./aop-color-selection.component.scss']
})
export class AopColorSelectionComponent {

  @Input() colorManagerService: ColorManagerService;

  constructor(colorManagerService: ColorManagerService) {
    this.colorManagerService = colorManagerService;
  }

  changeFocusedColor(e: any){
    this.removeFocusColor();
    e.target.className += ' active';
  }

  removeFocusColor(e?: boolean){
    if (e !== true){
      const divs =  document.getElementsByClassName('active');
      for (const d in divs){
        if (divs[d].classList !== undefined){
          divs[d].classList.remove('active');
        }
      }
    }
  }

  changeColor(index: number, event: string){
    this.colorManagerService.inputColors[index].color = event;
    this.colorManagerService.update();
  }
}
