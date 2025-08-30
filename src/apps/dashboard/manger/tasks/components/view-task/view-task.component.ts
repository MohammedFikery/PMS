import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ViewProjectComponent } from '../../../projects/components/view-project/view-project.component';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent {
 constructor( @Inject(MAT_DIALOG_DATA) public data: any , public dialogRef: MatDialogRef<ViewTaskComponent>) {
    
  }
  ngOnInit(): void {
  console.log(this.data);
  }
    onNoClick(): void {
    this.dialogRef.close();
  }

}
