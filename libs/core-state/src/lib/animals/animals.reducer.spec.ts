import { AnimalsEntity } from './animals.models';
import * as AnimalsActions from './animals.actions';
import { State, initialState, reducer } from './animals.reducer';

describe('Animals Reducer', () => {
  const createAnimalsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as AnimalsEntity);

  beforeEach(() => {});

  describe('valid Animals actions', () => {
    it('loadAnimalsSuccess should return set the list of known Animals', () => {
      const animals = [
        createAnimalsEntity('PRODUCT-AAA'),
        createAnimalsEntity('PRODUCT-zzz')
      ];
      const action = AnimalsActions.loadAnimalsSuccess({ animals });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
