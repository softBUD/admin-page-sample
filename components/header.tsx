import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-slate-200 h-16 flex items-center">
      <nav className="flex items-center">
        <h2 className="visually-hidden">menu</h2>
        <ul className="flex font-semibold">
          <li className="p-4">
            <a href="/">Dashboard</a>
          </li>
          <li className="p-4">
            <a href="/">Users</a>
          </li>
          <li className="p-4">
            <a href="/">Settings</a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center">
        <div className="border">
          <div>
            <button className="">
              <FaSearch className="" />
            </button>
            <input className="pl-2 truncate" type="text" placeholder="Search" />
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <FaMailBulk className="mr-4 text-xl	" />
            <FaBell className="mr-4 text-xl	" />
          </div>

          {/* 로그인 했을 경우 */}
          <div className="w-full ">
            <button
              className="w-8 h-8 rounded-full overflow-hidden"
              type="button"
            >
              <img
                className="block w-full h-full object-cover"
                src="./images.jpg"
                alt="프로필 이미지"
              />
            </button>
          </div>
          {/* 로그인 하지 않은 경우 */}
          <div></div>
        </div>
      </div>
    </header>
  );
}
