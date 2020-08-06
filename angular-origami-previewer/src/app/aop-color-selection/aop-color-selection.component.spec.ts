import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AopColorSelectionComponent } from './aop-color-selection.component';

describe('AopColorSelectionComponent', () => {
  let component: AopColorSelectionComponent;
  let fixture: ComponentFixture<AopColorSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AopColorSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AopColorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
