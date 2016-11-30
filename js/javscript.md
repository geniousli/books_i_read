### javascrip 语言精粹

× 假值： false, null, undefined, 0, ' ', NaN
* 数据类型： 数字， 字符串， 布尔， null， undefined， 对象
* 反射： typeof, hasOwnProperty
* delete： 不会触及原型任何对象， 会显露出来原型中的对象属性

##### 函数

* 函数也是对象，只是可以调用
* 调用模式： 方法调用模式， 函数调用模式， 构造器调用模式，apply调用模式（在初始化this上存在差异）
* 函数调用中， 多余或者不足的形式参数，会被赋值为undefined，
* 函数调用中，总会存在this， arguments参数， （设计错误，arguemnts是一个类数组，而非真正数组）
* 函数总是存在返回值， 没有指定返回值， 返回undefined
* try只有一个catch， 想判断类型，必须检查异常的name属性类确定异常类型
* js不存在尾递归优化
* js 作用与（scope），不是块级作用域（主要区分与if else等代码块， 在函数内部任何位置定义的变量，在该函数中 任何地方可以见）， 所以在函数体中开始的地方声明所有的变量，而不是延迟声明
* 闭包 见代码声明

* 方法调用模式： 函数被保存成为一个属性时，称为方法， 调用为方法调用

``` js
 var object = {
    value: 0,
    increment: function(){
        this.value +=1;
    }
}
```

* 函数调用模式： 并非一个对象属性时候， 那么他就是被当作一个函数来调用的， 由此模式调用的函数，this被绑定为 全局对象，设计错误，正确时候，当作内部函数调用时候，this仍然绑定到外部函数的this变量， 这个设计的后果是，方法不能利用内部函数的来帮助它工作， 因为内部函数的this绑定到了全局对象。

```js
    object.double = function(){
        var that = this;
        var helper = function(){
          that.value = add(that.value, that.value);
        }
        helper(); // 函数调用模式调用，helper必须是现在函数内部？？ 为什么， 实验一下
    }
```


*  构造器调用模式： new前缀调用
*  apply调用模式： 传递this， 参数数组

```js
    var array = [1, 3];
    var sum = add.apply(null, array);
```

---------

* 闭包：

``` js
    var myObject = (function(){
        var value = 0;
        return {
            increment: function(inc){
                value += inc;
            },
            getValue: function(){
               return value;
            }
        }
    }());


    var add_the_handles = function(nodes){
        var i;
        for(i=0; i < nodes.length; i+=1{
            nodes[i].onclick = function(e){
                alert(i))
            }
        }
    }

    var add_the_handlers = function(nodes){
        var helper = function(i){
            return function(e){
            alert(i);
           }
        }
        var i;
        for(i = 0; i < nodes.length; i+=1){
            ndoes[i].onclick = helper(i);
        }
    }


```
* 回调： 函数可以传递特性
* 模块化： 使用作用域特性
* 柯里化

```js
    Function.method('curry', function(){
        var slice = Array.prototype.slice,
         args = slice.apply(arguemnts),
         that = this;
     return function(){
         return that.apply(null, args.concat(slice.apply(arguments)));
     }
   })
```

* 记忆： 缓存下来之前的计算结果，在解决一些复杂、无解的问题，比如 动态规划问题上，无论哪些方法也都是在避免更少的运算，减枝，避免重复运算， 而记忆就是避免重复运算的一中方式


#### 继承

* 继承的好处： 1：代码重用， 2： 避免了类型转换，建立了一套类型系统
* js是一门弱类型的语言， 不需要类型转换， 对一个对象来说，重要的是他能做什么，而不是他从哪里来（是否可以这样说ruby呢？）
* js 的原型存在着诸多的矛盾，他的某些复杂的语法看起来就像是那些基于类的语言，这些语法问题掩盖了他的原型机制。他不直接让对象继承对象，反而插入了一个多余的间接层次，通过构造器函数产生对象。
* 函数的prototype是Object的实例

> 
    新函数创建时候， Function构造器产生的函数对象会运行类似的代码，this.prototype = {constructor: this}；
    新函数对象被赋予一个prototype属性，这个是存放继承特征的地方，因为js没有提供一种方法去确定那个函数是打算用作构造器的，所以每个函数都会的到一个prototype， constructor属性没有什么用，重要的时prototype属性。

