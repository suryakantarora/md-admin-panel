import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTenureComponent } from './config-tenure.component';

describe('ConfigTenureComponent', () => {
  let component: ConfigTenureComponent;
  let fixture: ComponentFixture<ConfigTenureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigTenureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigTenureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
