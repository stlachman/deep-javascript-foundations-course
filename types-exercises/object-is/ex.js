// TODO: define polyfill for `Object.is(..)`
/*
1.  Should take two parameters
2. return true if the passed in parameters are exactly the same value 
3. For `NaN` testing, use Number.isNaN(..) (Extra challenge - test without utility)
4. -0 testing, hint: -Infinity
5. If the parameters are any other values, just test them for strict equality
*/

if (!Object.is || true) {
  Object.is = function ObjectIs(v1, v2) {
    if (checkIfNegativeZero(v1) || checkIfNegativeZero(v2)) {
      return checkIfNegativeZero(v1) && checkIfNegativeZero(v2);
    } else if (Number.isNaN(v1) && Number.isNaN(v2)) {
      return true;
    } else if (v1 === v2) {
      return true;
    } else {
      return false;
    }
  };
}

function checkIfNegativeZero(x) {
  // Any positive value divided by NEGATIVE_INFINITY is negative zero.
  return x === 0 && 1 / x === -Infinity;
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
