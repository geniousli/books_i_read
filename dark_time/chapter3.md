跟波利亚学解题
------------------------
* 跟波利亚学解题
  ** 波利亚的三本书 《how to solve it》 《数学的发现》 《数学与猜想》**
  大部分的书籍只是证明求解，而没有真实的求证过程

  一些方法（解决题目，解决生活问题、生活决策）
  1. 时刻不忘位置变量
  2. 用特例启发思考
  3. 反过来推导（由结论反过来推导条件）
  4. 试错 （枚举所有可能解）
  5. 调整题目条件（改变环境变量， 环境可以理解为生活中的）
  6. 类似问题（将问题抽象， 与8 有共通的地方， 将问题抽象泛化抽象出更加本质的东西）
  7. 查看反例
  8. 将问题泛化求解更一般的问题
  9. 使用潜意识解决问题（需要长时间的锻炼， 将问题转化为潜意识的思考）


        好题目坏题目
         1. 不需要用到未来的知识
         2. 用到未来的知识，但是可以通过对题目的分析获取
         3. 考察解题的一般性思路，而不是特定的技巧
         4. 考察思维能力（联想、类比、抽象、归纳演绎）
         坏题目：
         将知识性的题目当成能力型的题目

    > 生活的本质就是解题
    
* 锤子和钉子
  关注要解决的问题，而不是我拥有什么方法解决问题
  
* 鱼是最后一个看到水的
  ```
  总而言之， 大众对设计的定性存在严重的问题，许多人把设计模式当作时精巧的利器。然而事实上实际上远非如此， 设计模式是补丁，其出现往往意味着语言不够强大，其使用意味着大量的，与所要达到的编程目的无关的样板式代码
  
  ```
  > 把简单的事情搞复杂的比比皆是，把复杂的事情搞简单的则凤毛麟角
  语言之争
  > 避免思维被一门语言所束缚的最好办法就是   “学些一门新的语言”
  > think out of the box
  



* 一些相关的问题
  ** 停机问题 **
  > 定义： 不存在这样一个程序（算法）， 它能够计算任何程序（算法）在给定输入上是否能够结束（停机）

        //我们假定下面的函数符合条件（可以验证一个函数是否能够停机）
        bool God_algo(char* program, char* input)
            {
                if(<program> halt on <input>)
                    return true;
                return false;
            }
            
        // 那么下面的函数则可以永远不能够被判断是否停机
            bool Satan_algo(char* program)
            {
                if(God_algo(char*program, program)){
                    while(1) // loop forerver
                    return false;
                }else{
                    return true;
                }
            }

            Satan_alog(Satan_alog) // 存在悖论，考虑函数是否可以被判定停机
  