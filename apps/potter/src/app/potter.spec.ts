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
    add_seq_to_cart([1, 1, 1]); //(id, cnt)
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

  //Test3
  test('testSeveralDiscounts', () => {
    add_seq_to_cart([1, 1, 2]);
    expect(potter.total_cost).toBe(8 + (8 * 2 * 0.95));
    
    add_seq_to_cart([2]);
    expect(potter.total_cost).toBe(2 * (8 * 2 * 0.95));

    potter = new Potter;
    add_seq_to_cart([1, 1, 2, 3, 3, 4]);
    expect(potter.total_cost).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95));

    // [1, 2, 2, 3, 4, 5]
    potter = new Potter;
    add_seq_to_cart([1, 2, 2, 3, 4, 5]);
    expect(potter.total_cost).toBe(8 + (8 * 5 * 0.75));

  });

  function add_seq_to_cart(input: number[]) {
    input.forEach(value => potter.add_to_cart(value));
  }

  function add_many_to_cart(id: number, cnt: number) {
    for (let i = 0; i < cnt; i++) {
      potter.add_to_cart(id);
    }
  }

});
