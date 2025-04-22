import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export interface Tab {
  label: string;
  value: string;
}

export interface TabsProps {
  tabs: Tab[];
  setFilter: (filter: string) => void;
  disabledTabs?: number[];
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  setFilter,
  disabledTabs = [],
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsContainerRef = useRef<HTMLUListElement>(null);

  const handleTabClick = (index: number) => {
    if (disabledTabs.includes(index)) {
      return;
    }
    setActiveTab(index);
    setFilter(tabs[index].value);
  };

  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeTabElement = tabsContainerRef.current.children[
        activeTab
      ] as HTMLElement;
      if (activeTabElement) {
        const containerWidth = tabsContainerRef.current.offsetWidth;
        const tabWidth = activeTabElement.offsetWidth;
        const tabLeft = activeTabElement.offsetLeft;
        const scrollLeft = tabLeft - containerWidth / 2 + tabWidth / 2;

        tabsContainerRef.current.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeTab]);

  return (
    <nav className="relative w-fit overflow-hidden transition-all duration-150">
      <ul
        ref={tabsContainerRef}
        className="flex overflow-x-auto scrollbar-hide"
      >
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`relative select-none flex-shrink-0 self-center text-md font-semibold cursor-pointer
              md:text-base text-center py-2 px-4
              ${
                index === activeTab
                  ? "text-[#498BFF] bg-[#DEDEDE] dark:text-[#78AAFF] dark:bg-[#444444]"
                  : "text-gray-700 bg-inherit dark:text-white dark:bg-inherit"
              }
              active:bg-[#CCC] dark:active:bg-[#666666]
              ${disabledTabs.includes(index) && "opacity-55 cursor-not-allowed"}
              duration-150`}
            onClick={() => handleTabClick(index)}
          >
            {index === activeTab ? (
              <motion.div
                id="underline"
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#498BFF] dark:text-[#78AAFF]"
                transition={{ duration: 0.15 }}
              />
            ) : null}
            {tab.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};
