import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ANIMALS_FEATURE_KEY,
  State,
  AnimalsPartialState,
  animalsAdapter
} from './animals.reducer';

// Lookup the 'Animals' feature state managed by NgRx
export const getAnimalsState = createFeatureSelector<
  AnimalsPartialState,
  State
>(ANIMALS_FEATURE_KEY);

const { selectAll, selectEntities } = animalsAdapter.getSelectors();

export const getAnimalsLoaded = createSelector(
  getAnimalsState,
  (state: State) => state.loaded
);

export const getAnimalsError = createSelector(
  getAnimalsState,
  (state: State) => state.error
);

export const getAllAnimals = createSelector(
  getAnimalsState,
  (state: State) => selectAll(state)
);

export const getAnimalsEntities = createSelector(
  getAnimalsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAnimalsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getAnimalsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
