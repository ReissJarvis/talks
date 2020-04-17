import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../../../shared/to-dos/models/todo.model';

@Component({
  selector: 'app-input-output-child',
  templateUrl: './input-output-child.component.html',
  styleUrls: ['./input-output-child.component.scss']
})
export class InputOutputChildComponent {
  @Input() todos: Todo[];
  @Input() processing: boolean;
  @Output() updatedTodo = new EventEmitter<Todo>();
  @Output() deletedTodo = new EventEmitter<Todo>();
  @Output() addTodo = new EventEmitter<string>();

  newItem: string

  add() {
    this.addTodo.emit(this.newItem);
    this.newItem = '';
  }

  update(todo: Todo) {
    this.updatedTodo.next({...todo, done: !!todo.done});
  }
}
