import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AopSettingsComponent } from './aop-settings.component';

describe('SettingsComponent', () => {
  let component: AopSettingsComponent;
  let fixture: ComponentFixture<AopSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AopSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AopSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
