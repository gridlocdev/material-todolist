import { Injectable } from '@angular/core';
import Todo from '../Models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  static createTodo(newTodo: Todo) {
    throw new Error('Method not implemented.');
  }
  static readTodoList(): Array<Todo> {
    return new Array<Todo>(
      {
        id: 0,
        text: 'Sample Todo Text',
        completed: false,
      },
      {
        id: 1,
        text: 'Sample Todo Textaa',
        completed: false,
      }
    );
    throw new Error('Method not implemented.');
  }
  static updateTodo(updatedTodo: Todo) {
    throw new Error('Method not implemented.');
  }
  static deleteTodo(id: number) {
    throw new Error('Method not implemented.');
  }

  // Create, Read, Update, Delete

  constructor() {}
}
