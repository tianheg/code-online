# LC167. 两数之和 II - 输入有序数组

https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/

给定一个已按照「非递减」顺序排列的整数数组 `numbers` ，从数组中找出两个数满足相加之和等于目标数 `target` 。

函数应该以长度为 `2` 的整数数组的形式返回这两个数的下标值。 `numbers` 的下标 **从 1 开始计数** ，所以答案数组应当满足 `1 <= answer[0] < answer[1] <= numbers.length` 。

可假设每个输入只对应唯一的答案，而且不可以重复使用相同的元素。

## 题解

https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/solution/fan-shi-you-xu-shu-zu-jie-ti-tao-lu-yong-qgoq/

使用双指针法

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1]
  // 定义左右双指针
  while (left < right) {
    if (numbers[left] + numbers[right] > target) {
      right-- // 太大，右指针左移
    } else if (numbers[left] + numbers[right] < target) {
      left++ // 太小，左指针右移
    } else {
      return [left + 1, right + 1] // 各自+1 返回
    }
  }
}
```
