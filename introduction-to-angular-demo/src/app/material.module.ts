import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material'


@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
