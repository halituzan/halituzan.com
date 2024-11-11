"use client";
import React, { useEffect, useState } from "react";

import { navigationTabs } from "@/config/navigation";
import { Tab, Tabs } from "@nextui-org/tabs";
import {
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
          //   tabList: "gap-2 w-full relative rounded-lg bg-white p-2",
          //   cursor: "bg-white",
          tab: "max-w-fit px-4 h-10",
          //   tabContent:
          //     "text-gray-500 group-data-[selected=true]:text-black font-medium",
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
      <div className='flex justify-center gap-1 p-2'>
        <Link
          target='_blank'
          href={"https://github.com/halituzan"}
          className='p-1 bg-default-50 rounded-lg hover:bg-default-200 hover:text-default-900'
        >
          <Github className='w-5 h-5' />
        </Link>
        <Link
          target='_blank'
          href={"https://www.linkedin.com/in/halituzan/"}
          className='p-1 bg-default-50 rounded-lg hover:bg-default-200 hover:text-default-900'
        >
          <Linkedin className='w-5 h-5' />
        </Link>
        <Link
          target='_blank'
          href={"mailto:halit.uzan@gmail.com"}
          className='p-1 bg-default-50 rounded-lg hover:bg-default-200 hover:text-default-900'
        >
          <Mail className='w-5 h-5' />
        </Link>
      </div>
      <div className='flex justify-center gap-1 p-2'>
        <Link
          target='_blank'
          href={"https://x.com/uzandev"}
          className='p-1 bg-default-50 rounded-lg hover:bg-default-200 hover:text-default-900'
        >
          <Twitter className='w-5 h-5' />
        </Link>
        <Link
          target='_blank'
          href={"https://instagram.com/halit.dev"}
          className='p-1 bg-default-50 rounded-lg hover:bg-default-200 hover:text-default-900'
        >
          <Instagram className='w-5 h-5' />
        </Link>
        <Link
          href={"phone:+905301142548"}
          className='p-1 bg-default-50 rounded-lg hover:bg-default-200 hover:text-default-900'
          title="+90 (530) 114 25 48"
        >
          <Phone className='w-5 h-5' />
        </Link>
      </div>
      <div className='flex justify-center gap-1 p-2'>
        <Link
          href={"/files/cv.pdf"}
          target='_blank'
          className='p-1 px-4 bg-default-50 rounded-lg hover:bg-default-200 hover:text-default-900 flex items-center'
        >
          <Download className='w-4 h-4 mr-2' />
          CV
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
