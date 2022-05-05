import { Potter } from './potter';

describe('Potter', () => {
  let potter: Potter;

  beforeEach(() => {
    potter = new Potter;
  })

  it('should create an instance', () => {
    expect(potter).toBeTruthy();
  });

  // ----------------------------------------------------------------------//
  // The following tests are defined in https://codingdojo.org/kata/Potter/
  // ----------------------------------------------------------------------//
  
  // Test1
  test('testBasics', () => {
    // add 0
    potter.add_to_cart(0);
    expect(potter.total_cost).toBe(0);

    // add 1 book
    for (let id = 1; id <= 5; id++){
      potter = new Potter;
      potter.add_to_cart(id);
      expect(potter.total_cost).toBe(8);
    }

    // add 3 same books
    potter = new Potter;
    add_many_to_cart(1, 3) //(id, cnt)
    expect(potter.total_cost).toBe(8 * 3);

  });

  function add_many_to_cart(id: number, cnt: number) {
    for (let i = 0; i < cnt; i++) {
      potter.add_to_cart(id);
    }
  }

});
