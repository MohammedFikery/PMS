import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
<<<<<<< HEAD
import { AddEditTasksComponent } from './components/add-edit-tasks/add-edit-tasks.component';
import { SharedModule } from 'src/apps/shared/shared.module';

@NgModule({
  declarations: [TasksComponent, AddEditTasksComponent],
  imports: [CommonModule, TasksRoutingModule, SharedModule],
=======
import { SharedModule } from 'src/apps/shared/shared.module';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
>>>>>>> feature/list-tasks
})
export class TasksModule {}
