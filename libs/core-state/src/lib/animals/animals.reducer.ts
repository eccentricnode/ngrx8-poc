import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AnimalsActions from './animals.actions';
import { AnimalsEntity } from './animals.models';

export const ANIMALS_FEATURE_KEY = 'animals';

export interface State extends EntityState<AnimalsEntity> {
  selectedId?: string | number; // which Animals record has been selected
  loaded: boolean; // has the Animals list been loaded
  error?: string | null; // last none error (if any)
}

export interface AnimalsPartialState {
  readonly [ANIMALS_FEATURE_KEY]: State;
}

export const animalsAdapter: EntityAdapter<AnimalsEntity> = createEntityAdapter<
  AnimalsEntity
>();

export const initialState: State = animalsAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const animalsReducer = createReducer(
  initialState,
  on(AnimalsActions.loadAnimals, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(AnimalsActions.loadAnimalsSuccess, (state, { animals }) =>
    animalsAdapter.addAll(animals, { ...state, loaded: true })
  ),
  on(AnimalsActions.loadAnimalsFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return animalsReducer(state, action);
}
