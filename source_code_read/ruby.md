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

 mina 部署pum 总结

 1.  mina文档， puma文档(mina-puma 文档中需要在setup中添加一些配置 )

   ```ruby
     queue! %(mkdir -p "#{deploy_to}/#{shared_path}/tmp/sockets")
     queue! %(chmod g+rx,u+rwx "#{deploy_to}/#{shared_path}/tmp/sockets")
     queue! %(mkdir -p "#{deploy_to}/#{shared_path}/tmp/pids")
     queue! %(chmod g+rx,u+rwx "#{deploy_to}/#{shared_path}/tmp/pids")
   ```
   deploy 中添加
   ```ruby
       invoke :'puma:phased_restart'
   ```

 2. mina setup
 3. 建立puma.rb
 4. mina deploy

 > 其中遇到问题可以使用 queue shell命令来调试，主要为PATH， rbenv的ruby版本


 在过程总遇到的问题有：

 1. rbenv 配置信息, server中所有用户使用一个rbenv，  invoke :'rbenv:reload', 导致创建了 ~/.rbenv 目录结构 其中有shime, version， 导致执行 queue 'rbenv versions' 没有之前安装的ruby版本， 跟在terminal中完全不一样

   解决方法： 手动set一些变量解决

   ```ruby
     queue %{
       #{echo_cmd %{export PATH="#{rbenv_path}/bin:$PATH"}}
       #{echo_cmd %{export PATH="#{rbenv_path}/shims:$PATH"}}
       #{echo_cmd %{export RBENV_ROOT="#{rbenv_path}"}}
     %}
     queue 'rbenv local 2.3.1'
   ```
   > rbenv 推荐使用user安装rbenv，而不是使用全局的

 2. mina 脚本ssh deploy登录问题， 因为之前使用root登录， 使用deploy ssh登录需要密码，而在mina terminal中输入密码十分困难， 然后解决密码登录问题。
 sshd 中的sshd_config 中的配置修改

   man sshd 中并没有如此的硕放

   ```
     AuthorizedKeysFile	%h/.ssh/authorized_keys
     AllowUsers kaws root
   ```
   >
     %h替换为当前登录用户的家目录， 所以所有用户可以通过在~/.ssh/authorized_keys中配置可以登录的用户pubkey
     AllowUsers 控制那个用户可以通过ssh登录
     至此所有的ssh控制登录的操作都可以了
