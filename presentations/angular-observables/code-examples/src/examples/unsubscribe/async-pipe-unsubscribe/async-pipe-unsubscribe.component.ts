import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-async-pipe-unsubscribe',
  templateUrl: './async-pipe-unsubscribe.component.html',
})
export class AsyncPipeUnsubscribeComponent {
 observable$ = new Observable(subscriber => {
   subscriber.next("value")
 });
}
