import React, { Component, forwardRef, ComponentPropsWithRef } from "react";
import { Frec } from "./";

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
class FooComponent extends Component<{ foo?: string }> {}
const ClassComponent: Frec<FooComponent> = forwardRef((props, ref) => {
  return <FooComponent {...props} ref={ref} />;
});

// @ts-expect-error
const v11: ComponentPropsWithRef<typeof HtmlComponent> = { id: 1 };
const v12: ComponentPropsWithRef<typeof HtmlComponent> = { id: "1" };
const v13: ComponentPropsWithRef<typeof HtmlComponent> = {
  // @ts-expect-error
  ref: (instance: HTMLAnchorElement) => {},
};
const v14: ComponentPropsWithRef<typeof HtmlComponent> = {
  ref: (instance: HTMLButtonElement) => {},
};

// @ts-expect-error
const v21: ComponentPropsWithRef<typeof HtmlComponent2> = { id: 1 };
const v22: ComponentPropsWithRef<typeof HtmlComponent2> = { id: "1" };
const v23: ComponentPropsWithRef<typeof HtmlComponent2> = {
  // @ts-expect-error
  ref: (instance: HTMLAnchorElement) => {},
};
const v24: ComponentPropsWithRef<typeof HtmlComponent2> = {
  ref: (instance: HTMLButtonElement) => {},
};

// @ts-expect-error
const v31: ComponentPropsWithRef<typeof ClassComponent> = { foo: 1 };
const v32: ComponentPropsWithRef<typeof ClassComponent> = { foo: "1" };
const v33: ComponentPropsWithRef<typeof ClassComponent> = {
  // @ts-expect-error
  ref: (instance: ClassComponent) => {},
};
const v34: ComponentPropsWithRef<typeof ClassComponent> = {
  ref: (instance: FooComponent) => {},
};
