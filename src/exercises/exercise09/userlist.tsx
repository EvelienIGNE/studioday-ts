import type { User } from "./index";

type UserListProps = {
  users: User[];
};

export const UserList = ({ users }: UserListProps) => {
  return (
    <ul>
      {users.map((user, id) => (
        <li key={id}>{user.name}</li>
      ))}
    </ul>
  );
};
