import { TodoState } from './todo.state';

export interface AppState {
  todos: TodoState;
}

export const todoStateSelector = (state: AppState) => state.todos;
