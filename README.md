# mocha
mocha 是运行测试的工具。主要概念有三个，分别是 describe()、it()、断言。

describe() 是 mocha 中将测试分组的一种方法。它有两个参数，第一个参数是测试组的名称，第二个是回调函数。
```javascript
describe('string name', function() {
  // 这里可以嵌套多个 describe 或者写测试 
})
```

it() 是单个测试用例。 它有两个参数，第一个参数是一个字符串，说明测试应该做什么，第二个是一个包含实际测试案例的回调函数。
```javascript
it('should todo', function() {
  // 实际的测试用例
})
```

断言
实际验证测试结果，所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。

通过以上基础知识，最终是要能实现应用到实际场景中的自动化测试脚本，集成并对外暴露一个接口，供外部使用。
