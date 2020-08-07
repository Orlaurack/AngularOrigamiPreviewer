import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AopScreenComponent } from './aop-screen/aop-screen.component';
import { AopSectionComponent } from './aop-section/aop-section.component';
import { AopBackgroundComponent } from './aop-background/aop-background.component';
import { AopPatternComponent } from './aop-pattern/aop-pattern.component';
import { AopColorSelectionComponent } from './aop-color-selection/aop-color-selection.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatRadioModule } from '@angular/material/radio';
import { AopSettingsComponent } from './aop-settings/aop-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AopScreenComponent,
    AopSectionComponent,
    AopBackgroundComponent,
    AopPatternComponent,
    AopColorSelectionComponent,
    AopSettingsComponent,
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    NoopAnimationsModule,
    ColorPickerModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
