import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../shared/to-dos/services/todo.service';
import { Todo } from '../../shared/to-dos/models/todo.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  todos: Todo[];
  loading = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.loading = true;
    const sub = this.todoService.getAll()
      .pipe(
        take(1)
      )
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      });
  }

  deleteTodo(todo: Todo) {
    this.todoService.delete(todo.id)
      .subscribe(() => this.getAllTodos());
  }

  updateTodo(todo: Todo) {
    this.todoService.update(todo.id, todo)
      .subscribe(() => this.getAllTodos());
  }

  addTodo(title: string) {
    this.todoService.add({title})
      .subscribe(() => this.getAllTodos());
  }
}
