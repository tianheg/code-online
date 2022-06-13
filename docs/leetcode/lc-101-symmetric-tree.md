# LC101. 对称二叉树

https://leetcode.cn/problems/symmetric-tree/

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 `[1, 2, 2, 3, 4, 4, 3]` 是对称的。

```text
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

下面这个 `[1, 2, 2, null, 3, null, 3]` 就不是：

```text
  1
 / \
2   2
 \   \
 3    3
```

进阶：可以用递归和迭代两种方法解决这个问题吗？

## 题解

https://leetcode.cn/problems/symmetric-tree/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-ch-hnjo/

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 使用递归遍历左右子树 递归三部曲
  // 1. 确定递归的参数 root.left root.right 和返回值 true false
  const compareNode = function (left, right) {
    // 2. 确定终止条件 空的情况
    if (
      (left === null && right !== null) ||
      (left !== null && right === null)
    ) {
      return false
    } else if (left === null && right === null) {
      return true
    } else if (left.val !== right.val) {
      return false
    }
    // 3. 确定单层递归逻辑
    let outSide = compareNode(left.left, right.right)
    let inSide = compareNode(left.right, right.left)
    return outSide && inSide
  }
  if (root === null) {
    return true
  }
  return compareNode(root.left, root.right)
}
```
