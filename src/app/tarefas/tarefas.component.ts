import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
})
export class TarefasComponent implements OnInit {
  tarefas: String[] = [];
  tarefa: string;
  quantidade: number;

  constructor() {
    this.quantidade = 0;
  }

  ngOnInit() {}

  guardarLista(tarefa: string) {
    this.quantidade++;
    this.tarefas.push(this.tarefa);

    console.log(this.tarefas);

    return this.tarefas;
  }

  ListCount() {
    return this.tarefas;
  }
}
