# LC189. 旋转数组

https://leetcode.cn/problems/rotate-array/

给定一个数组，将数组中的元素向右移动 `k` 个位置，其中 `k` 是非负数。

进阶：

- 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
- 能使用空间复杂度为 O(1) 的原地算法解决这个问题吗？

## 题解

https://leetcode.cn/problems/rotate-array/solution/xuan-zhuan-shu-zu-by-leetcode-solution-nipk/

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length
  const newArr = new Array(n)
  for (let i = 0; i < n; ++i) {
    newArr[(i + k) % n] = nums[i]
  }
  for (let i = 0; i < n; ++i) {
    nums[i] = newArr[i]
  }
}

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
```

不知道为什么，本地测试时显示 `undefined` 。
