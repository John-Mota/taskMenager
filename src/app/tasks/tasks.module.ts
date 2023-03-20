import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TasksService } from './shared/tasks.service';
import { TodoListComponent } from './list/todo-list.component';
import { RegisterTasksComponent } from './register-tasks/register-tasks.component';



@NgModule({
  declarations: [
    TodoListComponent,
    RegisterTasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TasksService
  ]
})
export class TasksModule { }
