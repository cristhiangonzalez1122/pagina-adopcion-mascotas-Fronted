import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetearclaveComponent } from './resetearclave.component';

describe('ResetearclaveComponent', () => {
  let component: ResetearclaveComponent;
  let fixture: ComponentFixture<ResetearclaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetearclaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetearclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
