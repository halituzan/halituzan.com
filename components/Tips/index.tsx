"use client";

import { tipsAndTricks } from "@/config";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import Typescript from "../Icons/Typescript";
type Props = {};

const Tips = (props: Props) => {
  return (
    <div className='flex flex-col w-full divide-y-2 divide-default-300 px-4 lg:mt-0 mt-10'>
      {tipsAndTricks.map((i) => {
        return (
          <Link
            href={`/files/tips/${i.folder}/${i.file}.${i.type}`}
            target='_blank'
            role='button'
            key={i.id}
            className='flex items-center justify-between cursor-pointer group py-2'
          >
            <div className='group-hover:custom-p flex items-center'>
              {i.icon === "typescript" && (
                <Typescript className='group-hover:fill-indigo-500' />
              )}
              <p className='ml-2 group-hover:custom-p'>{i.name}</p>
            </div>
            <div className='group-hover:custom-p flex items-center'>
              <p className=''> {i.type}</p>

              <SquareArrowOutUpRight
                size={18}
                className='group-hover:stroke-pink-500 ml-2'
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Tips;
