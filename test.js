'use strict'
const validate = require('./index')
const assert = require('assert');
describe('Validate', () => {
  describe('Result', () => {
    it('should return true for valid bitcoin address', () => {
      const check = validate("1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i");
      assert.deepEqual(check, true);
    });
    it('should return false for invalid bitcoin address', () => {
      const check = validate("1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62l");
      assert.deepEqual(check, false);
    });
  });
});