import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

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
    private _snackBar: MatSnackBar,
    private _Router: Router
  ) {}
  resetPasswordFrom = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      seed: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.email]),
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
    if (this.resetPasswordFrom.invalid) {
      this.resetPasswordFrom.markAllAsTouched();
      return;
    }

    this._AuthService
      .SendResetPassworForm(this.resetPasswordFrom.value)
      .subscribe({
        next: (res) => {
          //toaster to display respond message
          this._snackBar.open('Register successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['success-snackbar'],
          });
          this._Router.navigate(['/auth/resetPassword']);
        },
      });
  }
}
