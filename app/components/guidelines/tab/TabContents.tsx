import { PropsWithChildren } from "react";

interface TabContentProps extends PropsWithChildren {}

export default function TabContents({ children }: TabContentProps) {
  return (
    <div className="tab-content" id="pills-tabContent">
      {children}
    </div>
  );
}
