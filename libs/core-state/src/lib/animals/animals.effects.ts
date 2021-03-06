import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, mergeMap } from 'rxjs/operators';

import { AnimalsService, Animal } from '@ngrx8-poc/core-data';

import * as AnimalsActions from './animals.actions';
import { of } from 'rxjs';

@Injectable()
export class AnimalsEffects {
  loadAnimals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AnimalsActions.loadAnimals),
      switchMap(() => 
        this.animalsService.all().pipe(
          map((animals: Animal[]) => 
            AnimalsActions.AnimalsLoadedSuccess({ animals })
          )
        )
      )
    )
  );

  createAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AnimalsActions.CreateAnimal),
      mergeMap(({ animal }) =>
        this.animalsService.create([animal]).pipe(
          map(() => AnimalsActions.AnimalCreationSuccess({ animal }))
        )
      )
    )
  );

  updateAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AnimalsActions.UpdateAnimal),
      mergeMap(({ animal }) =>
        this.animalsService.update([animal]).pipe(
          map(() => AnimalsActions.AnimalUpdatedSuccess({ animal }))
        )
      )
    )
  );

  removeAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AnimalsActions.DeleteAnimal),
      mergeMap(({ animal }) =>
        this.animalsService.delete([animal.id]).pipe(
          map(() => AnimalsActions.AnimalDeletedSuccess({ animal }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private animalsService: AnimalsService
  ) { }
}
