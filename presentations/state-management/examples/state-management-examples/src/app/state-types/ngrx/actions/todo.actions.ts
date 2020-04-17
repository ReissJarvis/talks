import { Action } from '@ngrx/store';
import { Todo } from '../../../shared/to-dos/models/todo.model';

export enum ETodoActions {
  GetTodos = '[Todo] Get Todos',
  GetTodosSuccess = '[Todo] Get Todos Success',
  UpdateTodo = '[Todo] Update Todo',
  UpdateTodoSuccess = '[Todo] Update Todo Success',
  DeleteTodo = '[Todo] Delete Todo',
  DeleteTodoSuccess = '[Todo] Delete Todo Success',
  AddTodo = '[Todo] Add Todo',
  AddTodoSuccess = '[Todo] Add Todo Success'
}

export class GetTodos implements Action {
  public readonly type = ETodoActions.GetTodos
}

export class GetTodosSuccess implements Action {
  public readonly type = ETodoActions.GetTodosSuccess;
  constructor(public payload: Todo[]) {}
}

export class UpdateTodo implements Action {
  public readonly type = ETodoActions.UpdateTodo;
  constructor(public payload: Partial<Todo>) {}
}

export class UpdateTodoSuccess implements Action {
  public readonly type = ETodoActions.UpdateTodoSuccess;
  constructor(public payload: Todo[]) {}
}

export class DeleteTodo implements Action {
  public readonly type = ETodoActions.DeleteTodo;
  constructor(public payload: number) {}

}

export class DeleteTodoSuccess implements Action {
  public readonly type = ETodoActions.DeleteTodoSuccess;
  constructor(public payload: Todo[]) {}
}

export class AddTodo implements Action {
  public readonly type = ETodoActions.AddTodo
  constructor(public payload: Partial<Todo>) {}
}

export class AddTodoSuccess implements Action {
  public readonly type = ETodoActions.AddTodoSuccess;
  constructor(public payload: Todo[]) {}
}

export type TodoActions = GetTodos
  | GetTodosSuccess
  | UpdateTodo
  | UpdateTodoSuccess
  | DeleteTodo
  | DeleteTodoSuccess
  | AddTodo
  | AddTodoSuccess
