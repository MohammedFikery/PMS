import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TasksApisService } from './services/tasksApis.service';
import { DeletComponent } from 'src/apps/shared/components/delet/delet.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';

export interface UserData {
  title: string;
  status: string;
  user: string;
  project: string;
  creationDate: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  searchVal: string = '';
  tasksData: any;
  tasksList: any[] = [];
  pageSize: number = 10;
  pageNumber: number = 1;

  displayedColumns: string[] = [
    'title',
    'status',
    'user',
    'project',
    'creationDate',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _TasksService: TasksApisService,
    private _Router: Router,
    private _Dialog: MatDialog
  ) {
    this.getAllTasks();
  }

  getAllTasks() {
    let tableParam = {
      title: this.searchVal,
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    };

    this._TasksService.getAllTasks(tableParam).subscribe({
      next: (res) => {
        console.log(res);
        this.tasksData = res;
        this.tasksList = res.data;
      },
      complete: () => {
        this.dataSource = new MatTableDataSource(this.tasksList);
      },
    });
  }

  handlePaginator(event: any) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAllTasks();
  }

  viewTask(row: any) {
    this._Router.navigate([`/dashboard/manger/tasks/edit/${row.id}`]);
  }
  
   openDialog(row:any) {
    this._Dialog.open(ViewTaskComponent, {
      data: row,
      width: "40vw",
       panelClass: 'custom-dialog-container'
    });
  }

  editTask(row: any) {
    this._Router.navigate([`/dashboard/manger/tasks/edit/${row.id}`]);
  }

  deleteTask(row: any) {
    const dialogRef = this._Dialog.open(DeletComponent, {
      width: '500px',
      data: {
        project: row,
        source: 'tasks',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.removeFromTable(row.id);
      }
    });
  }

  removeFromTable(id: number) {
    this.tasksList = this.tasksList.filter((p: any) => p.id !== id);

    this.dataSource.data = this.tasksList;
  }
}
