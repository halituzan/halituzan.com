"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Code2, Database, Wrench } from "lucide-react";
const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code2 className='w-6 h-6' />,
      items: [
        "Javascript",
        "HTML5",
        "CSS3",
        "React",
        "NextJs",
        "TypeScript",
        "TailwindCSS",
        "MaterialUl",
        "MantineUI",
        "NextUI",
      ],
    },
    {
      category: "Backend",
      icon: <Database className='w-6 h-6' />,
      items: ["Node.js", "Express", "MongoDB"],
    },
    {
      category: "Tools",
      icon: <Wrench className='w-6 h-6' />,
      items: ["Git", "VS Code", "Figma"],
    },
  ];

  return (
    <div className='max-w-6xl mx-auto p-8 pt-0'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-8'
      >
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className='border-2 border-default-100 rounded-lg'
          >
            <Card
              key={skillGroup.category}
              className='shadow-none bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60'
            >
              <CardBody className='pt-3'>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='p-2 rounded-md bg-primary/10'>
                    {skillGroup.icon}
                  </div>
                  <h2 className='text-xl font-semibold custom-text-h3'>
                    {skillGroup.category}
                  </h2>
                </div>
                <div className='space-y-0'>
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className='flex items-center p-2 py-1.5 rounded-lg transition-colors duration-200'
                    >
                      <div className='text-sm font-medium'>{skill}</div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
