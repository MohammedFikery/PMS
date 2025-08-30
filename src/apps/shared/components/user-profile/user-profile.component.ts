import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/apps/core/environments/environments';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  url = environment.ServerUrl;
  UserData!: any;
  selectedFile!: File;
  isHide:boolean = true;
  imgSrc: any;
constructor(private _SharedService:SharedService , private _ToastrService:ToastrService , private _Router:Router) {  }

UserFrom =  new FormGroup({
  userName : new FormControl(null,[Validators.required , Validators.maxLength(8) , Validators.pattern(/^[A-Za-z]{3,}[0-9]+$/)]),
  phoneNumber : new FormControl(null, [Validators.required]),
  email : new FormControl(null,[Validators.required , Validators.email]),
  country : new FormControl(null, [Validators.required]),
  confirmPassword: new FormControl()
})

getUserData(){
  this._SharedService.getCurrentUser().subscribe({
    next:(res)=>{console.log(res);
      this.UserData = res
      this.UserFrom.patchValue({
           userName: res.userName, 
           country: res.country, 
           phoneNumber: res.phoneNumber,
           email: res.email  
   })},
    error:(err)=>{console.log(err);
    },
    complete:()=>{
       
    }
  })

}

onFileSelected(event:Event){
const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
 
}

updateUserData(Userdata:FormGroup){
console.log(Userdata.value.country);
   
const formData = new FormData();
formData.append('userName', Userdata.value.userName),
formData.append('email', Userdata.value.email),
formData.append('phoneNumber', Userdata.value.phoneNumber),
formData.append('country', Userdata.value.country),
formData.append('profileImage', this.selectedFile),
formData.append('confirmPassword' , Userdata.value.confirmPassword)
this._SharedService.updateUserProfile(formData).subscribe({
  next:(res)=>{
    this._ToastrService.success('profile Update successfully')
    console.log(res);
    
  },
  error:(err)=>{
     this._ToastrService.error('something wrong happend' , err.error.errors)
     console.log(err);
     
  },
  complete:()=>{
    this.getUserData()
  }
})
}


  ngOnInit(): void {
    this.getUserData()

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
