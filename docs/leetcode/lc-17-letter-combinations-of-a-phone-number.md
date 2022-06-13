# LC17. 电话号码的字母组合

https://leetcode.cn/problems/letter-combinations-of-a-phone-number/

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![](/200px-telephone-keypad2svg.webp)

## Solutions

<https://dev.to/seanpgallivan/solution-letter-combinations-of-a-phone-number-1n91>

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
