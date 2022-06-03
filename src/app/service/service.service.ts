import { Task } from '../interface/task';

var listOfTodo:Task[] = [];
var id:number = 0;

//recupero le task
export async function getTaskList():Promise<Task[]>{
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(<Task[]>listOfTodo);
      //ritardo di 2 secondi come richiesto
    }, 2000);
    console.log('carico');
  });
}

export async function addTask(titolo:string):Promise<Task[]>{
  return await new Promise(resolve => {
    setTimeout(() => {
      // controllo se l'utente ha scritto qualcosa
      if (!titolo){
        alert('scrivi qualcosa')
      } else {
        // creo la task
        let task:Task = {'id':id++,'title':titolo, 'isDone': false};
        //pusho la task
        listOfTodo.push(task);
        // risolvo
        resolve (<Task[]>listOfTodo);
      }
      //ritardo di 2 secondi come richiesto
    }, 2000);
  });
}

export async function removeTask(index:number):Promise<Task[]>{
  return await new Promise(resolve => {
    setTimeout(() => {
      //setto true alla task con l'index che mi è stato passato
      listOfTodo[index].isDone = true;
      console.log(listOfTodo);
      resolve (<Task[]>listOfTodo);
      //ritardo di 2 secondi come richiesto
    }, 2000);
  });
}
