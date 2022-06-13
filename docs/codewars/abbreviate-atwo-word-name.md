# Abbreviate a Two Word Name

Sam Harris => S.H

patrick feeney => P.F

## My solution

Use [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), [`toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

```js
function abbrevName(name) {
  return (
    name.split(' ')[0][0].toUpperCase() +
    '.' +
    name.split(' ')[1][0].toUpperCase()
  );
}
```

## Some amazing solutions

More clever than my solution.

```js
function abbrevName(name) {
  const nameArray = name.split(' ');
  return (nameArray[0][0] + '.' + namearray[1][0]).toUpperCase();
}
```

Use [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
function abbrevName(name) {
  return name.split(' ').map(i => i[0].toUpperCase()).join('.');
}
```
