import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'
import { AnimalsModule } from './animals/animals.module';
import { HomeComponent } from './home/home.component'
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { AdminComponent } from './admin/admin.component';
import { IsAdminGuard } from './is-admin.guard'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [IsAdminGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    AnimalsModule
  ],
  providers: [UserService, IsAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


