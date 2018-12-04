/**
 * temperature by wanghuajian 2018/12/04
 */

var convert = require('../app.js');
var assert = require('assert');

describe('Temperature conversion', function() {
  describe('cToF', function() {
    it('should convert -40 celsius to -40 fahreneit', function() {
      assert.equal(-40, convert.cToF(-40));
    });
    it('should convert 0 celsius to 32 fahrenheit', function() {
      assert.equal(32, convert.cToF(0));
    });
    it('should return undefined if no temperature is input', function() {
      assert.equal(undefined, convert.cToF());
    });
  });
  describe('fToC', function() {
    it('should convert -40 fahreneit to -40 celsius', function() {
      assert.equal(-40, convert.fToC(-40));
    });
    it('should convert 32 fahrenheit to 0 celsius', function() {
      assert.equal(0, convert.fToC(32));
    });
    it('should return undefined if no temperature is input', function() {
      assert.equal(undefined, convert.fToC());
    });
  });
})
