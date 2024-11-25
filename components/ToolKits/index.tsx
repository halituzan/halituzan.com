import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight, WandSparkles } from "lucide-react";
import { toolkitItems } from "@/config";

const ToolkitPage = () => {
  return (
    <div className='container mx-auto px-4 pb-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {toolkitItems?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
            className='w-full'
          >
            <Card shadow="none" className='sticky top-8 bg-card/50 backdrop-blur shadow-none border-2 border-default-100 supports-[backdrop-filter]:bg-background/60'>
              <CardHeader>
                <div className='mr-2'>
                  <item.icon />
                </div>
                <h3 className='custom-text-h5'>{item.title}</h3>
              </CardHeader>
              <CardBody>
                <p className='text-sm text-gray-500'>{item.description}</p>
              </CardBody>
              <CardFooter>
                <a
                  href={item.url}
                  target='_blank'
                  rel='nofollow'
                  className='flex items-center'
                >
                  <SquareArrowOutUpRight size={20} /> <p className='ml-2 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'>İncele</p>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ToolkitPage;
