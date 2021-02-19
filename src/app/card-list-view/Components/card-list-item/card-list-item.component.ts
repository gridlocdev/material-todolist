import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import Todo from '../../../../Models/Todo';

@Component({
  selector: 'app-card-list-item',
  templateUrl: './card-list-item.component.html',
  styleUrls: ['./card-list-item.component.css'],
})
export class CardListItemComponent implements OnInit {
  @Input() id: number;
  @Input() text: string;
  @Input() completed: boolean;

  @Output() deleteTodoEvent: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() updateTodoEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  updateTodoInput_Checked(updatedTodoChecked: boolean) {
    console.log(this.text);
    this.completed = updatedTodoChecked;
    this.updateTodo(new Todo(this.id, this.text, this.completed));
  }

  updateTodoInput_Text(updatedTodoText: string) {
    console.log(this.text);
    this.text = updatedTodoText;
    this.updateTodo(new Todo(this.id, this.text, this.completed));
  }

  updateTodo(updatedTodo: Todo) {
    this.updateTodoEvent.emit(updatedTodo);
  }

  deleteTodo() {
    this.deleteTodoEvent.emit(new Todo(this.id, this.text, this.completed));
  }

  log(input: any) {
    console.log(input);
  }

  ngOnInit(): void {}
}
