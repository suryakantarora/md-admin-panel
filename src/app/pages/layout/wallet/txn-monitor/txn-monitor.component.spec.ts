import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnMonitorComponent } from './txn-monitor.component';

describe('TxnMonitorComponent', () => {
  let component: TxnMonitorComponent;
  let fixture: ComponentFixture<TxnMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxnMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxnMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
