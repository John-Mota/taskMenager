import { Routes } from "@angular/router";

import { TodoListComponent } from "./list/todo-list.component";

export const TaskRoutes: Routes = [
    { path: 'tarefas', redirectTo: 'tarefas/list'},
    { path: 'tarefas/list', component: TodoListComponent}
]