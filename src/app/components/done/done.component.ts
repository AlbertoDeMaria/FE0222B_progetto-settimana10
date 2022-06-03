import { Component, OnInit } from '@angular/core';
import { Compito } from '../interface/compito';
import { getTaskList } from '../service/service.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  listaCompiti!:Compito[];
  caricato:boolean=false;
  contatore:number = 0;

  constructor() {
    getTaskList().then(compiti => {
      this.listaCompiti=<Compito[]>compiti;
      this.caricato=true;
    })
  }

  ngOnInit(): void {
  }

}
