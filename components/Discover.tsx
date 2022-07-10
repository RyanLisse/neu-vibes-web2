import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { topics } from '../utils/constants';

const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;

  const activeTopicStyle = "xl:border-2 hover:bg-primary xl:border-[#93FF0A] px-3 py-2 rounded xl:rounded-full flex text-center items-center gap-2 justify-center cursor-pointer text-[#93FF0A]"

  const topicStyle = "xl:border-2 hover:bg-primary hover:text-black xl:border-gray-300 px-3 py-2 rounded xl:rounded-full text-center flex items-center gap-2 justify-center cursor-pointer  text-slate-50"

  return (
    <div className="pb-6 xl:border-b-2 xl:border-gray-200">
      <p className="hidden m-3 mt-4 font-semibold text-center text-gray-50 xl:block">
        Popular Genres
      </p>
      <div className="flex flex-wrap gap-3">
        {topics.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div className={topic === item.name ?activeTopicStyle : topicStyle}>
              <span className="text-2xl font-bold xl:text-md">
                {item.icon}
              </span>
              <span className="hidden font-medium capitalize text-md xl:block">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Discover