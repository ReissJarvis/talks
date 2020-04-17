import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxComponent } from './ngrx.component';
import { StoreModule } from '@ngrx/store';
import { todoReducers } from './reducers/todo.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './effects/todo.effects';
import { InputOutputModule } from '../input-output/input-output.module';


@NgModule({
  declarations: [NgrxComponent],
  imports: [
    CommonModule,
    NgrxRoutingModule,
    InputOutputModule,
    StoreModule.forFeature('todos', todoReducers),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class NgrxModule { }
