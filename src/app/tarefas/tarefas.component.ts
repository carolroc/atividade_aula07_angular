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

    //console.log(this.quantidade);

    return this.tarefas;
  }

  ListCount() {
    return this.tarefas;
  }

  removeTask(data: any) {
    const index: number = this.tarefas.indexOf(data);

    console.log(index);
    if (index !== -1) {
      this.tarefas.splice(index - 1, 1);
    }
  }
}
