import React from "react";

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

      <div className="border border-indigo-200 rounded-md">
        <input className="pl-2" type="text" placeholder="Search"/>
        <button>
          
        </button>
      </div>

      {/* 로그인 했을 경우 */}
      <div>

      </div>
      {/* 로그인 하지 않은 경우 */}
    </header>
  );
}
