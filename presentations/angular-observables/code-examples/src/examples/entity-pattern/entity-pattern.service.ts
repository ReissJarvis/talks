import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { TODO_DATABASE } from "./todo.database";
import { Todo } from "./todo";
import { delay, filter, takeUntil } from "rxjs/operators";

@Injectable()
export class EntityPatternService<T> {
  unsubscribe = new Subject();

  private _loading$ = new BehaviorSubject<boolean>(false);
  loading$ = this._loading$ .pipe(
    takeUntil(this.unsubscribe)
  );

  private _loaded$ = new BehaviorSubject<boolean>( false);
  loaded$ = this._loaded$ .pipe(
    takeUntil(this.unsubscribe)
  );

  private _entities$ = new BehaviorSubject<Todo[] | null>(null);
  entities$: Observable<Todo[]> = this._entities$
    .pipe(
      filter(entities => !!entities),
      takeUntil(this.unsubscribe)
    );


  delay = 5000;

  load(): Observable<boolean> {
    const loaded = new Subject<boolean>();
    this._loading$.next(true);

    of(TODO_DATABASE)
      .pipe(delay(this.delay))
      .subscribe(result => {
        loaded.next(true);
        loaded.complete();
        this._loaded$.next(true);
        this._loading$.next(false);
        this._entities$.next(result);
      });

    return loaded.pipe(takeUntil(this.unsubscribe));
  }

  add(todo: Todo): Observable<Todo> {
    const added = new Subject<Todo>();
    this._loading$.next(true);

    of(todo)
      .pipe(delay(this.delay))
      .subscribe(todo => {
        const currentEntities = [...this._entities$.value];

        currentEntities.push(todo);

        added.next(todo);
        added.complete();

        this._loading$.next(false);
        this._entities$.next(currentEntities);
      });

    return added.pipe(takeUntil(this.unsubscribe));
  }

  destory() {
    this._entities$.next(null);
    this._loaded$.next(false);
    this._loading$.next(false);
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
