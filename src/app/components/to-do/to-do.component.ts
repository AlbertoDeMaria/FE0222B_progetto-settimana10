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
    //recupero le task
    getTaskList().then(compiti => {
      this.taskList=<Task[]>compiti;
      //aggiorno lo stato di loaded
      this.loaded=true;
      //riempio counter in base a quante task .isDone == false trovo
      this.counter = this.taskList.filter(task => task.isDone == false ).length
    })
  }

  ngOnInit(): void {
  }

  updateList(){
    //chiamo la funzione per aggiornare la lista con la nuova task
    addTask(this.title).then(compiti =>{
      //svuoto il campo testo
      this.title = '';
      this.taskList=<Task[]>compiti;
      //incremento il counter
      this.counter++;
    })
  }

  delete(index:number){
    //chiamo la funzione per rimuovere la task e gli passo l'index
    removeTask(index).then(compiti =>{
      this.taskList=<Task[]>compiti;
      //decremento il counter
      this.counter--;
    })
  }
}
