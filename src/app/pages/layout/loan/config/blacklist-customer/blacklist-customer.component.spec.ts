import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistCustomerComponent } from './blacklist-customer.component';

describe('BlacklistCustomerComponent', () => {
  let component: BlacklistCustomerComponent;
  let fixture: ComponentFixture<BlacklistCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacklistCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlacklistCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
