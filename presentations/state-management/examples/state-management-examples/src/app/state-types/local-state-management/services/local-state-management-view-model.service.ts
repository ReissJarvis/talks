import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LocalStateService } from './local-state.service';
import { Todo } from '../../../shared/to-dos/models/todo.model';
import { TodoService } from '../../../shared/to-dos/services/todo.service';
import { flatMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { newArray } from '@angular/compiler/src/util';

export interface TodoState {
  loading?: boolean;
  todos?: Todo[];
}

const initialState: TodoState = {}

@Injectable()
export class LocalStateManagementViewModelService extends LocalStateService<TodoState> {
  baseModel$: Observable<TodoState> = this.select();
  loadTodos$ = new Subject<void>();
  addTodo$ = new Subject<string>();
  deleteTodo$ = new Subject<Todo>();
  updateTodo$ = new Subject<Todo>();

  constructor(private todoService: TodoService) {
    super();

    this.setState(initialState);

    this.setupStates();

    this.loadTodos$.next();
  }

  setupStates() {
    this.connectState(
      this.loadTodos$
        .pipe(
          tap(() => this.setState({loading : true})),
          flatMap(() => this.todoService.getAll()),
          map((todos: Todo[]) => ({ loading: false, todos }))
        )
    );

    this.connectState(
      this.addTodo$
        .pipe(
          flatMap((title: string) => this.todoService.add({ title })),
          withLatestFrom(this.baseModel$),
          map(([newTodo, vm]: [Todo, TodoState]) => ({
            todos: [
              ...vm.todos,
              newTodo
            ]
          }))
        )
    );

    this.connectState(
      this.deleteTodo$
        .pipe(
          flatMap((todo) => this.todoService.delete(todo.id)),
          map((todos: Todo[]) => ({todos}))
        )
    );

    this.connectState(
      this.updateTodo$
        .pipe(
          flatMap((todo) => this.todoService.update(todo.id, todo)),
          map((todos: Todo[]) => ({todos}))
        )
    );
  }
}
