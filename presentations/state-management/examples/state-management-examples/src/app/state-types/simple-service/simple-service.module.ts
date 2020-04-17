import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleServiceRoutingModule } from './simple-service-routing.module';
import { SimpleServiceComponent } from './simple-service.component';
import { InputOutputModule } from '../input-output/input-output.module';
import { TodoStateService } from './todo-state.service';


@NgModule({
  declarations: [SimpleServiceComponent],
    imports: [
        CommonModule,
        SimpleServiceRoutingModule,
        InputOutputModule
    ],
  providers: [TodoStateService]
})
export class SimpleServiceModule { }
