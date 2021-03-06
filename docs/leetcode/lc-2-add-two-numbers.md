# LC2. 两数相加

今天思考 LeetCode 题目：两数相加[^fn:1]。

## 题目描述

给两个非空链表，表示两个非负的整数。每位数字都是按照逆序的方式存储，并且每个节点只能存储一位数字。

请将两个数相加，并以相同形式返回一个表示和的链表。

可以假设除了数字 0 之外，这两个数都不会以 0 开头。

## 解题

什么是链表[^fn:2]？

链表是一种线性存储结构。别名：链式存储结构/单链表。用于存储逻辑关系为“一对一”的数据。与顺序表不同，链表不限制数据的物理存储状态，换句话说，使用链表存储的数据元素，其物理存储位置是随机的。

链表的节点：

![Node of Linked List](/linked-list.svg)

不知道链表的相关知识，这道题目不会做。照着题解抄了一遍。

```js
let addTwoNumbers = function (l1, l2) {
  let head = null,
    tail = null
  let carry = 0
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    if (!head) {
      head = tail = new ListNode(sum % 10)
    } else {
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }
    carry = Math.floor(sum / 10)
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (carry > 0) {
    tail.next = new ListNode(carry)
  }
  return head
}
```

[^fn:1]: <https://leetcode-cn.com/problems/add-two-numbers/>
[^fn:2]: <http://data.biancheng.net/view/160.html>
