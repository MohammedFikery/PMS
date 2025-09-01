import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { environment } from 'src/apps/core/environments/environments';
import { BlockConfirmDialogComponent } from './components/block-confirm-dialog/block-confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  defaultImg = '/assets/images/undraw_developer-avatar_f6ac (1).svg';
  searchVal: string = '';
  url = environment.ServerUrl;
  usersData: any;
  usersList: any[] = [];

  pageSize: number = 10;
  pageNumber: number = 1;

  displayedColumns: string[] = [
    'imagePath',
    'userName',
    'isActivated',
    'phoneNumber',
    'email',
    'creationDate',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _UserService: UserService,
    private _Router: Router,
    private _ToastrService: ToastrService,
    private _Dialog: MatDialog
  ) {
    this.getAllUsers();
  }

  getAllUsers() {
    let tableParam = {
      userName: this.searchVal,
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    };

    this._UserService.getAllUsers(tableParam).subscribe({
      next: (res) => {
        this.usersData = res;
        this.usersList = res.data;
      },
      complete: () => {
        this.dataSource = new MatTableDataSource(this.usersList);
      },
    });
  }

  handlePaginator(event: any) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAllUsers();
  }

  openDialog(row: any) {
    this._Dialog.open(ViewUserComponent, {
      data: row,
      width: '40vw',
      panelClass: 'custom-dialog-container',
    });
  }

  onBlock(row: any) {
    const dialogRef = this._Dialog.open(BlockConfirmDialogComponent, {
      width: '500px',
      data: {
        user: row,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.toggleActivated(row);
      }
    });
  }

  toggleActivated(row: any) {
    this._UserService.toggleActivated(row.id).subscribe({
      next: (res) => {
        this.getAllUsers();
      },
      error: () => {},
      complete: () => {
        if (row.isActivated) {
          this._ToastrService.warning('Blocked successfully');
        } else {
          this._ToastrService.info('Unblocked successfully');
        }
      },
    });
  }
}
