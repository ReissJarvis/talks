import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleUnsubscribeComponent } from './simple-unsubscribe/simple-unsubscribe.component';
import {Route, RouterModule} from "@angular/router";
import { AsyncPipeUnsubscribeComponent } from './async-pipe-unsubscribe/async-pipe-unsubscribe.component';
import { TakeUntilUnsubscribeComponent } from './take-until-unsubscribe/take-until-unsubscribe.component';

const routes: Route[] = [
  {
    path: 'simple',
    component: SimpleUnsubscribeComponent
  }
];

@NgModule({
  declarations: [SimpleUnsubscribeComponent, AsyncPipeUnsubscribeComponent, TakeUntilUnsubscribeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UnsubscribeModule { }
