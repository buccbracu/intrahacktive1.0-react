import { importantDates, tabContents, tabItems } from "@/lib/data";
import TabItem from "../components/guidelines/tab/TabItem";
import TabList from "../components/guidelines/tab/TabList";
import Tab from "../components/guidelines/tab/Tab";
import TabContent from "../components/guidelines/tab/TabContent";
import TabContents from "../components/guidelines/tab/TabContents";
import ImportantDate from "../components/guidelines/ImportantDate";

export default function Guidelines() {
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
                  selected={tab.selected}
                />
              ))}
            </TabList>
            {/* Tab Content */}
            <TabContents>
              {tabContents.map((c, i) => (
                <TabContent
                  content={c.content}
                  id={c.id}
                  selected={c.selected}
                  key={i}
                />
              ))}
            </TabContents>
          </Tab>
          <div className="mt-8 bg-gray-100 shadow-md">
            <div className="py-6 px-4 important-dates flex flex-col items-center">
              <button
                className="btn btn-primary mb-4 text-md font-semibold w-full md:w-1/3 md:text-lg"
                data-bs-toggle="collapse"
                data-bs-target="#importantDatesCollapse"
                aria-expanded="false"
                aria-controls="importantDatesCollapse"
              >
                Important Dates
              </button>
              <div className="w-full">
                {/* <!-- Added a wrapper with width to control the collapse width --> */}
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
              </div>
            </div>
            <div className="primary-bg-color px-4 py-3 rounded-md rounded-t-none">
              <p className="text-sm text-white">
                <strong>Note:</strong> Payment will be required upon final
                selection. Registration fee details will be announced soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
