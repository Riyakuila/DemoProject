import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Wrench,
  Briefcase,
  Mail,
  FileText,
  Star,
  Settings,
  LogOut,
} from "lucide-react";

import logo from "../../assets/logo3.png";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: Users,
    },
    {
      name: "Services",
      path: "/dashboard/services",
      icon: Wrench,
    },
    {
      name: "Projects",
      path: "/dashboard/projects",
      icon: Briefcase,
    },
    {
      name: "Enquiries",
      path: "/dashboard/enquiries",
      icon: Mail,
    },
    {
      name: "Blogs",
      path: "/dashboard/blogs",
      icon: FileText,
    },
    {
      name: "Testimonials",
      path: "/dashboard/testimonials",
      icon: Star,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-[#080808] text-white">
      <div className="flex h-20 items-center justify-start border-b border-white/10 pl-0">
        <img
          src={logo}
          alt="Driksha Infotech"
          className="h-18 w-auto object-contain"
        />
      </div>

      <nav className="mt-9 space-y-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-linear-to-r from-yellow-400 to-orange-400 text-black shadow-lg shadow-orange-500/20"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="absolute bottom-5 left-4 right-4">
        <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;