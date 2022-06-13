# LC94. 二叉树的中序遍历

今天思考 LeetCode 题目：二叉树的中序遍历[^fn:1]。

## 题目描述 {#题目描述}

给定一个二叉树的根节点 `root` ，返回它的 **中序** 遍历。

提示：

- 树中节点数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`

## 题解[^fn:2] {#题解}

递归思想。

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
 * @return {number[]}
 */
let inorderTraversal = function (root) {
  const res = []
  const inorder = (root) => {
    if (!root) {
      return
    }
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res
}
```

[^fn:1]: <https://leetcode-cn.com/problems/binary-tree-inorder-traversal/>
[^fn:2]: <https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/>