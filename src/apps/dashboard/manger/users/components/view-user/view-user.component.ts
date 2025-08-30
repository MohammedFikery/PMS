import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/apps/core/environments/environments';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent {
  url = environment.ServerUrl
  defaultImg = '/assets/images/undraw_developer-avatar_f6ac (1).svg'
  constructor( @Inject(MAT_DIALOG_DATA) public data: any , public dialogRef: MatDialogRef<ViewUserComponent>) {
    
  }
  ngOnInit(): void {
  console.log(this.data);
  }

}
