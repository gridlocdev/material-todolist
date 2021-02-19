import { Component, OnInit } from '@angular/core';
import Todo from '../../Models/Todo';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-card-list-view',
  templateUrl: './card-list-view.component.html',
  styleUrls: ['./card-list-view.component.css'],
  providers: [TodoService],
})
export class CardListViewComponent implements OnInit {
  todoList: Array<Todo> = [];

  deleteTodo(id: number) {

    const index = this.findIndexOfTodoId(id);

    TodoService.deleteTodo(id);

    this.todoList.splice(index, 1);
  }

  updateTodo(updatedTodo: Todo) {
    const index = this.findIndexOfTodoId(updatedTodo.id);

    console.log('updatedTodo: ' + updatedTodo.text);

    // todoService.updateTodo(todo: Todo)
    TodoService.updateTodo(updatedTodo);
    this.todoList[index] = updatedTodo;
  }

  addTodo(newTodo: Todo) {
    newTodo.id = this.newMaxTodoIdValue(this.todoList);
    TodoService.createTodo(newTodo);
    this.todoList.push(newTodo);
  }

  newMaxTodoIdValue(objectArray: Array<Todo>) {
    var maxID = 0;

    objectArray.map((obj: Todo) => {
      if (obj.id > maxID) maxID = obj.id;
    });

    return maxID + 1;
  }

  findIndexOfTodoId(id: number) {
    const index = this.todoList
      .map(function (todo) {
        return todo.id;
      })
      .indexOf(id);

    return index;
  }

  constructor() {}

  ngOnInit(): void {
    this.todoList = TodoService.readTodoList();
  }
}
