import Image from "next/image";
import React from "react";
import { Popover } from "@headlessui/react";

const Photographer = ({ user }) => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <button className="hover:bg-white focus:outline-none cursor-pointer border-[3px] border-slate-400 rounded-md py-4 px-8 flex flex-wrap items-center justify-center gap-4">
          <Image
            className="rounded-full shadow-sm"
            alt="profile photo"
            src={user?.profile_image?.medium}
            width={40}
            height={40}
          />
          <p className="text-slate-500 uppercase font-bold">{user?.name}</p>
        </button>
      </Popover.Button>
      <Popover.Panel className="absolute z-10 sm:left-72 sm:-top-8 mt-2 sm:mt-0 ">
        <div className="flex flex-col bg-white py-4 w-48 px-6 shadow-md rounded-md items-center text-center">
          <p className="text-slate-500 font-bold">{user?.name}</p>
          <p className="text-slate-500">{user?.location}</p>
          <div className="text-left flex flex-col items-start gap-2 mt-4 w-full">
            {user?.links?.html && (
              <a
                href={user?.links?.html}
                target="_blank"
                rel="noreferrer"
                className="text-lime-600 text-lg"
              >
                Unsplash
              </a>
            )}
            {user?.portfolio_url && (
              <a
                href={user?.portfolio_url}
                target="_blank"
                rel="noreferrer"
                className="text-lime-600 text-lg"
              >
                Portfolio
              </a>
            )}
            {user?.twitter_username && (
              <a
                href={`https://twitter.com/${user?.twitter_username}`}
                target="_blank"
                rel="noreferrer"
                className="text-lime-600 text-lg"
              >
                Twitter
              </a>
            )}
            {user?.instagram_username && (
              <a
                href={`https://instagram.com/${user?.instagram_username}`}
                target="_blank"
                rel="noreferrer"
                className="text-lime-600 text-lg"
              >
                Instagram
              </a>
            )}
          </div>
        </div>

        {/* <img src="/solutions.jpg" alt="" /> */}
      </Popover.Panel>
    </Popover>
  );
};

export default Photographer;
