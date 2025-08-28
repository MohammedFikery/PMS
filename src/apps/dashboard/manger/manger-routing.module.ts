import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangerComponent } from './manger.component';

const routes: Routes = [{ path: '', component: MangerComponent }, { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangerRoutingModule { }
