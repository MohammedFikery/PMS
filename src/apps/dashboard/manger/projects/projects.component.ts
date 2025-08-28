import { Component } from '@angular/core';
import { DeletComponent } from 'src/apps/shared/components/delet/delet.component';
import { ProjectsService } from './services/projects.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private _ProjectsService:ProjectsService,private _ToastrService:ToastrService,   public dialog: MatDialog,){}
   listData: any[] = [];
  
openDialog() {
    const dialogRef = this.dialog.open(DeletComponent, {
      data: {
        text: 'projects ?',
        // info: info,
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      // console.log(`Dialog result: ${result}`);
      if (result) {
        // this.deletUeser(info.id);
       
      }
    });
  }
    deletUeser(id: number) {
    this._ProjectsService.Delet(id).subscribe({
      next: (res) => {
        this.listData = this.listData.filter((u) => u.id !== id);
        console.log(res);
      },
      error: () => {},
      complete: () => {
          this._ToastrService.success('تم تعديل البيانات بنجاح', 'Success');
      },
    });
  }
}
