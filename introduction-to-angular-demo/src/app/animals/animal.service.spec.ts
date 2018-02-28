import { TestBed, inject } from '@angular/core/testing';

import { AnimalService } from './animal.service';

describe('AnimalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalService]
    });
  });

  it('should be created', inject([AnimalService], (service: AnimalService) => {
    expect(service).toBeTruthy();
  }));

  it('should return all animals', inject([AnimalService], (service: AnimalService) => {
    let result = service.getAnimals();
    expect(result.length).toEqual(2);
  }));

  it('should return correct animal for name', inject([AnimalService], (service: AnimalService) => {
    let result = service.getAnimalByName('fido');
    expect(result.name).toEqual('fido');
  }));
});
