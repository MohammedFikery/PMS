import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';
import { SharedModule } from 'src/apps/shared/shared.module';

import { ViewProjectComponent } from './view-project/view-project.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [ProjectsComponent, AddEditProjectComponent, ViewProjectComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule,MatTabsModule],

})
export class ProjectsModule {}
