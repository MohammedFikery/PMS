import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./components/login/login.component";
import { ForgetpasswordComponent } from "./components/forgetpassword/forgetpassword.component";
import { ResetpasswordComponent } from "./components/resetpassword/resetpassword.component";
import { ChangepasswordComponent } from "./components/changepassword/changepassword.component";
import { CreatenewaccountComponent } from "./components/createnewaccount/createnewaccount.component";
import { VerifyaccountComponent } from "./components/verifyaccount/verifyaccount.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "forgotpassword", component: ForgetpasswordComponent },
  { path: "resetpassword", component: ResetpasswordComponent },
  { path: "changepassword", component: ChangepasswordComponent },
  { path: "createnewaccount", component: CreatenewaccountComponent },
  { path: "verfiyaccount", component: VerifyaccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
