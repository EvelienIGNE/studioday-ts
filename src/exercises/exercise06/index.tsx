// React has a lot of built in types you can extend
// For instance to type the `children` prop, you can type it yourself like so:
// type Props = { children?: React.reactNode }
// or you can use it like below.
//
// For now lets use the below this method, because later we will play with this more.
//
// For this example, extend the props so you can pass along the variant it should display.
// The prop should be optional and default to "body"

import style from "./style.module.css";

type TextProps = React.PropsWithChildren<{}>;

function Text({ variant, children }: TextProps) {
  return <p className={style[variant]}>{children}</p>;
}

export default function Render() {
  return <Text>I can be displayed in two variants!</Text>;
}
