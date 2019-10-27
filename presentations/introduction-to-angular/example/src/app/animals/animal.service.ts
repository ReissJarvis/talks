import { Injectable } from '@angular/core';

@Injectable()
export class AnimalService {

  animals: Animal[] = [
    { type: 'dog', name: 'fido' },
    { type: 'cat', name: 'milo'},
  ]

  constructor() { }

  getAnimals(): Animal[] {
    return this.animals
  }

  getAnimalByName(name) {
    return this.animals.find(animal => animal.name === name)
  }

}

export interface Animal {
  type: string
  name: string
}