* new 操作符号调用模式类似下边代码

>
    Function.method('newf, function(){
        var that = Object.create(this.prototype);
        var other = this.apply(that, argument);
        return (typeof other === 'object' && other) || that;
    })

##### 可能存在的问题

* 构造函数被当作函数调用时候，会污染命名空间， 一个更好的备用方案是不使用new
* 伪类 形式掩盖了该语言的真是本质，借鉴类的表示方法可能导致程序员去编写过于深入与复杂的层次结构。（许多复杂的类层次结构产生的原因是静态类型检查的约束），js有更多更好的选择。

##### 原型

* 在一个纯粹的原型模式中，我们会摒弃类，转而专注于类。基于原型的继承相比基于类的继承在概念上更为简单，一个新对象可以继承一个就对象的属性，这样可以避免把一个应用拆解成一系列的嵌套抽象类的分类过程。

>
    var myMammal = function(){
        name: 'mammal';
        get_name: function(){
            return this.name;
        },
        says: function(){
            return this.saying || '';
        }
    }

    var myCat = Object.create(myMammal);
    myCat.name = 'cat';
    myCat.saying = 'meow';
    myCat.purr = function(){
        console.log('xxxxx');
    }
    // 差异化 继承， 通过定制新的对象，区别继承的对象

###### 函数化继承方式

* 创建一个对象
* 有选择的定义私有实例变量和方法，这些就时函数和中通过var 语句定义的
* 给这个新对象扩充方法，这些方法有权方位参数，以及在第二步中定义的变量
* 返回那个新对象

>
    var mammal = function(spec){
        var that = {};
        that.get_name = function(){
            return spec.name;
        };
        that.says = function(){
            return spec.saying();
        }
        return that;
    }
    var mammal = mammal({name: 'xx'});
    
    Object.method('superior', function(name){
        var that = this,
            method = that[name];
        return function(){
            return method.apply(that, arguments);
        }
    })

    var cat = function(spec){
        var that = mammal(spec);
        // 获取父类的函数，虽然在统一个对象中，但是覆盖的时候可用
        var super_get_name = that.superior('get_name');
        // 差异化
        that.get_name = function(){
            return super_get_name();
        }
        that.purr = function(){
            console.log('purr ------');
        }
        return that;
    }
    var myCat = cat({name: 'xx'});


#### 方法

*  Array
   > concat, join, pop, push, reverse, shift, slice, sort, splice, unshift,
* Function
   > apply, call
   >
       Function.method('bind', function(that){
           var method = this,
               slice = Array.prototype.slice,
               args = slice.appply(arguments, [1]);
           return function(){
               return method.apply(that,
                   args.concat(slice.apply(arguments, [0])));
           }
       })
       var x = function(){
           return this.value;
       }.bind({value: 111});
       x() // 111

* Number, toFixed, toPercisioin, toString
* Object, hasOwnPrototype
* RegExp, exec, test
* String, charAt, charCodeAt, concat, indexOf, lastIndexOf, match, replace, search, slice, split, substring, toLowerCase, toUpperCase,


### Awful Parts

* 全局变量
* typeof 不能区分null 与对象， typeof null // object
* parseInt 字符串 -> 整数， 需要加上进制不然会出错。
* NaN
  >
      typeof NaN === 'number' // true
      NaN === NaN // false
      NaN !== NaN // true
      isNaN(), 函数 isFinite函数，过滤掉 NaN， Infinity
* 伪数组
  > typeof并不能分辨出数组与对象的区别，正确的检测方法是
  >
      if (Object.prototype.toString.apply(my_value) === '[object Array]'){
        // my_value is Array 
      }

*  == 永远不要使用， 而是使用 ===
*  function 语句与function表达式，function表达式会被提升
* 类型的包装对象， new Boolean(value), 会返回一个对象， valueOf返回被包装的zhi， 不要使用包装器, (new Boolean, new Number, new String)
* void 是一种类型，表示没有数值，运算符，非函数，接受一个数值， 返回undefined， javascript:void(0) ;


      
