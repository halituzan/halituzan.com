"use client";
import React, { useEffect, useState } from "react";

import { navigationTabs } from "@/config/navigation";
import { Tab, Tabs } from "@nextui-org/tabs";
import { usePathname, useRouter } from "next/navigation";

const MobileNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const currentTab = navigationTabs.find((tab) => tab.path === pathname);
    if (currentTab) {
      setSelected(currentTab.id);
    }
  }, [pathname]);

  const handleSelectionChange = (key: React.Key) => {
    const selectedTab = navigationTabs.find((tab) => tab.id === key);
    if (selectedTab) {
      setSelected(selectedTab.id);
      router.push(selectedTab.path);
    }
  };

  return (
    <div className='flex w-full flex-col bg-default-100 rounded-t-lg z-50'>
      <Tabs
        aria-label='Navigation tabs'
        selectedKey={selected}
        onSelectionChange={handleSelectionChange}
        variant='light'
        radius='lg'
        classNames={{
          base: "rounded-t-lg mb-0 pb-0 rounded-b-none rounded-t-md",
          tabList: "mb-0 pb-0 gap-0 md:gap-2 rounded-b-none rounded-t-md",
          cursor: "rounded-b-none rounded-t-md pb-0 mb-0",
          tab: "lg:px-4 px-1 h-9 rounded-b-none rounded-t-md",
          //tabContent: "rounded mb-0 pb-0",
        }}
      >
        {navigationTabs.map((item) => (
          <Tab
            key={item.id}
            className='px-1'
            title={
              <div className='flex items-center space-x-2 '>
                <span>{item.label}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

export default MobileNavbar;
