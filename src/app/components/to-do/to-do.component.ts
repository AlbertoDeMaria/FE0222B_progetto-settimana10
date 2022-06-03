import { Task } from '../../interface/task';
import { Component, OnInit } from '@angular/core';
import { getTaskList, addTask, removeTask } from '../../service/service.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDOComponent implements OnInit {

  taskList:Task[] = [];
  title!:string;
  loaded:boolean = false;
  counter: number = 0;

  constructor() {
    getTaskList().then(compiti => {
      this.taskList=<Task[]>compiti;
      this.loaded=true;
      this.counter = this.taskList.filter(task => task.isDone == false ).length
    })
  }

  ngOnInit(): void {
  }

  updateList(){
    addTask(this.title).then(compiti =>{
      this.title = '';
      this.taskList=<Task[]>compiti;
      this.counter++;
    })
  }

  delete(index:number){
    removeTask(index).then(compiti =>{
      this.taskList=<Task[]>compiti;
      this.counter--;
    })
  }
}
