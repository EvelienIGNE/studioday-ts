// Let's start easy!
// Make sure typescript understands you need to pass a string

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

console.log(capitalize("hello typescript!") === "Hello typescript!");

// Expected TS Error - remove when done
// console.log(capitalize(true));

// Hint: how to assign a type - https://www.typescriptlang.org/docs/handbook/2/basic-types.html#explicit-types
