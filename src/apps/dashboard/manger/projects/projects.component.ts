import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectsApisService } from './services/projectsApis.service';
import { Router } from '@angular/router';
import { DeletComponent } from 'src/apps/shared/components/delet/delet.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewProjectComponent } from './components/view-project/view-project.component';

export interface UserData {
  id: string;
  title: string;
  modificationDate: string;
  creationDate: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  searchVal: string = '';
  projectsData: any;
  projectsList: any[] = [];
  pageSize: number = 10;
  pageNumber: number = 1;

  displayedColumns: string[] = [
    'id',
    'title',
    'modificationDate',
    'creationDate',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _ProjectsService: ProjectsApisService,
    private _Router: Router,
    private _Dialog: MatDialog
  ) {
    this.getAllProjects();
  }

  getAllProjects() {
    let tableParam = {
      title: this.searchVal,
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    };

    this._ProjectsService.getAllProjects(tableParam).subscribe({
      next: (res) => {
        this.projectsData = res;
        this.projectsList = res.data;
      },
      complete: () => {
        this.dataSource = new MatTableDataSource(this.projectsList);
      },
    });
  }

  handlePaginator(event: any) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAllProjects();
  }

   openDialog(data:any) {
    this._Dialog.open(ViewProjectComponent, {
      data: data,
      width: "40vw",
       panelClass: 'custom-dialog-container'
    });
  }

  editProject(row: any) {
    this._Router.navigate([`/dashboard/manger/projects/edit/${row.id}`]);
  }

  deleteProject(row: any) {
    const dialogRef = this._Dialog.open(DeletComponent, {
      width: '500px',
      data: {
        project: row,
        source: 'projects',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.removeFromTable(row.id);
      }
    });
  }

  removeFromTable(id: number) {
    this.projectsList = this.projectsList.filter((p: any) => p.id !== id);

    this.dataSource.data = this.projectsList;
  }
}
