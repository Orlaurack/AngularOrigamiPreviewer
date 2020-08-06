import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AopBackgroundComponent } from './aop-background.component';

describe('AopBackgroundComponent', () => {
  let component: AopBackgroundComponent;
  let fixture: ComponentFixture<AopBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AopBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AopBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
