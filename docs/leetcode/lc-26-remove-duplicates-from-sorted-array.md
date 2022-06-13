# LC26. 删除有序数组中的重复项

今天思考 LeetCode 题目：删除有序数组中的重复项[^fn:1]。

## 题目描述

给定一个有序数组 `nums` ， **原地** 删除重复出现的元素，使每个元素 **只出现一次** ，返回删除后数组的新长度。

不要使用额外的数组空间，必须 **原地修改输入数组** 并在使用 \\(O(1)\\) 额外空间的条件下完成。

提示：

- `0 <= nums.length <= 3 * 10^4`
- \\(-10^4 <= nums[i] <= 10^4\\)
- `nums` 已按升序排列

## 题解[^fn:2]

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
  const n = nums.length
  if (n === 0) {
    return 0
  }
  let fast = 1,
    slow = 1
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
}
```

如果数组为空，则返回 0；之后采用双指针法，定义快慢两个指针，在数组长度范围内，将 fast 和 fast-1 比较，如果相等，继续比较；不相等则将 fast 位置的数组值赋给 slow 的对应数组值，slow+1。当 fast 超过数组长度时，跳出循环，返回 slow。

[^fn:1]: <https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/>
[^fn:2]: <https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-tudo/>