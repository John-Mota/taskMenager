import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksService } from './shared/tasks.service';
import { TodoListComponent } from './list/todo-list.component';



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TasksService
  ]
})
export class TasksModule { }
