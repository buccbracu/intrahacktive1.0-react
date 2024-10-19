import { ITabItem } from "@/lib/data.types";

interface TabItemProps extends ITabItem {}

export default function TabItem({ id, label, selected }: TabItemProps) {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link rounded-t-lg ${
          selected ? "active" : "border-t border-r border-l border-gray-300"
        }`}
        id={`${id}-tab`}
        data-bs-toggle="pill"
        data-bs-target={`#${id}`}
        type="button"
        role="tab"
        aria-controls={id}
        aria-selected={selected}
      >
        {label}
      </button>
    </li>
  );
}
