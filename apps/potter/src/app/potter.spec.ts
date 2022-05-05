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
    potter.add_to_cart(0);
    expect(potter.total_cost).toBe(0);

    for (let id = 1; id <= 5; id++){
      potter = new Potter;
      potter.add_to_cart(id);
      expect(potter.total_cost).toBe(8);
    }

    potter = new Potter;
    for (let cnt = 0; cnt < 3; cnt++){
      potter.add_to_cart(1);
    }
    expect(potter.total_cost).toBe(8 * 3);

  });



});
