import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
export class Todo {
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {



  }
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[]
  message: string
  // we created a object and we are have two variable in the object
  // passing the constructor on the list 
  // todos=[ 
  //   new Todo(1, 'Learn to dance', false, new Date()),
  //   new Todo(2, 'I want ot visit pakistan' , false, new Date()),
  //   new Todo(3, 'I wan to be expert at angular', false, new Date()) ,


  // {id: 1, description:'Learn to dance'},
  // {id: 2, description:'I want ot visit pakistan'},
  // {id: 3, description:'I wan to be expert at angular'}
  //]
  todo = {
    id: 1,
    description: 'Learn to Dance'


  }

  constructor(private todoservice: TodoDataService,
              private router: Router) { }

  ngOnInit() {

    this.refreshTOdos()
  }

  refreshTOdos() {
    this.todoservice.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      })
  }
  deleteTodo(id) {

    this.todoservice.deleteTodo('in28munites', id).subscribe(response => {
      console.log(response)
      this.message = `Delete  ${id} Successful!`
      this.refreshTOdos()
    })
  }
  addTodo()
{

  this.router.navigate(['todos', -1])
}
  UpdateTodo(id)
  {
    console.log("update ")
    this.router.navigate(['todos', id])

  }
}
