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

------------ 待完善 -----------------


#### 方法

##### Array
* concat, 
