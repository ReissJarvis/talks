import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { AnimalContainerComponent } from './animal-container/animal-container.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalService } from './animal.service'

const animalRoutes: Routes = [
  {
    path: 'animals',
    component: AnimalContainerComponent,
    children: [
      { path: '', component: AnimalListComponent },
      { path: ':animalName', component: AnimalDetailsComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(animalRoutes)
  ],
  declarations: [
    AnimalContainerComponent,
    AnimalListComponent,
    AnimalDetailsComponent
  ],
  providers:[ AnimalService ]
})
export class AnimalsModule { }
