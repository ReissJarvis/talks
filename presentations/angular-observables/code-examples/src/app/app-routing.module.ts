import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityPatternComponent } from "../examples/entity-pattern/entity-pattern.component";
import { UnsubscribeComponent } from "../examples/unsubscribe/unsubscribe.component";
import { SearchComponent } from "../examples/search/search.component";


const routes: Routes = [
  {
    path: 'entity-pattern',
    component: EntityPatternComponent
  },
  {
    path: 'unsubscribe',
    component: UnsubscribeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
