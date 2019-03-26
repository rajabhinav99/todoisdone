import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceTodoService } from '../../service/servicetodo.service';
import { ToDo } from 'src/app/model/todo';

@Component({
  selector: 'app-list-user',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private servicetodo: ServiceTodoService, private router: Router) { }
  todo: ToDo[] = []
  ngOnInit() {
    
      this.servicetodo.getTodo().subscribe(data => this.todo = data)

    
    this.doCheck();

  }


  delete(todo: ToDo) {
    this.servicetodo.deletetoJson(todo.id).subscribe(data => {
      this.todo = this.todo.filter(u => u !== todo);
    })
  }

  addToDo() {
    this.router.navigate(['addTodo'])
  }

  logof() {
    sessionStorage.removeItem("sessionId")
    this.router.navigate(['login'])

  }
  editToDo(todo: ToDo) {
    localStorage.removeItem("tid")
    alert(typeof (todo.id.toString()));
    localStorage.setItem("tid", todo.id.toString())
    this.router.navigate(['update'])


  }
  // add(fname,lname,email){
  //   this.userList.addtoJson(fname,lname,email).subscribe(data=>this.users=data)

  // }

  doCheck() {
    let isAuth = sessionStorage.getItem("sessionId");
    if (isAuth == undefined)
      this.router.navigate(['login']);
  }
}
