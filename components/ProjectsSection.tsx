"use client";
import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button, ButtonGroup } from "@nextui-org/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { Chip } from "@nextui-org/chip";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Entegrenity",
      description:
        "Pazaryerleri API servislerini kullanarak e-ticaret işletmelerinin ürün yönetimini kolaylaştıran IMS sistemidir. Bu yazılımın amacı, eticaret işletmelerinin ürünlerini gruplayarak tek bir platformdan tüm ürünlerinin stok ve fiyat bilgilerini günvellemesidir.",
      image: "/projects/entegrenity.jpg",
      technologies: ["NextJs", "Tailwindcss", "Javascript", "MongoDb"],
      githubLink: "https://github.com/halituzan",
      liveLink: "https://entegrenity.com",
    },
    {
      title: "Trendyol Barcode Finder",
      description:
        "Trendyol'da listelenen ürünlerin barkodlarını bulmayı kolaylaştıran Google Chrome eklentisidir. Versiyon 2 olarak geliştirilmiş bir üst versiyonudur. Eski versiyonu için Trendyol Barcode eklentisi incelenebilir.",
      image: "/projects/barcode-finder.jpg",
      technologies: ["HTML", "Javascript", "Bootstrap"],
      githubLink: "https://github.com/halituzan",
      liveLink: "https://chromewebstore.google.com/detail/trendyol-barkod-finder/mlpdemjleelebmdmhhnklcmhooniclpd",
    },
    {
      title: "TDK All API Package",
      description:
        "Türk Dil Kurumu API larını kullanarak istenilen kelimenin anlamlarını JSON response olarak getiren bir npm paketi.",
      image: "/projects/tdk.jpg",
      technologies: ["NPM", "Javascript"],
      githubLink: "https://github.com/halituzan/tdk-all-api",
      liveLink: "https://www.npmjs.com/package/tdk-all-api",
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
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className='border-2 border-default-100 rounded-lg'
          >
            <Card className='overflow-hidden bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-none h-full'>
              <CardBody className='p-0 h-full'>
                {/* Proje Görseli */}
                <div className='relative overflow-hidden group'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                    <Button
                      variant='solid'
                      className='bg-background/20 backdrop-blur-sm'
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <GithubIcon className='w-5 h-5 mr-2' />
                      Github
                    </Button>
                    <Button
                      variant='solid'
                      className='bg-background/20 backdrop-blur-sm'
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <ExternalLink className='w-5 h-5 mr-2' />
                      Demo
                    </Button>
                  </div>
                </div>

                {/* Proje Detayları */}
                <div className='flex-1 h-full flex flex-col justify-between'>
                  <h3 className='text-xl font-semibold mb-2 px-6 py-2 custom-text-h3'>
                    {project.title}
                  </h3>
                  <p className='text-muted-foreground mb-4 w-full px-6 py-2 flex-1 '>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 border-t p-2 '>
                    {project.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        size='sm'
                        variant='flat'
                        classNames={{
                          base: "bg-gradient-to-br from-indigo-500/30 to-pink-500/30 border-small border-white/50 rounded-lg",
                          content: "text-xs font-semibold text-default-900",
                        }}
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
