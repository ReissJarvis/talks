import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { InputOutputComponent } from './input-output.component';
import { InputOutputChildComponent } from './input-output-child/input-output-child.component';

import { MaterialModule } from '../../shared/material.module';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: InputOutputComponent
  }
];

@NgModule({
    declarations: [InputOutputComponent, InputOutputChildComponent],
    exports: [
        InputOutputChildComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class InputOutputModule { }
