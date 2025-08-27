import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss'],
})
export class ResetpasswordComponent {
  hide: boolean = true;
  IsHide: boolean = true;
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _ToastrService:ToastrService
  ) {}
  resetPasswordFrom = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      seed: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required,Validators.maxLength(8)]),
      confirmPassword: new FormControl(null),
    },
    { validators: this.checkIfPasswordIsMatch }
  );

  checkIfPasswordIsMatch(control: AbstractControl): ValidationErrors | null {
    let password = control.get('password')?.value;
    let confirmPassword = control.get('confirmPassword')?.value;
    return password == confirmPassword ? null : { passwordMismatch: true };
  }

  sendResetPasswordData() {
    // if (this.resetPasswordFrom.invalid) {
    //   console.log('helooo2');
      
    //   this.resetPasswordFrom.markAllAsTouched();
    //   return;
    // }

    this._AuthService
      .SendResetPassworForm(this.resetPasswordFrom.value)
      .subscribe({
        next: (res) => {
          //toaster to display respond message
          this._ToastrService.success('your password has been updatd successfuly')
          this._Router.navigate(['/auth/login']);
        },
          error:(err)=>{
            console.log(err);       
      },
    
      }
    );
  }
}
