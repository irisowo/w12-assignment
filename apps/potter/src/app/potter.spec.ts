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

  // Test2
  test('testSimpleDiscounts', () => {
    // 2 defferent books > -5%
    potter.add_to_cart(1);
    potter.add_to_cart(2);
    expect(potter.total_cost).toBe(8 * 2 * 0.95);

    // 3 defferent books > -10%
    potter.add_to_cart(3);
    expect(potter.total_cost).toBe(8 * 3 * 0.9);

    // 4 defferent books > -20%
    potter.add_to_cart(4);
    expect(potter.total_cost).toBe(8 * 4 * 0.8);

    // 5 defferent books > -25%
    potter.add_to_cart(5);
    expect(potter.total_cost).toBe(8 * 5 * 0.75);

  });

  function add_many_to_cart(id: number, cnt: number) {
    for (let i = 0; i < cnt; i++) {
      potter.add_to_cart(id);
    }
  }

});
