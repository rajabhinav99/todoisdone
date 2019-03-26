import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import {  TodoListComponent } from './components/todo-list/todo-list.component';

import { UpdateComponent } from './components/update/update.component';
import { RegisterComponent } from './components/register/register.component';

const myroutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'addTodo',component:AddTodoComponent},
  {path:'todoList',component:TodoListComponent},
  {path:'update',component:UpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
