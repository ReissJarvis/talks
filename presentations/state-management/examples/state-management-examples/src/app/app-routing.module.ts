import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';


const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent
  },
  {
    path: 'input-output',
    loadChildren: () => import('./state-types/input-output/input-output.module').then(m => m.InputOutputModule)
  },
  {
    path: 'simple-service',
    loadChildren: () => import('./state-types/simple-service/simple-service.module').then(m => m.SimpleServiceModule)
  },
  {
    path: 'ngrx',
    loadChildren: () => import('./state-types/ngrx/ngrx.module').then(m => m.NgrxModule)
  },
  {
    path: 'local-state',
    loadChildren: () => import('./state-types/local-state-management/local-state-management.module').then(m => m.LocalStateManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
