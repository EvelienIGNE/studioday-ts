import type { User } from "./types";

type FormProps = {
  onValidSubmit: (user: User) => void;
};

export const Form = ({ onValidSubmit }: FormProps) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const name = formData.get("name")?.toString();
    if (name) {
      onValidSubmit({ name });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">add</button>
    </form>
  );
};
