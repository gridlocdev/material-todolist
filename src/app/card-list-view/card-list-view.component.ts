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
  
  constructor(private _todoService: TodoService) {
    this._todoService = _todoService;
  }
  
  ngOnInit(): void {
    console.log('Hi!');
  
    this._todoService.readTodoList().then((_todoList: Array<Todo>) => {
      this.todoList = _todoList;
      console.log(_todoList);
    });
  }

  deleteTodo(deletedTodo: Todo) {
    const index = this.findIndexOfTodoId(deletedTodo.id);

    this._todoService.deleteTodo(deletedTodo).then(()=> {
      console.log("Todo delete sent")
    })
    
    this.todoList.splice(index, 1);
  }
  
  updateTodo(updatedTodo: Todo) {
    const index = this.findIndexOfTodoId(updatedTodo.id);
    
    console.log('updatedTodo: ' + updatedTodo.text);
    
    this._todoService.updateTodo(updatedTodo).then(()=> {
      console.log("Todo update sent")
    })
    //TodoService.updateTodo(updatedTodo);
    this.todoList[index] = updatedTodo;
  }
  
  addTodo(newTodo: Todo) {
    newTodo.id = this.newMaxTodoIdValue(this.todoList);
    this._todoService.createTodo(newTodo).then(()=> {
      console.log("Todo submitted")
    })

    //TodoService.createTodo(newTodo);
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

}
