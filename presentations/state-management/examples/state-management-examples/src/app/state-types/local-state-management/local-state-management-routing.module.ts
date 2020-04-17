import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalStateManagementComponent } from './local-state-management.component';


const routes: Routes = [
  {
    path: '',
    component: LocalStateManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalStateManagementRoutingModule { }
