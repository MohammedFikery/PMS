import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from "src/apps/shared/shared.module";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss'],
})
export class ViewProjectComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any , public dialogRef: MatDialogRef<ViewProjectComponent>) {
    
  }
  ngOnInit(): void {
  console.log(this.data);
  }
    onNoClick(): void {
    this.dialogRef.close();
  }

}
