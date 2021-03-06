# LC20. 有效的括号

今天思考 LeetCode 题目：有效的括号[^fn:1]。

## 题目描述

给定一个只包括 `(` ， `)` ， `{` ， `}` ， `[` ， `]` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：

1.  左右括号类型相同
2.  左右括号闭合顺序一致

## 想法

一个只有以上 6 种字符的字符串组合，判断是否满足有效条件，可以采用双指针法，定义两个指向字符串开头和结尾的指针。

1.  如果第一个位置是 `(` 那么最后一个一定是 `)` 。
2.  采用循环迭代法

## 题解[^fn:2]

这道题目可以使用栈。栈的相关概念：先入后出、除头尾节点外，每个节点有一个前驱和一个后驱。

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length
  if (n % 2 === 1) {
    return false
  }
  const pairs = new Map([
    // 哈希表
    [')', '('], // 键值对
    [']', '['],
    ['}', '{'],
  ])
  const stk = [] // 堆栈
  for (let ch of s) {
    // 循环迭代
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false
      }
      stk.pop()
    } else {
      stk.push(ch)
    }
  }
  return !stk.length
}
console.log(isValid(']['))
```

[^fn:1]: <https://leetcode-cn.com/problems/valid-parentheses/>
[^fn:2]: <https://leetcode-cn.com/problems/valid-parentheses/solution/you-xiao-de-gua-hao-by-leetcode-solution/>
