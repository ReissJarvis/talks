import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStateManagementRoutingModule } from './local-state-management-routing.module';
import { LocalStateManagementComponent } from './local-state-management.component';
import { InputOutputModule } from '../input-output/input-output.module';


@NgModule({
  declarations: [LocalStateManagementComponent],
    imports: [
        CommonModule,
        LocalStateManagementRoutingModule,
        InputOutputModule
    ]
})
export class LocalStateManagementModule { }
