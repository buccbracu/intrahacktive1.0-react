"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { importantDates, resultTabContents, tabContents, tabItems } from "@/lib/data";
import { useEffect, useState } from "react";
import ImportantDate from "../components/guidelines/ImportantDate";
import Tab from "../components/guidelines/tab/Tab";
import TabContent from "../components/guidelines/tab/TabContent";
import TabContents from "../components/guidelines/tab/TabContents";
import TabItem from "../components/guidelines/tab/TabItem";
import TabList from "../components/guidelines/tab/TabList";

export default function ResultsPage() {
  const [selectedTab, setSelectedTab] = useState(tabItems[0].id); // Default to the first tab

  // Function to change tab based on hash
  const handleHashChange = () => {
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash) {
      const matchedTab = tabItems.find((tab) => tab.id === currentHash);
      if (matchedTab) {
        setSelectedTab(matchedTab.id);
      }
    }
  };

  // Effect to detect URL hash change
  useEffect(() => {
    // Set the tab based on the initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <div className="main-container mb-8">
          <h2 className="text-3xl font-bold text-center primary-color mt-20">
            Preliminary Round Result
          </h2>
          <p className="text-center text-sm mt-3 text-gray-500">Select the segment to check your result</p>
        {/* <!-- Guidelines Content --> */}
        <div className="container mt-5">
          <Tab>
            {/* Tab List */}
            <TabList>
              {tabItems.map((tab, i) => (
                <TabItem
                  key={i}
                  id={tab.id}
                  label={tab.label}
                  selected={tab.id === selectedTab}
                  onClick={() => setSelectedTab(tab.id)}
                />
              ))}
            </TabList>

            {/* Tab Content */}
            <TabContents>
              {resultTabContents.map((content, i) => (
                <TabContent
                  key={i}
                  id={content.id}
                  selected={content.id === selectedTab}
                  content={content.content}
                />
              ))}
            </TabContents>
          </Tab>

         
        </div>
      </div>
    </>
  );
}
