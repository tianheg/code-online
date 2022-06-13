# LC17. 电话号码的字母组合

今天思考 LeetCode 题目：电话号码的字母组合[^fn:1]。

## 题目描述

给定一个仅包含数字 `2-9` 的字符串，返回它所有能表示的字母组合，答案可以按任意顺序返回。

给出数字到字母的映射「与电话键盘相同」。注意 1 不含字母

![](/images/200px-telephone-keypad2svg.webp)

## 题解[^fn:2]

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
const L = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}
let letterCombinations = function (D) {
  let len = D.length,
    ans = []
  if (!len) return []
  const bfs = (pos, str) => {
    if (pos === len) ans.push(str)
    else {
      let letters = L[D[pos]]
      for (let i = 0; i < letters.length; i++) bfs(pos + 1, str + letters[i])
    }
  }
  bfs(0, '')
  return ans
}
```

每个数字代表个几个字母，需要将这些数字下的字母区分开。可以使用深度优先搜索（DFS，depth-first search）、迭代、查找表。

[^fn:1]: <https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/>
[^fn:2]: <https://dev.to/seanpgallivan/solution-letter-combinations-of-a-phone-number-1n91>