import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskRoutes } from './tasks/tasks-routing-module';

export const routes: Routes = [
  { path: '', redirectTo: '/tarefas/list', pathMatch: 'full'},
  ...TaskRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
