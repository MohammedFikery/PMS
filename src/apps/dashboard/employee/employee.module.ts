import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
<<<<<<< HEAD
=======

>>>>>>> b5bb34125e30077cca2ff8e3d056c06cd671ec88
import { SharedModule } from 'src/apps/shared/shared.module';

@NgModule({
  declarations: [EmployeeComponent, TaskBoardComponent],
  imports: [CommonModule, EmployeeRoutingModule, SharedModule],
})
export class EmployeeModule {}
