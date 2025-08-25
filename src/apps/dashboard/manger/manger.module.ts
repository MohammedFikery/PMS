import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangerRoutingModule } from './manger-routing.module';
import { MangerComponent } from './manger.component';


@NgModule({
  declarations: [
    MangerComponent
  ],
  imports: [
    CommonModule,
    MangerRoutingModule
  ]
})
export class MangerModule { }
