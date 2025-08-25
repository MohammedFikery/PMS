import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangerComponent } from './manger.component';

const routes: Routes = [{ path: '', component: MangerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangerRoutingModule { }
