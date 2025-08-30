import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ViewUserComponent } from '../../users/components/view-user/view-user.component';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any , public dialogRef: MatDialogRef<ViewProjectComponent>) {
    
  }
  ngOnInit(): void {
  console.log(this.data);
  }

}
