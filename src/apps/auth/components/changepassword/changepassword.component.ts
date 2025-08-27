import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent {
  hide: boolean = true;
  hide2: boolean = true;
  hide3: boolean = true;
  constructor(
    private readonly _AuthService: AuthService,
    private _Router: Router,
    private _ToastrService:ToastrService
  ) {}
  channgPasseorderForm = new FormGroup({
    oldPassword: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(3),
    ]),
    confirmNewPassword: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
  });

  changePassword(data: FormGroup) {
    this._AuthService.changePsswordUser(data.value).subscribe({
      next: (res) => {
        this._ToastrService.success('your password has been change successfully')
        this._Router.navigate(['/auth/login']);
      },
    });
  }
}
