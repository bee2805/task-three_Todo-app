import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos!: Todo[];
  inputTodo: string = "";

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Content',
        completed: false
      },
      {
        content: 'Second Content',
        completed: false
      }
    ]
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i ! ==id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = "";
  }

}
