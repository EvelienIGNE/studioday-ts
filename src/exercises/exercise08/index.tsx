// As you can see, the submit handler function is not inline
// You need to find the right way to type the event

const Form = () => {
  const handleSubmit = (evt: unknown) => {
    evt.preventDefault();
    console.log(new FormData(evt.currentTarget));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Do it!</button>
    </form>
  );
};

export default function Render() {
  return <Form />;
}

// Hint: types for react events - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
