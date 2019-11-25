import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AnimalsState,
  animalsAdapter
} from './animals.reducer';

// Lookup the 'Animals' feature state managed by NgRx
export const getAnimalsState = createFeatureSelector<AnimalsState>('animals');

const { selectAll, selectEntities } = animalsAdapter.getSelectors();

export const getAnimalsLoaded = createSelector(
  getAnimalsState,
  (state: AnimalsState) => state.loaded
);

export const getAllAnimals = createSelector(
  getAnimalsState,
  (state: AnimalsState) => selectAll(state)
);

export const getAnimalsEntities = createSelector(
  getAnimalsState,
  (state: AnimalsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAnimalsState,
  (state: AnimalsState) => state.selectedAnimalId
);

export const getSelectedAnimal = createSelector(
  getAnimalsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
