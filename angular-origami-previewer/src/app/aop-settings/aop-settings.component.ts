import { Component, Input, OnInit } from '@angular/core';
import { SolidSettingsService } from '../solid-settings.service';

@Component({
  selector: 'app-aop-settings',
  templateUrl: './aop-settings.component.html',
  styleUrls: ['./aop-settings.component.scss']
})
export class AopSettingsComponent implements OnInit {


  @Input() settingsService: SolidSettingsService;

  constructor(settingsService: SolidSettingsService) {
    this.settingsService = settingsService;
  }

  ngOnInit(): void {
  }

}
