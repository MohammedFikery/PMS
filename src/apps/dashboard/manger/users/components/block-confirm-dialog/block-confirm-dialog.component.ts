import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-block-confirm-dialog',
  templateUrl: './block-confirm-dialog.component.html',
  styleUrls: ['./block-confirm-dialog.component.scss'],
})
export class BlockConfirmDialogComponent {
  isActivated: boolean;

  constructor(
    public dialogRef: MatDialogRef<BlockConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isActivated = data.user.isActivated;
  }
}
