// As a final exercise, create a fully typed application where you have a list of users and a form to add a user to that list.
//
// It should consist of separate components:
// - The Main component handles state and displays it's children
// - The Form component handles text input & validation
//   - Your choice to use a controlled or uncontrolled form
//   - It may not expose any form events to the parent (only send data for the user object)
// - The UserList component lists all users as an unordered linst
//
// A user should be an object with a name property
//
// If you want to make it neat: put Form & UserList in separate files, just like a real app!
// Bonus: got enough time? Style it with css modules!

import { UserList } from "./userlist";

export type User = { name: string };

type FormProps = {};

const Form = ({}: FormProps) => {};

export default function Render() {
  return (
    <>
      <Form />
      <UserList />
    </>
  );
}

// Hint: typing functions as prop - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#basic-prop-types-examples
// Hint: typing hooks - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/#usestate
