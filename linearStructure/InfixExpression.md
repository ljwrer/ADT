# 表达式求值
## 中缀表达式转后缀表达式
 - 运算数顺序不变
 - 运算符入栈，与之后运算符比较，若优先级高或相等则出栈
 - 括号
    - 入栈前优先级高于其他
    - 左括号入栈后优先级最低
    - 遇到右括号，出栈到左括号为止

  263/4+*5-
  *（/*
