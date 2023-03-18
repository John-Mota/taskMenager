import { Component, OnInit } from '@angular/core';
import { Tasks } from '../shared/tasks.model';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public tasks: Tasks[];

  constructor(private tasksService: TasksService) {

  }
  ngOnInit(): void {
    this.tasks = this.lisarTodos()
    this.tasks = [
      new Tasks(21, 'Estudar', false),
      new Tasks(21, 'Trabalhar', true)
    ]
  }

  public lisarTodos(): Tasks[] {
    return this.tasksService.listAll()
  }

  public remover($event: any, tasks: Tasks): void {
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "' + tasks.nome + '"?')) {
      this.tasksService.remove(tasks.id);
      this.tasks = this.tasksService.listAll();
    }
  }
}
