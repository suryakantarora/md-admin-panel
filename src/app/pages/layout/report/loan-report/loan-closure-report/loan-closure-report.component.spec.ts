import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanClosureReportComponent } from './loan-closure-report.component';

describe('LoanClosureReportComponent', () => {
  let component: LoanClosureReportComponent;
  let fixture: ComponentFixture<LoanClosureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanClosureReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanClosureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
