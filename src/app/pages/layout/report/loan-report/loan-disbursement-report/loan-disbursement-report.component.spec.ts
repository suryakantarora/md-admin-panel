import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDisbursementReportComponent } from './loan-disbursement-report.component';

describe('LoanDisbursementReportComponent', () => {
  let component: LoanDisbursementReportComponent;
  let fixture: ComponentFixture<LoanDisbursementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDisbursementReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDisbursementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
