import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnSummaryReportComponent } from './txn-summary-report.component';

describe('TxnSummaryReportComponent', () => {
  let component: TxnSummaryReportComponent;
  let fixture: ComponentFixture<TxnSummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxnSummaryReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxnSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
