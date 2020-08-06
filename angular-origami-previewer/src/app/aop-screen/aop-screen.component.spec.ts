import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AopScreenComponent } from './aop-screen.component';

describe('AopScreenComponent', () => {
  let component: AopScreenComponent;
  let fixture: ComponentFixture<AopScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AopScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AopScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
