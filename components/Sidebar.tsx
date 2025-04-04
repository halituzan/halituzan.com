"use client";
import React, { useEffect, useState } from "react";

import { navigationTabs } from "@/config/navigation";
import { Tab, Tabs } from "@nextui-org/tabs";
import { usePathname, useRouter } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitch";

const Sidebar = () => {
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
    <div className='flex w-full flex-col  bg-default-100 rounded-lg mt-2'>
      <Tabs
        aria-label='Navigation tabs'
        selectedKey={selected}
        onSelectionChange={handleSelectionChange}
        variant='light'
        radius='lg'
        isVertical
        classNames={{
          base: "rounded-xl p-2",
          tab: "max-w-fit px-4 h-10",
        }}
      >
        {navigationTabs.map((item) => (
          <Tab
            key={item.id}
            title={
              <div className='flex items-center space-x-2'>
                <span>{item.label}</span>
              </div>
            }
          />
        ))}
      </Tabs>
      <div className='w-full flex justify-center mb-2'>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
