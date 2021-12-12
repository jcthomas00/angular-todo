import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title:string = 'An Angular To Do List';
  editFlag:boolean[] = [];

  constructor(){
    this.addTodo("Walk the dog");
    this.addTodo("Feed the cat"),
    this.addTodo("Pet the monkey"),
    this.addTodo("Punish the giraffe")
  }
  todos:Todo[] = [];

  addTodo = (task:string):void => {
    this.todos.push(new Todo(task));
    this.editFlag.push(false);
  }
  deleteTodo = (index:number):void => {
    this.todos.splice(index,1);
  }

  handleSubmit = (data:{task:string}):void =>{
    this.addTodo(data.task);
  }
}
