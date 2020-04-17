import { Todo } from '../../../shared/to-dos/models/todo.model';

export interface TodoState {
  loading?: boolean;
  todos?: Todo[];
  processing?: boolean;
}

export const initialTodoState: TodoState = {
}
