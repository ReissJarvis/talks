import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoService } from '../../../shared/to-dos/services/todo.service';
import {
  AddTodo, AddTodoSuccess, DeleteTodo, DeleteTodoSuccess,
  ETodoActions,
  GetTodos,
  GetTodosSuccess,
  UpdateTodo,
  UpdateTodoSuccess
} from '../actions/todo.actions';
import { flatMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Todo } from '../../../shared/to-dos/models/todo.model';
import { Store } from '@ngrx/store';
import { TodoState } from '../state/todo.state';
import { AppState, todoStateSelector } from '../state/app.state';

@Injectable()
export class TodoEffects {
  @Effect()
  getTodos$ = this.actions$
    .pipe(
      ofType<GetTodos>(ETodoActions.GetTodos),
      flatMap(() => this.todoService.getAll()),
      map(todos => new GetTodosSuccess(todos))
    )

  @Effect()
  addTodo$ = this.actions$
    .pipe(
      ofType<AddTodo>(ETodoActions.AddTodo),
      map((action: AddTodo) => action.payload),
      flatMap((todo: Todo) => this.todoService.add(todo)),
      withLatestFrom(this.store.select<TodoState>(todoStateSelector)),
      map(([addedTodo, todoState]) => new AddTodoSuccess([...todoState.todos, addedTodo]))
    )

  @Effect()
  updateTodo$ = this.actions$
    .pipe(
      ofType<UpdateTodo>(ETodoActions.UpdateTodo),
      map((action: UpdateTodo) => action.payload),
      flatMap((todo: Todo) => this.todoService.update(todo.id, todo)),
      map((updatedTodos) => new UpdateTodoSuccess(updatedTodos))
    )

  @Effect()
  deleteTodo$ = this.actions$
    .pipe(
      ofType<DeleteTodo>(ETodoActions.DeleteTodo),
      map((action: DeleteTodo) => action.payload),
      flatMap((id: number) => this.todoService.delete(id)),
      map((updatedTodos) => new DeleteTodoSuccess(updatedTodos))
    )


  constructor(private actions$: Actions, private todoService: TodoService, private store: Store<AppState>) {
  }
}
