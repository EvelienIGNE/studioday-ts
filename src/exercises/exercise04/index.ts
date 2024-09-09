// Define the Person type and assign it to the people array and the logPerson function
// so that there are no more type errors.

export type Person = unknown;

export const people = [
  {
    name: "Flip Fladder",
    age: 25,
    occupation: "Pilot",
  },
  {
    name: "Kaatje Rolmaatje",
    age: 23,
    occupation: "Engineer",
  },
];

export function logPerson(person) {
  console.log(`${person.name} (${person.age}) - ${person.occupation}`);
}

people.forEach(logPerson);

// Hint: how to type an object (we use type aliases, not interfaces) - https://www.typescriptlang.org/docs/handbook/2/objects.html
