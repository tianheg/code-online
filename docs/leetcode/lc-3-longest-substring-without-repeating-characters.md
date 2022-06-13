# LC3. 无重复字符的最长子串

给定一个字符串 `s` ，请你找出其中不含有重复字符的**最长子串**的长度。

```js
let lengthOfLongestSubstring = function (s) {
  const occ = new Set()
  const n = s.length
  let rk = -1,
    ans = 0
  for (let i = 0; i < n; i++) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1))
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1))
      ++rk
    }
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
}
lengthOfLongestSubstring('abcac')
```

https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/
