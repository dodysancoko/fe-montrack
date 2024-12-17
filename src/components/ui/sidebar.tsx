import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import {
  NotebookPen,
  CreditCard,
  FileBarChart,
  LayoutDashboard,
  Settings,
  LogOut,
} from "lucide-react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const sidebarItems = [
  { icon: <LayoutDashboard />, label: "Dashboard", path: "/dashboard" },
  { icon: <CreditCard />, label: "Transaksi", path: "/transaction" },
  { icon: <NotebookPen />, label: "Wishlist", path: "/wishlist" },
  //{ icon: <FileBarChart />, label: "Laporan", path: "/report" },
];

function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path) && pathname !== "/";
  };

  return (
    <aside className="p-6 flex flex-col gap-8 bg-zinc-900 text-white h-screen">
      <div className="flex flex-col items-center gap-2">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="rounded-full"
            style={{ width: "68px", height: "68px" }}
          />
          <AvatarFallback>FY</AvatarFallback>
        </Avatar>
        <h2 className="font-medium">Dody Sancoko</h2>
      </div>

      <nav className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-4">
          {sidebarItems.map((item) => (
            <Link to={item.path}>
              <Button
                key={item.label}
                variant={"ghost"}
                className={`${
                  isActive(item.path) && "bg-[#48DE80] text-black"
                } justify-start gap-4 w-full flex items-center`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button
            key={"Settings"}
            variant="ghost"
            className={`justify-start gap-4 w-full flex items-center`}
          >
            <span>
              <Settings />
            </span>
            Pengaturan
          </Button>
          <Link to={"/login"}>
            <Button
              key={"Logout"}
              variant="ghost"
              className={`justify-start gap-4 w-full flex items-center`}
            >
              <span>
                <LogOut />
              </span>
              Keluar
            </Button>
          </Link>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
