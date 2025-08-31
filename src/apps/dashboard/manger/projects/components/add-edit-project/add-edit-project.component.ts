import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProjectsApisService } from '../../services/projectsApis.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss'],
})
export class AddEditProjectComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.projectId = +this._route.snapshot.params['id'] || 0;
    console.log('projectId', this.projectId);

    if (this.projectId && this.projectId > 0) {
      this._ProjectsApisService.GetProjectById(this.projectId).subscribe({
        next: (res) => {
          this.addEditProjectForm.patchValue({
            title: res.title,
            description: res.description,
          });
        },
      });
    }
  }
  private readonly _ProjectsApisService = inject(ProjectsApisService);
  private readonly _ToastrService = inject(ToastrService);
  private readonly _route = inject(ActivatedRoute);
  private readonly _Router = inject(Router);
  private readonly location = inject(Location);
  CreateProjectSub!: Subscription;
  projectId: number = 0;

  addEditProjectForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl(''),
  });

  addEditProjects(data: any) {
    if (this.addEditProjectForm.invalid) {
      this.addEditProjectForm.markAllAsTouched();
      return;
    }
    if (this.projectId === 0) {
      this.CreateProjectSub = this._ProjectsApisService
        .CreateProject(data)
        .subscribe({
          next: (res) => {
            this._ToastrService.success(
              `add project successfully by Id :${res.id}`,
              'add successfully'
            );
            this.addEditProjectForm.reset();
          },
          complete: () => {
            this._Router.navigate(['/dashboard/manger/projects']);
          },
        });
    } else {
      this._ProjectsApisService.EditProject(data, this.projectId).subscribe({
        next: (res) => {
          this._ToastrService.success(
            `Update project successfully by Id :${res.id}`,
            'Update successfully'
          );
        },
        complete: () => {
          this._Router.navigate(['/dashboard/manger/projects']);
        },
      });
    }
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
