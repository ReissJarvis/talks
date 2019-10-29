import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
})
export class UnsubscribeComponent implements OnDestroy {
  unsubscribe = new Subject();

  private _value = new Subject<number>();
  value = this._value.pipe(takeUntil(this.unsubscribe));

  emitUnsubscribe() {
    this.unsubscribe.next();
  }

  emitNewValue() {
    this._value.next(Math.round(Math.random() * 100))
  }

  reset() {
    this.value = this._value.pipe(takeUntil(this.unsubscribe));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
