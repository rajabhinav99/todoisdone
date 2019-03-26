import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from '../model/todo';
import { User } from '../model/user'


@Injectable({
  providedIn: 'root'
})
export class ServiceTodoService {

baseUrluser = "http://localhost:3000/user";
baseUrl=" http://localhost:3000/todo"
  constructor(private http:HttpClient) { }



getUser() {
    return this.http.get<User[]>(this.baseUrluser)
  }

getTodo()
{
return this.http.get<ToDo[]>(this.baseUrl)
}
deletetoJson(id){
  return this.http.delete(this.baseUrl+"/"+id)
}

addtoJson(user:ToDo){
 
   return this.http.post(this.baseUrl,user)
 
}
edittojson(user:ToDo){
  console.log(user.id)
  return this.http.put<ToDo[]>(this.baseUrl+"/"+user.id,user)
}

getUserById(id:number){
  return this.http.get<ToDo>(this.baseUrl+"/"+id)
}


setUser(user: User) {
  return this.http.post(this.baseUrluser, user)
}
}



  



  



