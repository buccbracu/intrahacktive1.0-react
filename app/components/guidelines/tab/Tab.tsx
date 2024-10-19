import { PropsWithChildren } from "react";

interface TabProps extends PropsWithChildren {}
export default function Tab({ children }: TabProps) {
  return <div className="tab-content">{children}</div>;
}
