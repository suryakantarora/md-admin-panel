import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyalityReportComponent } from './loyality-report.component';

describe('LoyalityReportComponent', () => {
  let component: LoyalityReportComponent;
  let fixture: ComponentFixture<LoyalityReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyalityReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoyalityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
