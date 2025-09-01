import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/apps/shared/shared.module';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CreateManagerComponent } from './components/create-manager/create-manager.component';
import { BlockConfirmDialogComponent } from './components/block-confirm-dialog/block-confirm-dialog.component';

@NgModule({
  declarations: [UsersComponent, ViewUserComponent, CreateManagerComponent, BlockConfirmDialogComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
