import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBillersComponent } from './manage-billers.component';

describe('ManageBillersComponent', () => {
  let component: ManageBillersComponent;
  let fixture: ComponentFixture<ManageBillersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBillersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
