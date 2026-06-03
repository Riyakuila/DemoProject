import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] text-[#060606]">
      <div className="flex">
        <Sidebar />

        <main className="ml-60 min-h-screen w-full">
          <Topbar />

          <section className="p-8">
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;