import { IconType } from "react-icons/lib";
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import Link from "next/link";
import BarChartCard from "../charts/bar-chart-card";

export default function Navbar() {
  // type: 선언적 확장 불가능, nav에 입력된 메뉴의 데이터는 정적 타입으로만 사용한다.
  // interface : 선언적 확장 가능, initialMenu는 하위메뉴 상위메뉴 모두 갖는 타입으로 사용하기위해 interface 사용

  type MenuListType = {
    id: number;
    icon: IconType;
    title: string;
    childrenMenu?: InitialMenu[];
  };

  interface InitialMenu {
    id: number;
    icon?: IconType;
    title: string;
  }

  const balancesChildren: InitialMenu[] = [
    { id: 0, title: "Banks Accounts" },
    { id: 1, title: "Credit Cards" },
    { id: 2, title: "Loans" },
  ];

  const menuList: MenuListType[] = [
    { id: 0, icon: FaHome, title: "Dashboard" },
    { id: 1, icon: FaTools, title: "Settings" },
    {
      id: 2,
      icon: FaBarcode,
      title: "Balances",
      childrenMenu: balancesChildren,
    },
  ];

  return (
    <>
      <nav className="relative overflow-y-auto left-0 top-0 z-[1035] w-60 min-w-[200px]  bg-white border-r-2">
        <h1
          id="side-bar-title"
          className="text-violet-500 ml-4 text-xl font-semibold mt-4 mb-1"
        >
          DEJAY
        </h1>
        <div className="pt-3">
          {menuList.map((item) => (
            <ul key={item.title} className="flex justify-left mt-8 ml-4">
              <li className="relative top-1 mr-3 ">
                <Link href="/">
                  <item.icon className="text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-500">
                  {item.title}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </nav>
    </>
  );
}
