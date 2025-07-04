import React, { useState } from "react";
import { Tabs } from "#main";

interface TabsExampleProps {
  dark?: boolean;
  disabledTabs?: number[];
}

const TabsExample: React.FC<TabsExampleProps> = ({
  disabledTabs,
  dark = false,
}) => {
  const [filter, setFilter] = useState("tab1");

  const dataColumns = [
    { label: "Tab 1", value: "tab1" },
    { label: "Tab 2", value: "tab2" },
    { label: "Tab 3", value: "tab3" },
  ];

  const renderContent = () => {
    switch (filter) {
      case "tab1":
        return (
          <div className="cl:text-[#333] cl:dark:text-white">Tab example 1</div>
        );
      case "tab2":
        return (
          <div className="cl:text-[#333] cl:dark:text-white">Tab example 2</div>
        );
      case "tab3":
        return (
          <div className="cl:text-[#333] cl:dark:text-white">Tab example 3</div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={`${dark ? "dark" : ""} cl:flex cl:flex-col cl:gap-2 cl:w-fit cl:bg-white cl:dark:bg-[#333]`}
      >
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
