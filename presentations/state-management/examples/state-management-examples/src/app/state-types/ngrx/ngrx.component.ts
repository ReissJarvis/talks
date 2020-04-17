import { Component, OnInit } from '@angular/core';
import { AppState, todoStateSelector } from './state/app.state';
import { Store } from '@ngrx/store';
import { TodoState } from './state/todo.state';
import { AddTodo, DeleteTodo, GetTodos, UpdateTodo } from './actions/todo.actions';
import { Todo } from '../../shared/to-dos/models/todo.model';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {
  todoState$ = this.store.select<TodoState>(todoStateSelector);
  constructor(public store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTodos());
  }

  addTodo(title: string) {
    this.store.dispatch(new AddTodo({title}));
  }

  updateTodo(todo: Todo) {
    this.store.dispatch(new UpdateTodo(todo));
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(new DeleteTodo(todo.id));
  }

}
