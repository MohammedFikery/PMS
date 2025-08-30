import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { CreateManagerComponent } from './components/create-manager/create-manager.component';

const routes: Routes = [{ path: '', component: UsersComponent },
  {path:'add', component: CreateManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
