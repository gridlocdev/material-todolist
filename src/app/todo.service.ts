import { Injectable } from '@angular/core';
import Todo from '../Models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todoList: Array<Todo>;

  constructor() {}

  // Create, Read, Update, Delete

  async createTodo(newTodo: Todo) {
    return fetch('http://localhost:5000/api/todos/', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        this._todoList = data;
        console.log(this._todoList);
        return this._todoList;
      });
  }
  async readTodoList(): Promise<Todo[]> {
    return fetch('http://localhost:5000/api/todos/', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this._todoList = data;
        console.log(this._todoList);
        return this._todoList;
      });
  }
  async updateTodo(updatedTodo: Todo) {
    return fetch('http://localhost:5000/api/todos/' + updatedTodo.id, {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        this._todoList = data;
        console.log(this._todoList);
        return this._todoList;
      });
  }
  deleteTodo(deletedTodo: Todo) {
    return fetch('http://localhost:5000/api/todos/' + deletedTodo.id, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deletedTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        this._todoList = data;
        console.log(this._todoList);
        return this._todoList;
      });
  }
}
