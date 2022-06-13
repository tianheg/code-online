# Convert a Number to a String!

## My solution

Use [`String()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

```js
function numberToString(num) {
  return String(num)
}
```

## Some amazing solutions

Use [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

```js
function numberToString(num) {
  return num.toString();
}
```

Use empty string

```js
function numberToString(num) {
  return '' + num;
}
```

It's amazing! Use [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```js
function numberToString(num) {
  return `${num}`;
}
```
