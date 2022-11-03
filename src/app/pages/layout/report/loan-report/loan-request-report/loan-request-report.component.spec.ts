import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestReportComponent } from './loan-request-report.component';

describe('LoanRequestReportComponent', () => {
  let component: LoanRequestReportComponent;
  let fixture: ComponentFixture<LoanRequestReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanRequestReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanRequestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
