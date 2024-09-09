// As a final exercise, create a fully typed application where you have a list of users and a form to add a user to that list.
//
// It should consist of separate components:
// - The Main component handles state and displays it's children
// - The Form component handles text input & validation
//   - Your choice to use a controlled or uncontrolled form
//   - It may not expose any form events to the parent (only send the name)
// - The UserList component outputs all users
//
// A user should be an object with a name property

import { useState } from "react";

import { Form } from "./form";
import type { User } from "./types";
import { UserList } from "./userlist";

export default function Render() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prevUsers) => prevUsers.concat(user));
  };

  return (
    <>
      <Form onValidSubmit={addUser} />
      <UserList users={users} />
    </>
  );
}
