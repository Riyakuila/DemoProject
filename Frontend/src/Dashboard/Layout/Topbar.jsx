import { Search } from "lucide-react";
import { useLocation } from "react-router-dom";

function Topbar() {
  const location = useLocation();

  const pageTitle = {
    "/dashboard": "Dashboard",
    "/dashboard/users": "Users",
    "/dashboard/services": "Services",
    "/dashboard/projects": "Projects",
    "/dashboard/enquiries": "Enquiries",
    "/dashboard/blogs": "Blogs",
    "/dashboard/testimonials": "Testimonials",
    "/dashboard/settings": "Settings",
  };

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-9 shadow-sm">
      <h1 className="text-2xl font-bold">
        {pageTitle[location.pathname] || "Dashboard"}
      </h1>

      <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2">
        <Search size={18} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search here..."
          className="w-60 bg-transparent text-sm outline-none"
        />
      </div>
    </header>
  );
}

export default Topbar;