"use client";
import { education, experience, personalInfo } from "@/config";
import { Card, CardBody } from "@nextui-org/card";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Download,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  SquareArrowOutUpRight,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const HomeSection = () => {
  return (
    <div className='max-w-6xl mx-auto p-8 pt-0'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='flex flex-col gap-8'
      >
        {/* Sol Profil Kartı */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className='sticky top-8 bg-card/50 backdrop-blur shadow-none border-2 border-default-100  supports-[backdrop-filter]:bg-background/60'>
            <CardBody className='p-2'>
              <div className='flex flex-col items-center text-center'>
                <div className='w-32 h-32 rounded-full overflow-hidden mb-2'>
                  <img
                    src={personalInfo?.image}
                    alt={personalInfo?.name}
                    className='w-full h-full object-cover'
                  />
                </div>

                <h1 className='text-xl font-bold mb-2'>{personalInfo?.name}</h1>
                <h2 className='text-lg text-muted-foreground mb-2 custom-text-h2'>
                  {personalInfo?.title}
                </h2>

                <div className='flex items-center gap-2 text-sm text-muted-foreground mb-4'>
                  <MapPin className='w-4 h-4' />
                  {personalInfo?.location}
                </div>
                <div>
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
                      target='_blank'
                      href={"mailto:halit.uzan@gmail.com"}
                      className='p-1 bg-default-50 rounded-lg hover:bg-default-200 hover:text-default-900'
                    >
                      <Mail className='w-5 h-5' />
                    </Link>
                    <Link
                      href={"phone:+905301142548"}
                      className='p-1 bg-default-50 rounded-lg hover:bg-default-200 hover:text-default-900'
                      title='+90 (530) 114 25 48'
                    >
                      <Phone className='w-5 h-5' />
                    </Link>
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
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Sağ İçerik Bölümü */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className='lg:col-span-2'
        >
          {/* Hakkımda */}
          <Card className='mb-8 shadow-none border-2 border-default-100 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <CardBody className='p-6'>
              <h2 className='text-2xl font-bold mb-4 custom-text-h3'>
                Hakkımda
              </h2>
              <div className='text-muted-foreground leading-relaxed'>
                <div dangerouslySetInnerHTML={{ __html: personalInfo?.bio }} />
              </div>
            </CardBody>
          </Card>

          {/* Deneyim */}
          <Card className='mb-8 shadow-none border-2 border-default-100 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <CardBody className='p-6'>
              <div className='text-2xl font-bold mb-6  items-center w-full flex justify-between'>
                <p className='custom-text-h3'>Deneyim</p>
                <Link href={"/works"}>
                  <SquareArrowOutUpRight className='w-4 h-4 ml-2 text-default-900' />
                </Link>
              </div>
              <div className='space-y-6'>
                {experience?.map((exp, index) => (
                  <div key={index} className='flex gap-4'>
                    <div className='mt-1'>
                      <Briefcase className='w-5 h-5 text-primary' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold'>{exp.title}</h3>
                      <p className='custom-text-h5'>{exp.company}</p>
                      <div className='flex items-center text-sm text-muted-foreground mb-2'>
                        <Calendar className='w-4 h-4 mr-2 custom-text' />
                        {exp.period}
                      </div>
                      <p className='text-muted-foreground'>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Eğitim */}
          <Card className='shadow-none border-2 border-default-100  bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <CardBody className='p-6'>
              <h2 className='text-2xl font-bold mb-6 custom-text-h4 custom-text-h4'>
                Eğitim
              </h2>
              <div className='space-y-6'>
                {education?.map((edu, index) => (
                  <div key={index} className='flex gap-4'>
                    <div className='mt-1'>
                      <GraduationCap className='w-5 h-5 text-primary' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold'>{edu.degree}</h3>
                      <p className='custom-text-h5'>{edu.school}</p>
                      <div className='flex items-center text-sm text-muted-foreground'>
                        <Calendar className='w-4 h-4 mr-2' />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeSection;
