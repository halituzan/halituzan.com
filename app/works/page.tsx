"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { motion } from "framer-motion";

interface TimelineItem {
  id: number;
  date: string;
  title?: string;
  company?: string;
  description?: string;
  skills: string[];
  isLeft?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: 0,
    date: "2024 ~",
    title: "Software Developer (Hiring)",
    description:
      "İş arayışımda olan bir yazılım geliştiriciyim. Hem ofisten hem uzaktan çalışmaya, aynı zamanda freelance projelere de açığım. Projelerde kullanıcı deneyimini ve performansı ön planda tutarak, yenilikçi çözümler sunmayı hedefliyorum. Şirketlerin ve projelerin ihtiyaçlarına değer katabileceğim bir pozisyon arıyorum.",
    skills: [],
    isLeft: true,
  },

  {
    id: 1,
    date: "2022 - 2024",
    title: "Frontend Developer",
    company: "Codelisa Technology",
    description:
      "Leading the development of enterprise-scale applications and mentoring junior developers.",
    skills: [
      "Typescript",
      "Javascript",
      "HTML",
      "CSS",
      "TailwindCss",
      "ReactJs",
      "NextJs",
      "Material UI",
      "Mantine UI",
      "Micro-Frontend",
      "MongoDB",
      "Express",
      "NodeJs",
    ],
    isLeft: true,
  },
  {
    id: 2,
    date: "2021 - 2022",
    title: "Frontend Developer (Intern)",
    company: "ETurnsoft",
    description:
      "Yönetim paneli ile kullanıcı yönetim sistemleri üzerine çalıştım.",
    skills: [
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
      "React",
      "Next.js",
      "MongoDB",
      "Express",
    ],
    isLeft: true,
  },
  {
    id: 3,
    date: "2018 - 2022",
    title: "E-Ticaret",
    company: "Sincap Dükkan",
    description:
      "E-ticaret alanında güçlü bir geçmişe sahibim ve Trendyol, Hepsiburada gibi Türkiye’nin önde gelen e-ticaret platformlarında satış yaparak pazarlama ve müşteri ilişkileri konusunda değerli deneyimler kazandım. Aynı zamanda, OpenCart altyapısını kullanarak kendi e-ticaret sitemi yönetme sorumluluğunu üstlendim. Bu süreçte, ürün yönetimi, sipariş süreçleri, stok takibi ve müşteri memnuniyeti gibi konularda kapsamlı bilgi edinme fırsatım oldu.",
    skills: [],
    isLeft: true,
  },
];

const TimelineCard = ({
  item,
  isLeft,
}: {
  item: TimelineItem;
  isLeft: boolean;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className=' bg-gradient-to-br from-white/80 to-white/30 dark:from-default-100/50 dark:to-default-50/30 backdrop-blur-sm shadow-none border-2 border-default-100'>
        <CardBody className='p-5'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold custom-text-h3'>{item.title}</h3>
            <p className='font-semibold text-default-500'>{item.company}</p>
            <p className='text-small text-default-400'>{item.description}</p>
            <div className='flex flex-wrap gap-2 mt-2'>
              {item?.skills.map((skill, index) => (
                <Chip
                  key={index}
                  size='sm'
                  variant='flat'
                  classNames={{
                    base: "bg-gradient-to-br from-indigo-500/30 to-pink-500/30 border-small border-white/50 rounded-lg",
                    content: "text-xs font-semibold text-default-600",
                  }}
                >
                  {skill}
                </Chip>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

const WorkTimeline = () => {
  return (
    <div className='relative mx-auto max-w-[1200px] px-4 min-h-screen'>
      {/* Gradient Center Line */}
      <div className='absolute right-1/2 min-h-[3000px] lg:min-h-[2000px] self-stretch -translate-y-1/2 lg:right-[85px] top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-default-100 via-default-500 to-default-200 opacity-30 ' />

      <div className='relative'>
        {timelineData.map((item, index) => (
          <div
            key={item?.id}
            className='flex justify-center items-center mb-0'
          >
            {/* Animated Dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className='absolute left-1/2 -translate-x-1/2  bg-transparent'
            >
              <div className='absolute inset-0 rounded-full bg-white/20 animate-ping' />
            </motion.div>

            <div className='grid grid-cols-[1fr] lg:grid-cols-[1fr,auto] items-center w-full gap-8'>
              {/* Left Content */}
              <div className={`${!item?.isLeft && "order-3"} lg:order-1 order-2`}>
                {item?.isLeft && <TimelineCard item={item} isLeft={true} />}
              </div>

              {/* Date in Center */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className='z-10 px-6 py-2 rounded-xl bg-gradient-to-r from-default-100 to-default-200/80 backdrop-blur-sm 
                          border border-white/20 min-w-[140px] flex justify-center items-center lg:order-2 order-1'
              >
                <span className='text-sm font-medium bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent '>
                  {item?.date}
                </span>
              </motion.div>
              <div className="order-3"></div>

              {/* Right Content */}
              {/* <div className={`${item?.isLeft && "order-3"}`}>
                {!item?.isLeft && <TimelineCard item={item} isLeft={false} />}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTimeline;
