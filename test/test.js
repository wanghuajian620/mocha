/**
 * test demo by wanghuajian       2018/12/03
 */

var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('当值不存在时，应该返回 -1 ', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
