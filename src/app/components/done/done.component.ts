import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/task';
import { getTaskList } from '../../service/service.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  taskList!:Task[];
  loaded:boolean=false;

  constructor() {
    //recupero le task
    getTaskList().then(compiti => {
      this.taskList=<Task[]>compiti;
      //aggiorno lo stato di loaded
      this.loaded=true;
    })
  }

  ngOnInit(): void {
  }

}
