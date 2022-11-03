import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSanctionReportComponent } from './loan-sanction-report.component';

describe('LoanSanctionReportComponent', () => {
  let component: LoanSanctionReportComponent;
  let fixture: ComponentFixture<LoanSanctionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSanctionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanSanctionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
