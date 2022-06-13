# LC96. 不同的二叉搜索树

https://leetcode.cn/problems/unique-binary-search-trees/

给一个整数 `n` ，求恰由 `n` 个节点组成且节点值从 `1` 到 `n` 互不相同的 **二叉搜索树** 有多少种？返回满足题意的二叉搜索树的种数。

## 题解

https://leetcode.cn/problems/unique-binary-search-trees/solution/bu-tong-de-er-cha-sou-suo-shu-by-leetcode-solution/

使用了动态规划的办法。

```js
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const G = new Array(n + 1).fill(0)
  G[0] = 1
  G[1] = 1

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      G[i] += G[j - 1] * G[i - j]
    }
  }
  return G[n]
}
```

卡塔兰数 Cn

```js
var numTrees = function(n) {
    let C = 1;
    for (let i = 0; i < n; ++i) {
        C = C * 2 * (2 * i + 1) / (i + 2);
    }
    return C;
};
```
