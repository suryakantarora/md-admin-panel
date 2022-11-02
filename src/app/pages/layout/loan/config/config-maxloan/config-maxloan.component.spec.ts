import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMaxloanComponent } from './config-maxloan.component';

describe('ConfigMaxloanComponent', () => {
  let component: ConfigMaxloanComponent;
  let fixture: ComponentFixture<ConfigMaxloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigMaxloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigMaxloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
