import React, { useState } from "react";
import { Tabs } from "#main";

export interface TabsExampleProps {
  disabledTabs?: number[];
}

const TabsExample: React.FC<TabsExampleProps> = ({ disabledTabs }) => {
  const [filter, setFilter] = useState("tab1");

  const dataColumns = [
    { label: "Tab 1", value: "tab1" },
    { label: "Tab 2", value: "tab2" },
    { label: "Tab 3", value: "tab3" },
  ];

  const renderContent = () => {
    switch (filter) {
      case "tab1":
        return <div>Tab example 1</div>;
      case "tab2":
        return <div>Tab example 2</div>;
      case "tab3":
        return <div>Tab example 3</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <Tabs
          tabs={dataColumns}
          setFilter={setFilter}
          disabledTabs={disabledTabs}
        />
        {renderContent()}
      </div>
    </>
  );
};

export default TabsExample;
