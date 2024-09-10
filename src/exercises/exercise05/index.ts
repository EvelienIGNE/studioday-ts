// When a Person becomes part of our app they become a User, which require additional properties.
// Re-use the Person type WITHOUT MODIFYING IT into the User type and add the required properties.
// Bonus: the `role` can only be "user" or "admin"

type Person = {
  name: string;
  age: number;
  occupation: string;
};

type User = unknown;

const users: User[] = [
  {
    name: "Flip Fladder",
    age: 25,
    occupation: "Pilot",
    alias: "flippo",
    role: "user",
  },
  {
    name: "Kaatje Rolmaatje",
    age: 23,
    occupation: "Engineer",
    alias: "suparolla",
    role: "admin",
  },
];

function logUser(user: User) {
  console.log(`${user.name} henceforth shall be known as ${user.alias}`);
}

users.forEach(logUser);

// Hint: create a new type from another - https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
