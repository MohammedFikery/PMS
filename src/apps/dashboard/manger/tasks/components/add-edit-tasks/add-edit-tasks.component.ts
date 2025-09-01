import { ProjectsApisService } from './../../../projects/services/projectsApis.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { UserService } from '../../../users/services/user.service';
import { TasksApisService } from '../../services/tasksApis.service';
@Component({
  selector: 'app-add-edit-tasks',
  templateUrl: './add-edit-tasks.component.html',
  styleUrls: ['./add-edit-tasks.component.scss'],
})
export class AddEditTasksComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.getAllUsers();
    this.getAllProjects();
    this.taskID = +this._route.snapshot.params['id'] || 0;
    console.log('taskID', this.taskID);

    if (this.taskID && this.taskID > 0) {
      this._ProjectsApisService.GetProjectById(this.taskID).subscribe({
        next: (res) => {
          console.log('patchValue', res);

          this.addEditTaskForm.patchValue({
            title: res.title,
            description: res.description,
            employeeId: res.manager.id,
            projectId: res.task[0].id,
          });
        },
      });
    }
  }
  private readonly _ProjectsApisService = inject(ProjectsApisService);
  private readonly _TasksApisService = inject(TasksApisService);
  private readonly _ToastrService = inject(ToastrService);
  private readonly _route = inject(ActivatedRoute);
  private readonly _Router = inject(Router);
  private readonly location = inject(Location);
  private readonly _UserService = inject(UserService);
  private readonly _ProjectsService = inject(ProjectsApisService);

  CreateProjectSub!: Subscription;
  taskID: number = 0;
  usersData: any;
  usersList: any[] = [];
  projectsData: any;
  projectsList: any[] = [];
  employeeId: number = 0;
  projectId: number = 0;

  addEditTaskForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl(''),
    employeeId: new FormControl('', [Validators.required]),
    projectId: new FormControl('', [Validators.required]),
  });

  addEditProjects(data: any) {
    if (this.addEditTaskForm.invalid) {
      this.addEditTaskForm.markAllAsTouched();
      return;
    }
    if (this.taskID === 0) {
      this.CreateProjectSub = this._TasksApisService
        .CreateTask(data)
        .subscribe({
          next: (res) => {
            this._ToastrService.success(
              `add Task successfully by Id :${res.id}`,
              'add successfully'
            );
            this.addEditTaskForm.reset();
          },
          complete: () => {
            this._Router.navigate(['/dashboard/manger/tasks']);
          },
        });
    } else {
      this._TasksApisService.EditTask(data, this.taskID).subscribe({
        next: (res) => {
          this._ToastrService.success(
            `Update Task successfully by Id :${res.id}`,
            'Update successfully'
          );
        },
        complete: () => {
          this._Router.navigate(['/dashboard/manger/tasks']);
        },
      });
    }
  }

  getAllUsers() {
    let tableParam = {
      userName: '',
      pageSize: 1000000000000000000,
      pageNumber: 1,
    };

    this._UserService.getAllUsers(tableParam).subscribe({
      next: (res) => {
        console.log(res);

        this.usersData = res;
        this.usersList = res.data;
      },
    });
  }
  getAllProjects() {
    let tableParam = {
      title: '',
      pageSize: 1000000,
      pageNumber: 1,
    };

    this._ProjectsService.getAllProjects(tableParam).subscribe({
      next: (res) => {
        console.log('proj', res);
        this.projectsData = res;
        this.projectsList = res.data;
      },
    });
  }
  goToBack() {
    this.location.back();
  }
  ngOnDestroy(): void {
    if (this.CreateProjectSub) {
      this.CreateProjectSub.unsubscribe();
    }
  }
}
