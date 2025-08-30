import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
UserService
@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.scss']
})
export class CreateManagerComponent {
hide: boolean = true;
  hide2: boolean = true;
  imgSrc: any;
  constructor(
    private readonly _UserService: UserService,
    private _Router: Router,
    private _ToastrService:ToastrService
  ) {}
  addUserAdminForm = new FormGroup(
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
        Validators.maxLength(8),
        Validators.minLength(3),
      ]),
      confirmPassword: new FormControl(null),
    },
    this.confirmPassword
  );
  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('confirmPassword')?.value) {
      return null;
    }
    return {
      misMatch: true,
    };
  }

  addAdmin(data: FormGroup) {
    if (this.addUserAdminForm.invalid) {
      this.addUserAdminForm.markAllAsTouched();
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

    this._UserService.CreateAnManager(myData).subscribe({
      next: (res) => {
        this._ToastrService.success('you have been Added an admin successfully')
        this._Router.navigate(['/dashboard/manger/Users']);
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
}
