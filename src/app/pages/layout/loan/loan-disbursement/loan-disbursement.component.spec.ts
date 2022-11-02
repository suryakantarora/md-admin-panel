import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDisbursementComponent } from './loan-disbursement.component';

describe('LoanDisbursementComponent', () => {
  let component: LoanDisbursementComponent;
  let fixture: ComponentFixture<LoanDisbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDisbursementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDisbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
