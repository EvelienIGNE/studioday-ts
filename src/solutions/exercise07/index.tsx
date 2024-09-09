// Below is a button component that accepts all props of a regular html button
// Make it so that the `type` prop is mandatory.
//
// Bonus: don't add `type` yourself, but use "Utility types" to extract it from `AllButtonProps`.

type AllButtonProps = React.ComponentPropsWithoutRef<"button">;
type ButtonProps = AllButtonProps & unknown; // Required<Pick<AllButtonProps, 'type'>>

const Button = ({ type, children, ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

// Type ButtonProps so that without passing `type` it will show an error
export default function Render() {
  return <Button>Click me!</Button>;
}

// Hint: ComponentPropsWithoutRef - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#useful-react-prop-type-examples
// Hint: Utility types can be nested - https://www.typescriptlang.org/docs/handbook/utility-types.html
