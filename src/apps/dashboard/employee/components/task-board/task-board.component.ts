import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TasksService } from '../../services/tasks.service';

interface Task {
  id: number;
  title: string;
  status: 'ToDo' | 'InProgress' | 'Done';
}
@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
TODoList: any[] = []
progressList: any[] = [];
doneList: any[] = [];

  constructor(private _TasksService:TasksService) {}
  
  onDrop(event: CdkDragDrop<Task[]>) {
    console.log(event);
    
    if (event.previousContainer === event.container) {
      // إعادة ترتيب داخل نفس القائمة
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // نقل عنصر بين قائمتين مختلفتين
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      // المهمة اللي اتنقلت
      const movedTask = event.container.data[event.currentIndex];
      console.log(movedTask);
      
      
      if (event.container.id === 'TODoList') {
        this.changeMyStatus(movedTask.id , 'ToDo');
      } else if (event.container.id === 'progressList') {
        this.changeMyStatus(movedTask.id , 'InProgress');
      } else {
        this.changeMyStatus(movedTask.id , 'Done');
      }

      // movedTask.status = newStatus;
      // console.log( movedTask.status);
    }
  }


  getAllASSIGnedTasks(status:any){
      let params={
      status:status,
      pageNumber:1,
      pageSize:999999
    }
    this._TasksService.getAllAssignedTasks(params).subscribe({
      next:(res)=>{
        
      if (status === 'ToDo') {
        this.TODoList = res.data
      } else if (status === 'InProgress') {
        this.progressList = res.data
      } else {
        this.doneList = res.data
      }

      },
      error:(err)=>{console.log(err);
      },
      complete:()=>{}
    })
  }

  changeMyStatus(id:any , status:any){
    let body = {status:status}
    this._TasksService.changeMyStatus(id, body).subscribe({
      next:(res)=>{console.log(res);
      },
      error:(err)=>{console.log(err);
      },
      complete:()=>{},

    })
  }

  ngOnInit(): void {
    this.getAllASSIGnedTasks('ToDo')
    this.getAllASSIGnedTasks('InProgress')
    this.getAllASSIGnedTasks('Done') 
  }

}
