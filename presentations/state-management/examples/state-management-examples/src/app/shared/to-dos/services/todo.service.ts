import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, mapTo, take, tap } from 'rxjs/operators';

import { Todo } from '../models/todo.model';

const intialTodoList = [
  {
    id: 1,
    title: 'Todo 1',
    done: true
  },
  {
    id: 2,
    title: 'Todo 2',
    done: false
  },
  {
    id: 3,
    title: 'Todo 3',
    done: false
  }
]

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos = new BehaviorSubject<Todo[]>(intialTodoList);
  private _delay = 3000;

  getAll(): Observable<Todo[]> {
    return this._todos.pipe(take(1));
  }

  add(todo: Partial<Todo>): Observable<Todo> {
    return of(todo)
     .pipe(
       delay(this._delay),
       mapTo(todo as Todo),
       tap(t => {
         this._todos.next([
           ...this._todos.value,
           {
             id: t.id || this._todos.value.length + 1,
             title: t.title || 'New Todo',
             done: false
           }
        ]);
       }),
     );
  }

  delete(id: number): Observable<Todo[]> {
    return of(id)
      .pipe(
        delay(this._delay),
        mapTo(this._todos.value.filter(t => t.id !== id)),
        tap(todos => {
          this._todos.next(todos);
        }),
      );
  }

  update(id: number, todo: Partial<Todo>): Observable<Todo[]> {
    console.log(todo)
    return of(id)
      .pipe(
        delay(this._delay),
        mapTo(
          this._todos.value.map(t => {
            if (t.id === id) {
              return {
                ...t,
                ...todo
              };
            }

            return t;
          })
        ),
        tap(todos => {
          this._todos.next(todos);
        }),
      );
  }
}
