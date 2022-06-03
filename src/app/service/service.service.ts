import { Task } from '../interface/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class service {}
var listOfTodo:Task[] = [];
var id:number = 0;

export async function getTaskList():Promise<Task[]>{
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(<Task[]>listOfTodo);
    }, 2000);
    console.log('carico');
  });
}

export async function addTask(titolo:string):Promise<Task[]>{
  return await new Promise(resolve => {
    setTimeout(() => {
      if (!titolo){
        alert('scrivi qualcosa')
      } else {
        let compito:Task = {'id':id++,'title':titolo, 'isDone': false};
        listOfTodo.push(compito);
        resolve (<Task[]>listOfTodo);
      }
    }, 2000);
  });
}

export async function removeTask(index:number):Promise<Task[]>{
  return await new Promise(resolve => {
    setTimeout(() => {
      listOfTodo[index].isDone = true;
      console.log(listOfTodo);
      resolve (<Task[]>listOfTodo);
    }, 2000);
  });
}
