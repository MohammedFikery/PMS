import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';
import { DeletComponent } from './components/delet/delet.component';

const routes: Routes = [{ path: '', component: SharedComponent },
  { path: 'delete', component: DeletComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
