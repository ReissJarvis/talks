import { Component, OnInit } from '@angular/core';
import { Animal, AnimalService } from '../animal.service'

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  constructor(private animalService: AnimalService) { }
  animals: Animal[]

  ngOnInit() {
    this.animals = this.animalService.getAnimals()
  }

}
