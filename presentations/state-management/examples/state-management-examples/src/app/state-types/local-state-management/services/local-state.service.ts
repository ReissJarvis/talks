import { Injectable, OnDestroy } from '@angular/core'
import {
  ConnectableObservable,
  merge,
  Observable, of,
  OperatorFunction,
  pipe,
  queueScheduler,
  Subject,
  Subscription
} from 'rxjs'
import {
  catchError,
  distinctUntilChanged,
  filter,
  map,
  mergeAll,
  observeOn,
  publishReplay,
  scan,
  shareReplay
} from 'rxjs/operators'
import { pipeFromArray } from 'rxjs/internal/util/pipe'
import { UnaryFunction } from 'rxjs/src/internal/types';

export function select<T>(...ops: OperatorFunction<T, any>[]) {
  return pipe(
    pipeFromArray(ops),
    filter(v => v !== undefined),
    distinctUntilChanged(),
    shareReplay(1)
  )
}


type StateSelectorFn<T, R> = (state: T) => R;
export function createSelector<T, R>(optFnOrMap: OperatorFunction<T, R>[] | StateSelectorFn<T, R>): OperatorFunction<T, R>[] {
  if (Array.isArray(optFnOrMap)) {
    return optFnOrMap
  }

  return
}

@Injectable()
export class LocalStateService<T> implements OnDestroy {

  private _subscription =  new Subscription()
  private _stateObservables = new Subject<Observable<Partial<T>>>()
  private _stateSlices = new Subject<Partial<T>>()
  private _effectSubject = new Subject<any>()

  private stateAccumulator = (acc: T, command: Partial<T>): T => ({...acc, ...command})

  private _state$ = merge(
    this._stateObservables.pipe(mergeAll(), observeOn(queueScheduler)),
    this._stateSlices.pipe(observeOn(queueScheduler))
  ).pipe(
    scan(this.stateAccumulator, {} as T),
    catchError(err => {
      console.error(err)
      return of(err)
    }),
    publishReplay(1),
  )

  constructor() {
    this._subscription.add((this._state$ as ConnectableObservable<T>).connect())
    this._subscription.add((this._effectSubject
      .pipe(
        mergeAll(),
        catchError(err => {
          console.error(err)
          return of(err)
        }),
        publishReplay(1),
      ) as ConnectableObservable<any>).connect()
    )
  }

  setState(s: Partial<T>): void {
    this._stateSlices.next(s)
  }

  connectState<A extends keyof T>(strOrObs: A | Observable<Partial<T>>, obs?: Observable<T[A]>): void {
    let _obs
    if (typeof strOrObs === 'string') {
      const str: A = strOrObs
      const o = obs as Observable<T[A]>
      _obs = o.pipe(
        map(s => ({[str]: s}))
      )
    } else {
      const ob = strOrObs as Observable<Partial<T>>
      _obs = ob
    }
    this._stateObservables.next(_obs as Observable<Partial<T>> | Observable<T[A]>)
  }

  connectEffect(o: Observable<any>): void {
    this._effectSubject.next(o)
  }

  select(...opOrMapFn: OperatorFunction<T, any>[] | string[]): Observable<any> {
    if (!opOrMapFn || opOrMapFn.length === 0) {
      return this._state$
        .pipe(
          distinctUntilChanged(),
          shareReplay(1)
        )
    } else if (!this.isOperateFnArray(opOrMapFn)) {
      const [path] = opOrMapFn
      return this._state$.pipe(
        map((x: T) => x[path]),
        filter(v => v !== undefined),
        distinctUntilChanged(),
        shareReplay(1)
      )
    } else {
      return this._state$.pipe(
        select(...opOrMapFn as [])
      )
    }
  }

  private isOperateFnArray(op: OperatorFunction<T, any>[] | string[]): op is OperatorFunction<T, any>[] {
    return !(op.length === 1 && typeof op[0] === 'string')
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe()
  }
}
