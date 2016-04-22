#使用 $apply
-------------
##$apply() 函数可以从Angular框架的外部让表达式在Angular上下文内部执行。例如，假设你
##实现了一个 setTimeout() 或者使用第三方库并且想让事件运行在Angular上下文内部时，就必须
##使用 $apply() 

##无论何时我们手动处理事件，使用第三方框架（比如jQuery、Facebook API） ，或者调用
##setTimeout() ，都可以使用 $apply() 函数让Angular返回 $digest 循环。

###一般不建议在控制器中使用 $apply()

##-----------------------
##当我们将jQuery和Angular集成在一起时（这通常被视为一个肮脏的行为） ，就需要使用
##$apply() ，因为Angular不会察觉到执行在Angular上下文外部的事件。例如，在使用
##jQuery插件
## 时（比如datepicker） ，就需要使用 $apply() 将来自jQuery的值传递到Angular应用中。

##directives
  
## 默认 (scope: false) - directive使用原有作用域，所以也不存在原型继承，这种
## 方式很简单，但也很容易出问题——除非该directive与html不存在数据绑定，否则一般情况
## 建议使用第2条方式。
##  scope: true - directive创建一个子作用域, 并且会从父作用域进行原型继承。## 如果同一个DOM element存在多个directives要求创建子作用域，那么只有一个子作用## 域被创建，directives共用该子作用域。
##  scope: { ... } - directive创建一个独立的“Isolate”作用域，没有原型继承。
## 这是创建可复用directive组件的最佳选择。因为它不会直接访问/修改父作用域的属性，不##会产生意外的副作用。这种directive与父作用域进行数据通信有如下四种方式（更详细的##内容请参考Developer Guide）：
  
## = or =attr “Isolate”作用域的属性与父作用域的属性进行双向绑定，任何一方的修## 改均影响到对方，这是最常用的方式；
##  @ or @attr “Isolate”作用域的属性与父作用域的属性进行单向绑定，即##“Isolate”作用域只能读取父作用域的值，并且该值永远的String类型；
 ##  & or &attr “Isolate”作用域把父作用域的属性包装成一个函数，从而以函数的方式##读写父作用域的属性，包装方法是$parse，详情请见API-$parse；