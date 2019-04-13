const validate = require('./index')
const assert = require('assert');
describe('Validate', () => {
  describe('Result', () => {
    it('should return true for valid bitcoin address', () => {
      assert.deepEqual(validate("1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i"));
    });
  });
});