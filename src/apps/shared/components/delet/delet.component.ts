import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delet',
  templateUrl: './delet.component.html',
  styleUrls: ['./delet.component.scss']
})
export class DeletComponent {
constructor(  public dialogRef: MatDialogRef<DeletComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,) {}
 onNoClick(): void {
    this.dialogRef.close();
  }
}
