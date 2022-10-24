import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantGroupingComponent } from './merchant-grouping.component';

describe('MerchantGroupingComponent', () => {
  let component: MerchantGroupingComponent;
  let fixture: ComponentFixture<MerchantGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantGroupingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
