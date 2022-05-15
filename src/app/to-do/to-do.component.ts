import { Compito } from './../interface/compito';
import { Component, OnInit } from '@angular/core';
import { getTaskList, aggiungiTask, rimuoviCompito } from '../service/service.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDOComponent implements OnInit {

  listaCompiti!:Compito[]
  titolo!:string;

  constructor() {
    getTaskList().then(compiti => {
      this.listaCompiti=<Compito[]>compiti;
    }
    )
  }

  ngOnInit(): void {
  }

  copiaTitolo(event:Event){
    const target = <HTMLInputElement>event.target;
    this.titolo= target.value;
  }

  aggiornaLista(){
    aggiungiTask(this.titolo).then(compiti =>{
      this.listaCompiti=<Compito[]>compiti;
    })
  }

  elimina(index:number){
    rimuoviCompito(index).then(compiti =>{
      this.listaCompiti=<Compito[]>compiti;
    })
  }

}
