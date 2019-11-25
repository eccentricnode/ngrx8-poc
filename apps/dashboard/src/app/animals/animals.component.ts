import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Animal } from '@ngrx8-poc/core-data';
import { AnimalsFacade } from '@ngrx8-poc/core-state';

@Component({
  selector: 'ngrx8-poc-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  form: FormGroup;
  animals$: Observable<Animal[]> = this.animalsFacade.allAnimals$;
  selectedAnimal$: Observable<Animal> = this.animalsFacade.selectedAnimal$;

  constructor(
    private formBuilder: FormBuilder,
    private animalsFacade: AnimalsFacade
  ) { }

  ngOnInit() {
    this.animalsFacade.loadAnimals(),
    this.initForm();
    this.reset();
  }

  selectAnimal(animal) {
    this.animalsFacade.selectAnimal(animal.id);
  }

  saveAnimal(animal: Animal ) {
    animal.id ? this.animalsFacade.updateAnimal(animal) : this.animalsFacade.createAnimal(animal);
  }

  removeAnimal(animal) {
    this.animalsFacade.deleteAnimal(animal);
  }

  reset() {
    this.form.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      height: ['', Validators.compose([Validators.required])],
      mass: ['', Validators.compose([Validators.required])],
      continent: ['', Validators.compose([Validators.required])],
    });
  }
}
