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

  constructor() {
    getTaskList().then(compiti => {
      this.listaCompiti=<Compito[]>compiti;
    })
  }

  ngOnInit(): void {
  }

}
