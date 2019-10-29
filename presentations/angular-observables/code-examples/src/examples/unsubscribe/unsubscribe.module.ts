import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleUnsubscribeComponent } from './simple-unsubscribe/simple-unsubscribe.component';
import { AsyncPipeUnsubscribeComponent } from './async-pipe-unsubscribe/async-pipe-unsubscribe.component';
import { TakeUntilUnsubscribeComponent } from './take-until-unsubscribe/take-until-unsubscribe.component';
import { UnsubscribeComponent } from './unsubscribe.component';
import { MaterialModule } from "../../app/material.module";


@NgModule({
  declarations: [
    SimpleUnsubscribeComponent,
    AsyncPipeUnsubscribeComponent,
    TakeUntilUnsubscribeComponent,
    UnsubscribeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UnsubscribeComponent
  ]
})
export class UnsubscribeModule { }
