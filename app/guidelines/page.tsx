"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { importantDates, tabContents, tabItems } from "@/lib/data";
import { useEffect, useState } from "react";
import ImportantDate from "../components/guidelines/ImportantDate";
import Tab from "../components/guidelines/tab/Tab";
import TabContent from "../components/guidelines/tab/TabContent";
import TabContents from "../components/guidelines/tab/TabContents";
import TabItem from "../components/guidelines/tab/TabItem";
import TabList from "../components/guidelines/tab/TabList";

export default function Guidelines() {
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
              {tabContents.map((content, i) => (
                <TabContent
                  key={i}
                  id={content.id}
                  selected={content.id === selectedTab}
                  content={content.content}
                />
              ))}
            </TabContents>
          </Tab>

          {/* Important Dates Section */}
          <div className="mt-8 bg-gray-100 shadow-md">
            <div className="py-6 px-4 important-dates flex flex-col items-center">
              <Collapsible className="w-full flex flex-col ">
                <CollapsibleTrigger className="m-auto mb-4 text-lg font-semibold min-w-[40%] text-white rounded-md px-8 py-2 max-md:text-md">
                  Important Dates
                </CollapsibleTrigger>
                <CollapsibleContent className="CollapsibleContent">
                  <div className="px-8 mt-8 text-left">
                    <ul className="list-none pl-0">
                      {importantDates.map((el, i) => (
                        <ImportantDate
                          key={i}
                          date={el.date}
                          description={el.description}
                          label={el.label}
                        />
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Legacy Collapsible */}
              {/* <button
                className="btn btn-primary mb-4 text-md font-semibold w-full md:w-1/3 md:text-lg"
                data-bs-toggle="collapse"
                data-bs-target="#importantDatesCollapse"
                aria-expanded="false"
                aria-controls="importantDatesCollapse"
              >
                Important Dates
              </button>
              <div className="w-full">
                <div
                  className="collapse px-8 mt-8 text-left"
                  id="importantDatesCollapse"
                >
                  <ul className="list-none pl-0">
                    {importantDates.map((el, i) => (
                      <ImportantDate
                        key={i}
                        date={el.date}
                        description={el.description}
                        label={el.label}
                      />
                    ))}
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="primary-bg-color px-4 py-3 rounded-md rounded-t-none">
              <p className="text-sm text-white">
                <strong>Disclaimer:</strong> Any dates and rules of the event
                are subject to change at the discretion of the organizers. All
                registered participants will be notified of any changes via
                email, communication channels, and updates on the official
                website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
