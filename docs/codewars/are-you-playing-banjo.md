# Are You Playing Banjo?

https://www.codewars.com/kata/53af2b8861023f1d88000832/

Input name, if name starts with "R" or "r", output "name plays banjo", else output "name does not play banjo"

## My solution

I use if-else statement

```js
function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] == 'R' || name[0] == 'r')
    return name + " plays banjo";
  else
    return name + " does not play banjo";
}
```

## Some amazing solutions

It uses toLowerCase(), ternary operator. More concise

```js
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == "r" ? " plays": " does not play") + " banjo"
}
```
