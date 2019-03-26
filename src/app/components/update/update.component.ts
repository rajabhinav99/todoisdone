import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceTodoService } from '../../service/servicetodo.service';
@Component({
  selector: 'app-edit',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editForm:FormGroup;
  submitted:boolean=false
  constructor(private formbuilder:FormBuilder,private router:Router,private servicetodo:ServiceTodoService) { }

  ngOnInit() {
    
if(localStorage.getItem("username")!==null){
  
let tid=localStorage.getItem("tid")
if(!tid){
  
  alert("invalid action pleaser check user list")
  this.router.navigate(['todoList'])
}
else{

  this.editForm= this.formbuilder.group({
      id:[],
      todoName:['',Validators.required],
      status:['',Validators.required],
         
          })
    
}
this.servicetodo.getUserById(+tid).subscribe(data=>{this.editForm.setValue(data)})
console.log(+tid)
}

    
  }
  edit(){
    this.submitted=true
if(this.editForm.invalid){
  return
}

this.servicetodo.edittojson(this.editForm.value).subscribe(data=>{})
this.servicetodo.getTodo().subscribe()
this.router.navigate(['todoList'])
  }
  userbyId(usr){
    this.servicetodo.getUserById(usr.id).subscribe(data=>{
    })
  }

  backToList(){
    this.router.navigate(['todoList'])

  }
}
