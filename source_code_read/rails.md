### rails active model

##### callbacks

```
    ActiveModel, ActiveSupport::Callbacks

    ActiveModel 中主要简单的调用的ActiveSupport::Callbacks中的一些方法，组合。
    ActiveSupport::Callbacks中关键的类有
    CallbackChain # 保存callback的数组，其中配置信息 name, terminator
    Callback, 每个详细的callback， 保存在chain中，


```

##### 程序调用堆栈:

    define_model_callbacks :create
        # defined method  :before_action :set_name
        # defined method _run_create_callback
        define_callbacks :name
            CallbackChain.new

    before_action :set_name
        set_callback :create, :before, :set_name
            callback = Callback.build
            chain.push(callback)
    run_callbacks(:save)
        _run_create_callback
            _run_callbacks_(chains)
             runner = chain.compile
                 seq = CallbackSequence.new
                 callbacks.each { |item| item.build}
                 # 转换成lambda， 存放类型需要执行操作， 例如before， 并在这个过程中，放入到 seq中
             runner.call(Environment.new)
             # 简单的将数组中的每个lambda.call(env), env只是简单的将当前变量存入到Struct中， callback是怎样控制逻辑的呢， 就是在lambda中， 通过Filter::Before build， Filter::After等类型， build之后创建了，不同的控制流程， 通过在共通操作对象env中变量配置达成， 比如halted， 在Before中查看了变量:terminator, (可以查看文档)，其中定义了default_terminator, 只 catch， abort异常时候返回false，终止执行

##### 关键地方
> 比较绕的地方， 每次设定callback都会创建一个callback，并放入到callbackchain中， 在执行的时候，会同步， 将每个callback编译成lambda， 通过:type（:before， :after），来创建不同的lambda（包裹， callback转换成的lambda），组成callbaclsequencde， 这样做的好处，时callback，集中处理各种类型 symbol， proc， string，等转化成lambda的逻辑， 而每种:before， :after等的处理逻辑基本相同， 比如 before的时候，处理 配置信息不同。所以代码抽象成了两个层次

> 通过对象 Environment来控制执行过程，确实没有函数式编程看得容易一点
> 值得注意的一点， before 是跟随定义的顺序执行的， after是根据定的顺序倒序执行的， 可以在指定参数prepend， 来控制队列添加在后面，还是前面
     
