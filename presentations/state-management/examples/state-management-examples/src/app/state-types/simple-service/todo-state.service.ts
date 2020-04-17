import { Injectable } from '@angular/core';
import { TodoService } from '../../shared/to-dos/services/todo.service';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../shared/to-dos/models/todo.model';

@Injectable()
export class TodoStateService {
   private _todos$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this._todos$.asObservable();

  constructor(private todoService: TodoService) { }

  getAll() {
     this.todoService.getAll()
       .subscribe(todos => this._todos$.next(todos));
  }

  update(todo: Todo) {
    this.todoService.update(todo.id, todo)
      .subscribe(todos => this._todos$.next(todos));
  }

  delete(id: number) {
    this.todoService.delete(id)
      .subscribe(todos => this._todos$.next(todos));
  }

  add(title: string) {
    this.todoService.add({title})
      .subscribe(todo => this._todos$.next([...this._todos$.value, todo]));
  }
}
