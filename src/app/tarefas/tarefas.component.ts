import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
})
export class TarefasComponent implements OnInit {
  meuStorage = localStorage;

  tarefas: String[] = [];
  tarefa: string;
  quantidade: number;
  qt: string;

  constructor() {
    this.quantidade = 0;
  }

  ngOnInit() {}

  guardarLista(tarefa: string) {
    this.quantidade++;
    this.tarefas.push(this.tarefa);

    this.qt = this.quantidade.toString();

    //console.log(this.quantidade);
    localStorage.setItem(this.qt, tarefa);
    //console.log(localStorage.getItem('3'));
    return this.tarefas;
  }

  ListCount() {
    return this.tarefas;
  }

  removeTask(data: any) {
    let index: number = this.tarefas.indexOf(data);
    console.log(index - 1);
    if (index !== -1) {
      this.tarefas.splice(index - 1, 1);
      index = 0;
    } else {
      this.tarefas.splice(0, 1);
      index = 0;
    }
  }
}
