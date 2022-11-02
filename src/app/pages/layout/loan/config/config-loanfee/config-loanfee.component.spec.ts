import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLoanfeeComponent } from './config-loanfee.component';

describe('ConfigLoanfeeComponent', () => {
  let component: ConfigLoanfeeComponent;
  let fixture: ComponentFixture<ConfigLoanfeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigLoanfeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigLoanfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
