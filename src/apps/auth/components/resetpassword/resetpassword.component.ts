import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent {
  hide:boolean = true;
  IsHide:boolean= true
  constructor(private _AuthService:AuthService , private _snackBar: MatSnackBar) {    
  }
  resetPasswordFrom = new FormGroup({
   email: new FormControl(null , [ Validators.required ,Validators.email] ),
   seed : new FormControl(null , [ Validators.required] ),
   password : new FormControl(null , [ Validators.required ,Validators.email] ),
   confirmPassword : new FormControl(null , [ Validators.required ,Validators.email] ),
  },
    {validators:this.checkIfPasswordIsMatch})
  
  checkIfPasswordIsMatch(control:AbstractControl):ValidationErrors | null {
  let password = control.get('password')?.value;
  let confirmPassword = control.get('confirmPassword')?.value;
  return password == confirmPassword ? null : {passwordMismatch:true};
}


  sendResetPasswordData(){
    this._AuthService.SendResetPassworForm(this.resetPasswordFrom.value).subscribe({
      next:(res)=>
        {console.log(res);

      //toaster to display respond message
      this._snackBar.open('password reset successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
      },
            //toaster to display respond error
      error:(err)=>{console.log(err);
         this._snackBar.open(err.errors.message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
      },
      complete:()=>{}
    })
  }




}
