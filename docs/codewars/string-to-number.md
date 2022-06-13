# Convert a String to a Number!

All input is integral number.

## My solution

Use [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

```js
const stringToNumber = function(str){
  return Number(str);
}
```

## Some amazing solutions

Use [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt), it parses a string argument and return an integer of the specified radix.

```js
const stringToNumber = function(str){
  return parseInt(str);
}
// or
const stringToNumber = str => parseInt(str)
```

Use plus operator

```js
const stringToNumber = function(str){
  return +str;
}
// or
const stringToNumber = str => +str
```

Another interesting way

```js
const stringToNumber = Number
// or
const stringToNumber = parseInt
```
