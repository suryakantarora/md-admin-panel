import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MccComponent } from './mcc.component';

describe('MccComponent', () => {
  let component: MccComponent;
  let fixture: ComponentFixture<MccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
