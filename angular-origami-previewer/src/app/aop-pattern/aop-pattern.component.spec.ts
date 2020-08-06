import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AopPatternComponent } from './aop-pattern.component';

describe('AopPatternComponent', () => {
  let component: AopPatternComponent;
  let fixture: ComponentFixture<AopPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AopPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AopPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
