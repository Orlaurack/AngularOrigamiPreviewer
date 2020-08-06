import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AopSectionComponent } from './aop-section.component';

describe('AopSectionComponent', () => {
  let component: AopSectionComponent;
  let fixture: ComponentFixture<AopSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AopSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
