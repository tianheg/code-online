import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Code Online',
  titleTemplate: 'Practice makes perfect.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/leetcode/': sidebarLeetCode(),
      '/codewars/': sidebarCodewars(),
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/tianheg/code-online' }],
  },
});

function nav() {
  return [
    {
      text: 'LeetCode',
      link: '/leetcode/lc-1-two-sum',
      activeMatch: '/leetcode/',
    },
    {
      text: 'Codewars',
      link: '/codewars/are-you-playing-banjo',
      activeMatch: '/codewars/',
    },
  ];
}

function sidebarLeetCode() {
  return [
    {
      text: '',
      // collapsible: true,
      items: [
        { text: 'LC1. 两数之和', link: '/leetcode/lc-1-two-sum' },
        { text: 'LC2. 两数相加', link: '/leetcode/lc-2-add-two-numbers' },
        { text: 'LC3. 无重复字符的最长子串', link: '/leetcode/lc-3-longest-substring-without-repeating-characters' },
        { text: 'LC4. 寻找两个正序数组的中位数', link: '/leetcode/lc-4-median-of-two-sorted-arrays' },
        { text: 'LC17. 电话号码的字母组合', link: '/leetcode/lc-17-letter-combinations-of-a-phone-number' },
        { text: 'LC20. 有效的括号', link: '/leetcode/lc-20-valid-parentheses' },
        { text: 'LC26. 删除有序数组中的重复项', link: '/leetcode/lc-26-remove-duplicates-from-sorted-array' },
        { text: 'LC94. 二叉树的中序遍历', link: '/leetcode/lc-94-binary-tree-inorder-traversal' },
        { text: 'LC96. 不同的二叉搜索树', link: '/leetcode/lc-96-unique-binary-search-trees' },
        { text: 'LC101. 对称二叉树', link: '/leetcode/lc-101-symmetric-tree' },
        { text: 'LC122. 买卖股票的最佳时机 II', link: '/leetcode/lc-122-best-time-to-buy-and-sell-stock-ii' },
        { text: 'LC167. 两数之和 II - 输入有序数组', link: '/leetcode/lc-167-two-sum-ii-input-array-is-sorted' },
        { text: 'LC189. 旋转数组', link: '/leetcode/lc-189-rotate-array' },
        { text: 'LC217. 存在重复元素', link: '/leetcode/lc-217-contains-duplicate' },
        { text: 'LC427. 建立四叉树', link: '/leetcode/lc-427-construct-quad-tree' },
        { text: 'LC453. 最小操作次数使数组元素相等', link: '/leetcode/lc-453-minimum-moves-to-equal-array-elements' },
        { text: 'LC455. 分发饼干', link: '/leetcode/lc-455-assign-cookies' },
      ],
    },
  ];
}

function sidebarCodewars() {
  return [
    {
      text: '',
      // collapsible: true,
      items: [
        {text: 'Are You Playing Banjo?',link: '/codewars/are-you-playing-banjo', },
        {text: 'Convert a String to a Number!',link: '/codewars/string-to-number', },
        {text: 'Convert a Number to a String!',link: '/codewars/number-to-string', },
        {text: 'Abbreviate a Two Word Name',link: '/codewars/abbreviate-atwo-word-name', },
      ],
    },
  ];
}
