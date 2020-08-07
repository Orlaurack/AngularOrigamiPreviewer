import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ColorManagerService } from './color-manager.service';
import { SolidSettingsService } from './solid-settings.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  title = 'angular-origami-previewer';
  mouseEvent: any;
  storedColors: {color: string}[] = [];
  showedColors: {color: string}[] = [];
  initialColors: {color: string}[] = [];
  colorManagerService: ColorManagerService;
  solidSettings: SolidSettingsService;

  @Output() mouseMove = new EventEmitter<any>();

  constructor(){
    this.solidSettings = new SolidSettingsService();
    this.colorManagerService = new ColorManagerService();
    this.storedColors = this.colorManagerService.storedColors;
    this.showedColors = this.colorManagerService.showedColors;
  }

  onMouseMove(event){

    this.mouseEvent = event;
    this.mouseMove.emit(this.mouseEvent);

//    console.log(event)
  }

}
