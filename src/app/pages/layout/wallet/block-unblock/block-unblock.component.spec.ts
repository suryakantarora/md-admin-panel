import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUnblockComponent } from './block-unblock.component';

describe('BlockUnblockComponent', () => {
  let component: BlockUnblockComponent;
  let fixture: ComponentFixture<BlockUnblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockUnblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockUnblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
