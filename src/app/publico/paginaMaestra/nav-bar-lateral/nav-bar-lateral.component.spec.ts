import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLateralComponent } from './nav-bar-lateral.component';

describe('NavBarLateralComponent', () => {
  let component: NavBarLateralComponent;
  let fixture: ComponentFixture<NavBarLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarLateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
