// Make sure typescript understands you need to pass an array of strings

function write(strings: string[]) {
  return strings.join(" ");
}

const words = ["Hey!", "How", "are", "your", "typescript", "lessons", "going?"];

console.log(write(words));

// Expected TS Error - remove when done
console.log(write(["3", "little", "piggies"]));

// Hint: how to specify an array type - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
