import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Todo from '../../../../Models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  text: string;
  completed: boolean = false;

  @Output() addTodoEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  addTodo() {
    console.log(JSON.stringify({ text: this.text, completed: this.completed }));
    if (!this.text) {
      this.text = '';
    }
    this.addTodoEvent.emit(new Todo(-1, this.text, this.completed));
    this.text = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
