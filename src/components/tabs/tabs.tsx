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
    <nav className="cl:relative cl:w-fit cl:overflow-hidden cl:transition-all cl:duration-150">
      <ul
        ref={tabsContainerRef}
        className="cl:flex cl:overflow-x-auto cl:scrollbar-hide"
      >
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`cl:relative cl:select-none cl:flex-shrink-0 cl:self-center cl:text-md cl:font-semibold cl:cursor-pointer
              cl:md:text-base cl:text-center cl:py-2 cl:px-4
              ${
                index === activeTab
                  ? "cl:text-[#498BFF] cl:bg-[#DEDEDE] cl:dark:text-[#78AAFF] cl:dark:bg-[#444444]"
                  : "cl:text-gray-700 cl:bg-inherit cl:dark:text-white cl:dark:bg-inherit"
              }
              cl:active:bg-[#CCC] cl:dark:active:bg-[#666666]
              ${disabledTabs.includes(index) && "cl:opacity-55 cl:cursor-not-allowed"}
              cl:duration-150`}
            onClick={() => handleTabClick(index)}
          >
            {index === activeTab ? (
              <motion.div
                id="underline"
                layoutId="underline"
                className="cl:absolute cl:bottom-0 cl:left-0 cl:right-0 cl:h-0.5 cl:bg-[#498BFF] cl:dark:text-[#78AAFF]"
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
