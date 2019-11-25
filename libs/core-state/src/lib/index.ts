import { ActionReducerMap } from '@ngrx/store';

import * as fromAnimals from './animals/animals.reducer';

export interface AppState {
    animals: fromAnimals.AnimalsState;
}

export const reducers: ActionReducerMap<AppState> = {
    animals: fromAnimals.reducer,
}
