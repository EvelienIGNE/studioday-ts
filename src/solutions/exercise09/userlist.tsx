import type { User } from "./types";

type UserListProps = {
  users: User[];
};

export const UserList = ({ users }: UserListProps) => {
  return (
    <ul>
      {users.map((user, i) => (
        <li key={i}>{user.name}</li>
      ))}
    </ul>
  );
};
