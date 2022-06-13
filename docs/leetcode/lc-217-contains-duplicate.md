# LC217. 存在重复元素

今天思考 LeetCode 题目：存在重复元素[^fn:1]。

## 题目描述

给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 `true` 。如果数组中每个元素都不相同，则返回 `false` 。

## 题解[^fn:2]

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      return true
    }
  }
  return false
}
```

代码的 for 循环、if 语句，是我写的。原来的 if 语句还有 else 从句，后来去掉，把 else 中的 return false 移动到了外面。

`nums.sort` 是来自别人的。

[^fn:1]: <https://leetcode-cn.com/problems/contains-duplicate/>
[^fn:2]: <https://leetcode-cn.com/problems/contains-duplicate/solution/cun-zai-zhong-fu-yuan-su-by-leetcode-sol-iedd/>