import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityPatternComponent } from './entity-pattern.component';
import { EntityPatternService } from "./entity-pattern.service";
import { MaterialModule } from "../../app/material.module";
import { MatInputModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [EntityPatternComponent],
  exports: [EntityPatternComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EntityPatternService
  ]
})
export class EntityPatternModule { }
