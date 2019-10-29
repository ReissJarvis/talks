import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../../app/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BeerCardComponent } from './beer-card/beer-card.component';



@NgModule({
  declarations: [SearchComponent, BeerCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SearchModule { }
