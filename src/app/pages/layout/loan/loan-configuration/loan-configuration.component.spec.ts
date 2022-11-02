import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanConfigurationComponent } from './loan-configuration.component';

describe('LoanConfigurationComponent', () => {
  let component: LoanConfigurationComponent;
  let fixture: ComponentFixture<LoanConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
