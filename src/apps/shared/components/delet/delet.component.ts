import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-delet',
  templateUrl: './delet.component.html',
  styleUrls: ['./delet.component.scss'],
})
export class DeletComponent {
  // namaID: number = 0;
  constructor(
    public dialogRef: MatDialogRef<DeletComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _ActivatedRoute: ActivatedRoute,
    private _SharedService:SharedService
  ) {
    // this.namaID = _ActivatedRoute.snapshot.params['id'];
    // if (this.namaID) {
    //    this.delete(this.namaID);
    // }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(id:number){
this._SharedService.deleteprojects(id).subscribe({
  next:(res)=>{
console.log(res);

  }
})
  }
}
