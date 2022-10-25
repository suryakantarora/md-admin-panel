import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMerchantComponent } from './add-new-merchant.component';

describe('AddNewMerchantComponent', () => {
  let component: AddNewMerchantComponent;
  let fixture: ComponentFixture<AddNewMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMerchantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
