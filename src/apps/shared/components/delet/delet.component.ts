import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-delet',
  templateUrl: './delet.component.html',
  styleUrls: ['./delet.component.scss'],
})
export class DeletComponent {

  constructor(
    public dialogRef: MatDialogRef<DeletComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _ActivatedRoute: ActivatedRoute,
    private _SharedService:SharedService,
    private _ToastrService:ToastrService
  ) {
  console.log(data);
  
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(id:number){
this._SharedService.deleteprojects(id).subscribe({
  next:(res)=>{
console.log(res);
    
this.dialogRef.close(true);
  },error:()=>{

  },complete:()=>{
      this._ToastrService.success('Deleted successfully');
  }
})
  }

}
