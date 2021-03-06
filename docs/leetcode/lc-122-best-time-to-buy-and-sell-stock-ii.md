# LC122. 买卖股票的最佳时机 II

https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/

给定一个数组 `prices` ，其中 `prices[i]` 是一支给定股票第 `i` 天的价格。

设计一个算法来计算所能获取的最大利润。可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：不能同时参与多笔交易（必须在再次购买前出售掉之前的股票）。

提示：

- `1 <= prices.length <= 3 * 10^4`
- `0 <= prices[i] <= 10^4`

## 题解

https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/solution/mai-mai-gu-piao-de-zui-jia-shi-ji-ii-by-leetcode-s/

动态规划

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  const n = prices.length;
  let dp0 = 0,
    dp1 = -prices[0];
  for (let i = 1; i < n; ++i) {
    let newDp0 = Math.max(dp0, dp1 + prices[i]);
    let newDp1 = Math.max(dp1, dp0 - prices[i]);
    dp0 = newDp0;
    dp1 = newDp1;
  }
  return dp0;
};
```

贪心算法

```js
var maxProfit = function (prices) {
  let ans = 0;
  let n = prices.length;
  for (let i = 1; i < n; ++i) {
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans;
};
```
