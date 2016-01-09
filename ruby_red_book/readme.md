面向对象设计实践指南Ruby语言描述
------------------------------
> 问题比答案更重要， 下面的章节中会关注与问题的提问，然后才是问题的解决方案

1. 面向对象设计
   1. 设计的目的（要解决的问题）
      1. 应对变化
      2. 变化困难的原因（建立了太多的依赖关系，对周围的环境期望太多）
      3. 设计良好的大型程序必须由设计良好的小程序演变而来， 不存在设计错误小程序演变为设计良好的大型程序（当然大量的重构和重新设计也不无可能，然而存在的可能性太小）
      4. 实用的设计不回去预测未来将要发生什么
      5. 设计的目的时为了将来进行设计（应对变化）， 首要目的： 降低变化所来成本
      6. 工程师的目的：权衡 现在设计、 现在不设计+将来改动成本，之间的权重比较
  2. 设计的工具
     1. solid原则（Single Responsibility、Open-Closed Principle、Liskov Substitution、Interface Segregation、 Dependency Inversion、 DRY）
     2. 设计模式
  3. 设计实践
     1. 设计失败的原因：没有足够的经验和设计反思（不懂设计、懂设计但是讲过多的设计套用）
     2. 设计的时机： 反复的应用，不进行大规模的预先设计，设计应该发生在项目的过程中，不断的迭代的一个过程
     3. 设计评判：1. 设计需要代价 2. 设计的盈亏点依赖于工程师（时间表、能力）
 > 实践是检验真理的唯一标准， 实践会弄脏你的双手、是充满选择的。

2. 设计单一职责
   > 问题： 