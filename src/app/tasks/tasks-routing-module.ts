import { Routes } from "@angular/router";

import { TodoListComponent } from "./list/todo-list.component";
import { RegisterTasksComponent } from "./register-tasks/register-tasks.component";
import { TaskEditingComponent } from "./task-editing/task-editing.component";

export const TaskRoutes: Routes = [
    { 
        path: 'tarefas', 
        redirectTo: 'tarefas/list'
    },
    { 
        path: 'tarefas/list', 
        component: TodoListComponent
    },
    { 
        path: 'tarefas/registrar', 
        component: RegisterTasksComponent
    },
    {
        path: 'tarefas/editar/:id', 
		component: TaskEditingComponent
    }
]