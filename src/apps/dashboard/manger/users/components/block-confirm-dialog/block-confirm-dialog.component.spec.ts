import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockConfirmDialogComponent } from './block-confirm-dialog.component';

describe('BlockConfirmDialogComponent', () => {
  let component: BlockConfirmDialogComponent;
  let fixture: ComponentFixture<BlockConfirmDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockConfirmDialogComponent]
    });
    fixture = TestBed.createComponent(BlockConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
