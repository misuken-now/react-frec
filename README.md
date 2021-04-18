# react-frec

This is a type library to simplify "React.forwardRef" and "React.ForwardRefExoticComponent".

```
const TagName = "button";
const HtmlComponent: Frec<typeof TagName> = forwardRef((props, ref) => {
    return <TagName {...props} ref={ref} />;
});
```

# Intall

```
npm install -D `react-frec`
```

or

```
yarn add -D `react-frec`
```

# Using

With simple coding, the types of `props` and `ref` can be properly inferred.

```
import React, { forwardRef, Component, ForwardRefExoticComponent, RefAttributes } from "react";
import { Frec } from "react-frec";

const TagName = "button";

// from tag name
// HtmlComponent: Frec<"button">
const HtmlComponent: Frec<typeof TagName> = forwardRef((props, ref) => {
    return <TagName {...props} ref={ref} />;
});

// from ForwardRefExoticComponent
// HtmlComponent: Frec<"button">
const HtmlComponent2: Frec<typeof HtmlComponent> = forwardRef((props, ref) => {
    return <HtmlComponent {...props} ref={ref} />;
});

// from class component
// ClassComponent: ForwardRefExoticComponent<{ foo?: string; } & RefAttributes<FooComponent>>
class FooComponent extends Component<{ foo?: string }>{ };
const ClassComponent: Frec<FooComponent> = forwardRef((props, ref) => {
    return <FooComponent {...props} ref={ref} />;
});

// from styled-component
// const Button = styled.button``;
// const StyledComponent: Frec<"button"> = forwardRef((props, ref) => {
//   return <Button {...props} ref={ref} />;
// });
```

# Features

The return type is also made more readable by aliasing.

The following two examples are same.

```
// General Implementation.
// HtmlComponent: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof React.ButtonHTMLAttributes<HTMLButtonElement>> & React.RefAttributes<HTMLButtonElement>>
const HtmlComponent = forwardRef<HTMLButtonElement, JSX.IntrinsicElements["button"]>((props, ref) => {
  return <button {...props} ref={ref} />;
});
```

```
// HtmlComponent: Frec<"button">
export const HtmlComponent: Frec<"button"> = forwardRef((props, ref) => {
    return <button {...props} ref={ref} />;
});
```

# LICENSE

[@misuken-now/react-frec](https://github.com/misuken-now/react-frec)・MIT
