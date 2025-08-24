import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-createnewaccount',
  templateUrl: './createnewaccount.component.html',
  styleUrls: ['./createnewaccount.component.scss'],
})
export class CreatenewaccountComponent {
  public isHide: boolean = true;
  public isHideConfirm: boolean = true;
  imgSrc: any;

  registerForm = new FormGroup(
    {
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      country: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ]),
      confirmPassword: new FormControl(null),
    },
    this.confirmPassword
  );

  constructor(
    private readonly _AuthService: AuthService,
    private toastr: ToastrService,
    private _Router: Router
  ) {}

  Register(data: FormGroup) {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    let myData = new FormData();

    myData.append('userName', data.value.userName);
    myData.append('email', data.value.email);
    myData.append('country', data.value.country);
    myData.append('phoneNumber', data.value.phoneNumber);
    myData.append('password', data.value.password);
    myData.append('confirmPassword', data.value.confirmPassword);
    myData.append('profileImage', this.imgSrc);

    this._AuthService.Register(myData).subscribe({
      next: (res) => {
        this.toastr.success('Register success', 'success!');
        this._Router.navigate(['/auth/verify']);
        this._AuthService.email = data.value.email;
      },
    });
  }

  files: File[] = [];

  onSelect(event: any) {
    const selectedFile = event.addedFiles[0];
    if (selectedFile) {
      this.files = [selectedFile];
    }
    this.imgSrc = this.files[0];
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('confirmPassword')?.value) {
      return null;
    }
    return {
      misMatch: true,
    };
  }
}
