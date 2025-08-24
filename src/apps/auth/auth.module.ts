import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { CreatenewaccountComponent } from './components/createnewaccount/createnewaccount.component';
import { VerifyaccountComponent } from './components/verifyaccount/verifyaccount.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    ChangepasswordComponent,
    CreatenewaccountComponent,
    VerifyaccountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,SharedModule
  ]
})
export class AuthModule { }
