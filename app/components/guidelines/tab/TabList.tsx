import { PropsWithChildren } from "react";

interface TabListProps extends PropsWithChildren {}

export default function TabList({ children }: TabListProps) {
  return (
    <ul
      className="nav nav-pills flex justify-center mb-3"
      id="pills-tab"
      role="tablist"
    >
      {children}
    </ul>
  );
}
