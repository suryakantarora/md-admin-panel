import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantCommisionReportComponent } from './merchant-commision-report.component';

describe('MerchantCommisionReportComponent', () => {
  let component: MerchantCommisionReportComponent;
  let fixture: ComponentFixture<MerchantCommisionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantCommisionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantCommisionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
