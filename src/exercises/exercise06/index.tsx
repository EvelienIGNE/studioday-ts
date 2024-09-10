// React has a lot of built in types you can extend
// For instance to type the `children` prop, you can type it yourself like so:
// `type Props = { children?: React.reactNode }`
// or you can do it like below.
//
// For now lets use the below this method, because later we will play with this technique more.
//
// For this exercise, extend `TextProps` so you can pass along `variant` as a union of literal strings.
// `variant` should be optional and default to "body"

const uglyInlineStyles = {
  variants: {
    base: {
      font: "1rem/1.25",
    },
    intro: {
      font: "italic small-caps 1.5rem/1.5",
    },
  },
};

type TextProps = React.PropsWithChildren<{}>;

function Text({ variant, children }: TextProps) {
  return <p style={uglyInlineStyles.variants[variant]}>{children}</p>;
}

export default function Render() {
  return <Text>I can be displayed in two variants!</Text>;
}
