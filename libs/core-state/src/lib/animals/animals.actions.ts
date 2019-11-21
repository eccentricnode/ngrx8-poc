import { createAction, props } from '@ngrx/store';

import { Animal } from '@ngrx8-poc/core-data';

export const AnimalSelected = createAction(
  '[Animals] Animal Selected',
  props<{ animalId: string }>()
);

// Load Actions
export const loadAnimals = createAction('[Animals] Load Animals');

export const AnimalsLoadedSuccess = createAction(
  '[Animals] Animals Load Succeeded',
  props<{ animals: Animal[]}>()
);

export const AnimalsLoadedFailure = createAction(
  '[Animals] Animals Load Failed',
  props<{ error: any }>()
);

// Create Actions
export const CreateAnimal = createAction(
  '[Animals] Create New Animal',
  props<{ animal: Animal }>()
);

export const AnimalCreationSuccess = createAction(
  '[Animals] New Animal Created',
  props<{animal: Animal}>()
);

export const AnimalCreationFailure = createAction(
  '[Animals] Animal Create Failed',
  props<{error: any}>()
);

// Update Actions 
export const UpdateAnimal = createAction(
  '[Animals] Update Animal',
  props<{animal: Animal}>()
);

export const AnimalUpdatedSuccess = createAction(
  '[Animals] Animal Updated',
  props<{animal: Animal}>()
  );

export const AnimalUpdatedFailure = createAction(
  '[Animals] Animal Update Failed',
  props<{error: any}>()
);

// Delete Actions
export const DeleteAnimal = createAction(
  '[Animal] Delete Animal',
  props<{animal: Animal}>()
);

export const DeleteAnimalSuccess = createAction(
  '[Animals] Animal Deleted',
  props<{animal: Animal}>()
);

export const DeleteAnimalFailure = createAction(
  '[Animals] Animal Delete Failed',
  props<{error: any}>()
  );
