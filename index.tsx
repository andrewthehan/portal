import React, {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useLayoutEffect,
  useMemo,
} from "react";
import { createPortal } from "react-dom";

export type HTMLPortalElement = HTMLDivElement;

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  elementTag?: string;
};

export default forwardRef(function Portal(
  { children, className, style, elementTag = "div" }: Props,
  ref: ForwardedRef<HTMLPortalElement>
) {
  const container = useMemo(
    () => document.createElement(elementTag),
    [elementTag]
  );

  useLayoutEffect(() => {
    const element = container;
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  }, [container]);

  const content = useMemo(
    () => (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    ),
    [ref, className, style, children]
  );

  const portal = useMemo(
    () => createPortal(content, container),
    [content, container]
  );

  return portal;
});
