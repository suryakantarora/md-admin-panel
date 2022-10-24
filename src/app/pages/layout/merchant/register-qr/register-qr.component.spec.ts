import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterQrComponent } from './register-qr.component';

describe('RegisterQrComponent', () => {
  let component: RegisterQrComponent;
  let fixture: ComponentFixture<RegisterQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterQrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
