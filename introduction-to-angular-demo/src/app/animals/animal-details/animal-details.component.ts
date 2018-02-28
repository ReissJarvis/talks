import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Animal, AnimalService } from '../animal.service'

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private animalService: AnimalService) { }
  animal: Animal
  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.animal = this.animalService.getAnimalByName(params.animalName)
      })
  }

}
