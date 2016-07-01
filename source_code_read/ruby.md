Whenever 代码 DSL
```
  bin
    Whenever::CommandLine.execute(options)
      -- self.new() && run
        -- whenever_cron
          -- Whenever.corn
            -- ** Whenever::JobList.new(options).generate_cron_output
              -- read file && instance_eval
                -- 所以JobList中设定了dsl，
```

Jbuilder 代码 DSL

* jbuilder 中使用了method_missing 来定义全部的方法

```
  def _scope
    parent_attributes, parent_formatter = @attributes, @key_formatter
    @attributes = BLANK
    yield
    @attributes
  ensure
    @attributes, @key_formatter = parent_attributes, parent_formatter
  end

```

 jbuilder 中最具有价值的是， 对嵌套循环的处理，其中会对 scope 的处理， 其中的大概的思想是， 保证保证自身@attributes变量的不变，并在自身环境中执行， 执行之后结果保存在@attributes中， 代码中的ensure特性，比较奇特， 保证的代码的最后执行

 ```
  @name = 'xxxxxx'
  def names
  	@name
  	ensure
  		@name = '111111'
  end
  p names
  p @name
 ```
