import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import Image from "next/image";
import Profile from "@/public/profile.jpg";

export default function Header() {
  return (
    <header className="sticky left-0 top-0 whitespace-nowrap 0 w-full bg-white h-16 flex items-center justify-between border-b-2">
      <nav className="flex items-center">
        <h2 className="visually-hidden">header menu</h2>
        <ul className="flex font-semibold">
          <li className="p-4">
            <a href="/" className="text-slate-500">
              Dashboard
            </a>
          </li>
          <li className="p-4">
            <a href="/" className="text-slate-500">
              Users
            </a>
          </li>
          <li className="p-4">
            <a href="/" className="text-slate-500">
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <div className="bg-slate-100 rounded-md">
          <div>
            <button>
              <FaSearch className="fill-slate-500" />
            </button>
            <input className="pl-2 truncate" type="text" placeholder="Search" />
          </div>
        </div>

        <div className="flex ml-10">
          <div className="flex items-center">
            <FaMailBulk className="mr-4 text-xl	fill-slate-500" />
            <FaBell className="mr-4 text-xl	fill-slate-500" />
          </div>

          {/* 로그인 했을 경우 */}
          <div className="w-full ">
            <button
              className="w-8 h-8 rounded-full overflow-hidden"
              type="button"
            >
              <Image src={Profile} alt="프로필 이미지" />
            </button>
          </div>
          {/* 로그인 하지 않은 경우 */}
          <div></div>
        </div>
      </div>
    </header>
  );
}
