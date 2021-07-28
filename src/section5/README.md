# 策略模式

定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。

这句话如果说得更详细一点，就是:定义一系列的算法，把它们各自封装成策略类，算法被 封装在策略类内部的方法里。在客户对 Context 发起请求的时候，Context 总是把请求委托给这些 策略对象中间的某一个进行计算。

减少 if else 的判断流程，将分支处理逻辑拆分到策略对象中