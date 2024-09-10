// Below is a button component that accepts all props of a regular html button
// Make it so that the `type` prop is required.
//
// You may not use an intersection like before, but instead use "Utility types"
// to extract `type` from `AllButtonProps`.

type AllButtonProps = React.ComponentPropsWithoutRef<"button">;
type ButtonProps = AllButtonProps & unknown;

const Button = ({ type, children, ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

// Type `ButtonProps` so that without passing `type` it will show an error
export default function Render() {
  return <Button>Click me!</Button>;
}

// About: ComponentPropsWithoutRef - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#useful-react-prop-type-examples
// Hint: Utility types can be nested - https://www.typescriptlang.org/docs/handbook/utility-types.html
