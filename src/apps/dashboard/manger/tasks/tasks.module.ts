import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { AddEditTasksComponent } from './components/add-edit-tasks/add-edit-tasks.component';
import { SharedModule } from 'src/apps/shared/shared.module';

@NgModule({
  declarations: [TasksComponent, AddEditTasksComponent],
  imports: [CommonModule, TasksRoutingModule, SharedModule],
})
export class TasksModule {}
