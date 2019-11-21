import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { AnimalsEffects } from './animals.effects';
import * as AnimalsActions from './animals.actions';

describe('AnimalsEffects', () => {
  let actions: Observable<any>;
  let effects: AnimalsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AnimalsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(AnimalsEffects);
  });

  describe('loadAnimals$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AnimalsActions.loadAnimals() });

      const expected = hot('-a-|', {
        a: AnimalsActions.loadAnimalsSuccess({ animals: [] })
      });

      expect(effects.loadAnimals$).toBeObservable(expected);
    });
  });
});
