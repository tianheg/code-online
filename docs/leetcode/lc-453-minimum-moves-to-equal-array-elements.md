# LC453. 最小操作次数使数组元素相等

https://leetcode.cn/problems/minimum-moves-to-equal-array-elements/

给你一个长度为 `n` 的整数数组，每次操作将会使 `n - 1` 个元素增加 `1` 。返回让数组所有元素相等的最小操作次数。

## 题解

https://leetcode.cn/problems/minimum-moves-to-equal-array-elements/solution/zui-xiao-cao-zuo-ci-shu-shi-shu-zu-yuan-3meg3/

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let minMoves = function (nums) {
  const minNum = Math.min(...nums)
  let res = 0
  for (const num of nums) {
    res += num - minNum
  }
  return res
}
```

代码使用了全局对象 `Math` ，它是有属性和方法的内建对象，适合处理数学常量和函数。[它不是函数对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)。
