import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AnimalsActions from './animals.actions';
import { Animal } from '@ngrx8-poc/core-data';

export const ANIMALS_FEATURE_KEY = 'animals';

export interface AnimalsState extends EntityState<Animal> {
  selectedAnimalId?: string | number; // which Animals record has been selected
  loaded: boolean; // has the Animals list been loaded
  error?: string | null; // last none error (if any)
}

export const animalsAdapter: EntityAdapter<Animal> = createEntityAdapter<Animal>();

export const initialState: AnimalsState = animalsAdapter.getInitialState({
  // set initial required properties
  selectedAnimalId: null,
  loaded: false
});

const animalsReducer = createReducer(
  initialState,
  on(AnimalsActions.loadAnimals, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(AnimalsActions.AnimalsLoadedSuccess, (state, { animals }) =>
    animalsAdapter.addAll(animals, { ...state, loaded: true })
  ),
  on(AnimalsActions.AnimalSelected, (state, { animalId }) => 
    Object.assign({}, state, { selectedAnimalId: animalId })
  ),
  on(AnimalsActions.AnimalCreationSuccess,
    (state, { animal }) => 
    animalsAdapter.addOne(animal, state)
  ),
  on(AnimalsActions.AnimalUpdatedSuccess,
    (state, { animal }) => 
    animalsAdapter.upsertOne(animal, state)  
  ),
  on(AnimalsActions.AnimalDeletedSuccess, 
    (state, { animal }) =>
    animalsAdapter.removeOne(animal.id, state)
  )
);

export function reducer(state: AnimalsState | undefined, action: Action) {
  return animalsReducer(state, action);
}

export const getSelectedAnimalId = (state: AnimalsState) => state.selectedAnimalId;

// get the selectors

export const {
  selectIds: selectAnimalIds,
  selectEntities: selectAnimalEntities,
  selectAll: selectAllAnimals,
  selectTotal: selectAnimalTotal
} = animalsAdapter.getSelectors();
