import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeletComponent } from 'src/apps/shared/components/delet/delet.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewProjectComponent } from '../../manger/projects/components/view-project/view-project.component';
import { ProjectsService } from './services/projects.service';

export interface UserData {
  title: string;
  // description: string;
  modificationDate: string;
  // task: any;
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
    'title',
    'description',
    'modificationDate',
    'task',
    'creationDate',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _ProjectsService: ProjectsService,
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
        console.log(res);
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
}
