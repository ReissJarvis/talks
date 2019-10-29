import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { takeUntil}  from "rxjs/operators";

@Component({
  selector: 'app-take-until-unsubscribe',
  templateUrl: './take-until-unsubscribe.component.html',
})
export class TakeUntilUnsubscribeComponent implements OnInit, OnDestroy {
  unsubscribe = new Subject();

  constructor() { }

  ngOnInit() {
    new Observable(subscriber => {
      subscriber.next("VALUE")
    })
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(value => console.log(value))
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
