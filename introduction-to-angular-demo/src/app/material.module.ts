import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule
} from '@angular/material'


@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class MaterialModule { }
