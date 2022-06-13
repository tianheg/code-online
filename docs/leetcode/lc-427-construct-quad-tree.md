# LC427. 建立四叉树

n*n 矩阵， 0 和 1 组成

四叉树数据结构中，每个内部节点只有四个节点。此外每个节点都有两个属性：

- val 存储叶子节点所代表区域的值。1 对应 True、0 对应 False
- isLeaf 当它为叶子节点时为 True，反之为 False

https://en.wikipedia.org/wiki/Quadtree

四叉树，四叉树是二维的八叉树，通常用于划分二维空间，递归地将其划分为四个象限或区域。

https://leetcode.cn/problems/construct-quad-tree/solution/jian-li-si-cha-shu-by-leetcode-solution-gcru/

解法1：

```
let construct = function (grid) {
  return dfs(grid, 0, 0, grid.length, grid.length)
}

const dfs = (grid, r0, c0, r1, c1) => {
  let same = true
  for (let i = r0; i < r1; ++i) {
    for (let j = c0; j < c1; ++j) {
      if (grid[i][j] !== grid[r0][c0]) {
        same = false
        break
      }
    }
    if (!same) {
      break
    }
  }
  if (same) {
    return new Node(grid[r0][c0] === 1, true)
  }
  const ret = new Node(
    true,
    false,
    dfs(grid, r0, c0, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2)),
    dfs(grid, r0, Math.floor((c0 + c1) / 2), Math.floor((r0 + r1) / 2), c1),
    dfs(grid, Math.floor((r0 + r1) / 2), c0, r1, Math.floor((c0 + c1) / 2)),
    dfs(grid, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2), r1, c1),
  )
  return ret
}
```
