import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'task', component: TaskBoardComponent },

  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
<<<<<<< HEAD
=======
  
  { path: 'task', component: TaskBoardComponent }
>>>>>>> b5bb34125e30077cca2ff8e3d056c06cd671ec88
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
