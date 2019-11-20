import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Animal } from '@ngrx8-poc/core-data';

@Component({
  selector: 'ngrx8-poc-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent {
  selectedAnimal: Animal;
  @Input() group: FormGroup;
  @Input() set animal(value: Animal) {
    this.selectedAnimal = value;
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name,
      height: value.height,
      mass: value.mass,
      continent: value.continent
    })
  }
  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  submit(directive: NgForm) {
    if (this.group.valid) {
      this.submitted.emit(this.group.value);
      directive.resetForm();
    }
  }

  cancel() {
    this.cancelled.emit();
  }

  validateField(control: string, directive: NgForm) {
    return this.group.get(control).invalid && directive.submitted;
  }

  determineUpdate() {
    return !!this.group.value.id;
  }
}
