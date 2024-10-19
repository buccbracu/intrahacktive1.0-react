import { PropsWithChildren } from "react";

type TabContentProps = PropsWithChildren;

export default function TabContents({ children }: TabContentProps) {
  return (
    <div className="tab-content" id="pills-tabContent">
      {children}
    </div>
  );
}
