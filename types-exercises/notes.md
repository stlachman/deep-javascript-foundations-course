# Types

## Primitive Types

- undefined
- string
- number
- boolean
- object
- symbol

functions and arrays are subtypes of object

JavaScript variables don't have types, values have types.

typeof always returns a string

```js
typeof doesntExist; // "undefined"

var v = null;
typeof v; // "object" OOPS!

v = function() {};
typeof v; // "function" hmmm?

v = [1, 2, 3];
typeof v; // "object" hmm?
```

typeof can reference a thing that doesn't exist and not throw an error

A NaN value is not equal to itself

```js
var trendrate = -0;
trendRate = -0;

trendRate.toString(); // "0"
trendRate === 0; /// true
trendRate < 0; // false
trendRate > 0; // false

Object.is(trendrate, -0); // true
Object.is(trendrate, 0); // false

function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}
```
