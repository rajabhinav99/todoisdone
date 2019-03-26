import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceTodoService } from '../../service/servicetodo.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false

  constructor(private formbuilder: FormBuilder, private router: Router, private servicetodo: ServiceTodoService) { }

  ngOnInit() {
    this.addForm = this.formbuilder.group({
      id: [],
      todoName: ['', Validators.required],
      status: []


    })
  }

  create() {

    this.submitted = true

    if (this.addForm.invalid) {
      return;
    }

    this.servicetodo.addtoJson(this.addForm.value)
      .subscribe()
    this.servicetodo.getTodo().subscribe()
    this.router.navigate(['todoList'])
  }

  backToList() {
    this.router.navigate(['todoList'])

  }
}
