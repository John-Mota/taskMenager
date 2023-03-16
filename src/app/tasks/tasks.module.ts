import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksService } from './shared/tasks.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TasksService
  ]
})
export class TasksModule { }
