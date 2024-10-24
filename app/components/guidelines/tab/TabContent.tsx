import { ITabContent } from "@/lib/data.types";

type TabContentProps = ITabContent;

export default function TabContent({ id, selected, content }: TabContentProps) {
  return (
    <div
      className={`tab-pane fade ${selected ? "show active" : ""}`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      {content()}
    </div>
  );
}
