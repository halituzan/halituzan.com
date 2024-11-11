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
    <div className='flex w-full flex-col bg-default-100 rounded-lg mt-2 z-50'>
      <Tabs
        aria-label='Navigation tabs'
        selectedKey={selected}
        onSelectionChange={handleSelectionChange}
        variant='light'
        radius='lg'
        classNames={{
          base: "rounded-xl ",
          //   tabList: "gap-2 w-full relative rounded-lg bg-white p-2",
          //   cursor: "bg-white",
          tab: " px-4 h-10",
          //   tabContent:
          //     "text-gray-500 group-data-[selected=true]:text-black font-medium",
        }}
      >
        {navigationTabs.map((item) => (
          <Tab
            key={item.id}
            className="px-1"
            title={
              <div className='flex items-center space-x-2'>
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