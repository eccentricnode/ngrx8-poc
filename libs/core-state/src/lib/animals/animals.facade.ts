import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { getAllAnimals, getSelectedAnimal } from './animals.selectors';
import { Animal } from '@ngrx8-poc/core-data';
import { AnimalsState } from './animals.reducer';
import * as AnimalsActions from './animals.actions';

@Injectable()
export class AnimalsFacade {
  allAnimals$ = this.store.pipe(select(getAllAnimals));
  selectedAnimal$ = this.store.pipe(select(getSelectedAnimal));

  constructor(private store: Store<AnimalsState>) {}

  selectAnimal(animalId: string) {
    this.store.dispatch(AnimalsActions.AnimalSelected({ animalId }));
  }

  loadAnimals() {
    this.store.dispatch(AnimalsActions.loadAnimals());
  }

  createAnimal(animal: Animal) {
    this.store.dispatch(AnimalsActions.CreateAnimal({ animal }));
  }

  updateAnimal(animal: Animal) {
    this.store.dispatch(AnimalsActions.UpdateAnimal({ animal }));
  }

  deleteAnimal(animal: Animal) {
    this.store.dispatch(AnimalsActions.DeleteAnimal({ animal }));
  }
}