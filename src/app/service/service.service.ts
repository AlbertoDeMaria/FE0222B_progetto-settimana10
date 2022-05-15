import { Compito } from '../interface/compito';

var listaDiToDO:Compito[] = [];
var id:number = 0;

export async function getTaskList():Promise<Compito[]>{
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(<Compito[]>listaDiToDO);
    }, 2000);
  });
}

export async function aggiungiTask(titolo:string):Promise<Compito[]>{
  return await new Promise(resolve => {
    setTimeout(() => {
      if (!titolo){
        alert('scrivi qualcosa')
      } else {
        let compito:Compito = {'id':id++,'title':titolo, 'isDone': false};
        listaDiToDO.push(compito);
        resolve (<Compito[]>listaDiToDO);
      }
    }, 2000);
  });
}

export async function rimuoviCompito(index:number):Promise<Compito[]>{
  return await new Promise(resolve => {
    setTimeout(() => {
      listaDiToDO[index].isDone = true;
      console.log(listaDiToDO);
      resolve (<Compito[]>listaDiToDO);
    }, 2000);
  });
}
