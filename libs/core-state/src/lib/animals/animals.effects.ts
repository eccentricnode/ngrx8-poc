import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as fromAnimals from './animals.reducer';
import * as AnimalsActions from './animals.actions';

@Injectable()
export class AnimalsEffects {
  loadAnimals$ = createEffect(() =>
    this.dataPersistence.fetch(AnimalsActions.loadAnimals, {
      run: (
        action: ReturnType<typeof AnimalsActions.loadAnimals>,
        state: fromAnimals.AnimalsPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return AnimalsActions.loadAnimalsSuccess({ animals: [] });
      },

      onError: (
        action: ReturnType<typeof AnimalsActions.loadAnimals>,
        error
      ) => {
        console.error('Error', error);
        return AnimalsActions.loadAnimalsFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<fromAnimals.AnimalsPartialState>
  ) {}
}
