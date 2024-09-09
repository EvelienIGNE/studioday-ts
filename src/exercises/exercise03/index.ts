// Type this function so that numbers are either added or subtracted
// Other operations are not permitted, so make sure typescript gives an error

function operate(n1, n2, operator = "+") {
  switch (operator) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    default:
      throw new Error("Make sure this can never throw!");
  }
}

console.log(operate(2, 1) === 3);
console.log(operate(2, 1, "-") === 1);

// Expected TS error - remove when done
console.log(operate(2, 1, "%"));

// Hint: a union of literal types - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
