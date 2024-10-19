import { PropsWithChildren } from "react";

type TabProps = PropsWithChildren;
export default function Tab({ children }: TabProps) {
  return <div className="tab-content">{children}</div>;
}
