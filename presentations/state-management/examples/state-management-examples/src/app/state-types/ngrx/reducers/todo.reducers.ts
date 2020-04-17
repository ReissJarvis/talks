import { initialTodoState, TodoState } from '../state/todo.state';
import { ETodoActions, TodoActions } from '../actions/todo.actions';

export const todoReducers = (state = initialTodoState, action: TodoActions): TodoState => {
  switch (action.type) {
    case ETodoActions.AddTodo:
    case ETodoActions.DeleteTodo:
    case ETodoActions.UpdateTodo: {
      return {
        ...state,
        processing: true
      }
    }

    case ETodoActions.GetTodosSuccess:
    case ETodoActions.AddTodoSuccess:
    case ETodoActions.UpdateTodoSuccess:
    case ETodoActions.DeleteTodoSuccess: {
      return {
        ...state,
        todos: action.payload,
        processing: false
      };
    }

    default:
      return state;
  }
}
