import reducer from './todo';

describe('Todo Reducer', () => {
    test('retunrns a state object', () => {
      const result = reducer(undefined, {type: 'ANYTHING'});
      expect(result).toBeDefined();
    })
})
