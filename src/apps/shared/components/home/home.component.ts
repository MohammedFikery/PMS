import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
userName:string = ''
  constructor(private _SharedService:SharedService) {
    
    
  }
  getCurrentUserName(){
       this._SharedService.getCurrentUser().subscribe({
        next:(res)=>{;
          this.userName = res.userName
        },
        error:(err)=>{;
        },
        complete:()=>{}
       })
  }
  ngOnInit(): void {
    this.getCurrentUserName()
  }
   
}
