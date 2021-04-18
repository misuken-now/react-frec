import React, {
  Component,
  ForwardRefExoticComponent,
  PropsWithRef,
  ClassAttributes,
  RefAttributes,
} from "react";

/**
 * A simple "ForwardRefExoticComponent" type.
 *
 * ```
 * import React, { forwardRef } from "react";
 * import { Frec } from "react-frec";
 *
 * // from tagName
 * const Component1: Frec<"button"> = forwardRef((props, ref) => { return <button {...props} ref={ref} /> });
 * const TagName = "button";
 * const Component2: Frec<typeof TagName> = forwardRef((props, ref) => { return <TagName {...props} ref={ref} /> });
 * // from ForwardRefExoticComponent
 * const Component3: Frec<typeof Component2> = forwardRef((props, ref) => { return <Component2 {...props} ref={ref} /> });
 * // from ClassComponent
 * const Component4: Frec<ClassComponent> = forwardRef((props, ref) => { return <ClassComponent {...props} ref={ref} /> });
 * ```
 */
export type Frec<
  T extends
    | Component
    | ForwardRefExoticComponent<any>
    | ClassAttributes<any>
    | keyof JSX.IntrinsicElements
> = T extends Component<infer P>
  ? ForwardRefExoticComponent<P & RefAttributes<T>>
  : T extends ClassAttributes<any>
  ? ForwardRefExoticComponent<PropsWithRef<T>>
  : T extends keyof JSX.IntrinsicElements
  ? ElementFrec<T>
  : T;

export type ElementFrec<
  T extends keyof JSX.IntrinsicElements
> = ForwardRefExoticComponent<PropsWithRef<JSX.IntrinsicElements[T]>>;

export interface FREC<T> extends ForwardRefExoticComponent<T> {}
