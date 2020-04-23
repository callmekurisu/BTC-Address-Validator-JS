'use strict'
import { validateAddress } from './index';
const assert = require('assert');

describe('Validate', () => {
  describe('Result', () => {
    it('should return true for valid bitcoin address', () => {
      const check = validateAddress("1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i");
      assert.strictEqual(check, true);
    });
    it('should return false for invalid bitcoin address', () => {
      const check = validateAddress("1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62l");
      assert.strictEqual(check, false);
    });
  });
});