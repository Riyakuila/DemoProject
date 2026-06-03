import React, { useState } from "react";
import {
  LayoutDashboard, Users, Wrench, Briefcase, Mail, FileText, Star, Settings, 
  LogOut, Search, Eye, Pencil, Trash2, UserCheck, UserX, UserPlus,
} from "lucide-react";

import logo from "../../assets/logo3.png";

export default function Admin() {
  const [active, setActive] = useState("Dashboard");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Users", icon: Users },
    { name: "Services", icon: Wrench },
    { name: "Projects", icon: Briefcase },
    { name: "Enquiries", icon: Mail },
    { name: "Blogs", icon: FileText },
    { name: "Testimonials", icon: Star },
    { name: "Settings", icon: Settings },
  ];

  const usersData = [
    {
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "+91 9876543211",
      status: "Active",
      date: "30 May 2024",
    },
    {
      name: "Sneha Gupta",
      email: "sneha@example.com",
      phone: "+91 9876543213",
      status: "Inactive",
      date: "28 May 2025",
    },
    {
      name: "Vikash Singh",
      email: "vikash@example.com",
      phone: "+91 9876543214",
      status: "Active",
      date: "27 May 2024",
    },
  ];

  const filteredUsers =
    statusFilter === "All Status"
      ? usersData
      : usersData.filter((user) => user.status === statusFilter);

  return (
    <div className="min-h-screen bg-[#f5f6fa] text-[#060606]">
      <div className="flex">
        <aside className="fixed left-0 top-0 h-screen w-60 bg-[#080808] text-white">
          <div className="flex h-20 items-center justify-start border-b border-white/9 pl-0">
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
                <button
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`flex w-full items-center gap-3 rounded-1xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    active === item.name
                      ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-lg shadow-orange-500/20"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </button>
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

        <main className="ml-60 min-h-screen w-full">
          <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-9 shadow-sm">
            <h1 className="text-2xl font-bold">{active}</h1>

            <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-60 bg-transparent text-sm outline-none"
              />
            </div>
          </header>

          <section className="p-8">
            {active === "Dashboard" ? (
              <div>
                <div className="mb-10">
                  <h2 className="text-2xl font-bold">Welcome back</h2>
                  <p className="mt-1 text-sm text-gray-700">
                    Manage website projects, services and client enquiries.
                  </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    { title: "Total Projects", value: "12" },
                    { title: "Services", value: "08" },
                    { title: "Enquiries", value: "45" },
                    { title: "Applications", value: "18" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <p className="text-sm text-gray-900">{item.title}</p>
                      <h3 className="mt-3 text-3xl font-bold">{item.value}</h3>
                      <p className="mt-3 text-xs font-medium text-orange-500">
                        Updated this month
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-9 grid gap-6 xl:grid-cols-2">
                  <div className="rounded-2xl bg-white p-7 shadow-sm">
                    <h3 className="mb-5 text-lg font-bold">Recent Enquiries</h3>

                    <div className="space-y-4">
                      {[
                        {
                          name: "Amit Kumar",
                          service: "Website Development",
                          status: "New",
                        },
                        {
                          name: "Priya Sharma",
                          service: "AI Solution",
                          status: "Contacted",
                        },
                        {
                          name: "Rahul Verma",
                          service: "ERP System",
                          status: "New",
                        },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between rounded-xl border border-gray-100 p-3"
                        >
                          <div>
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-500">
                              {item.service}
                            </p>
                          </div>

                          <span
                            className={`rounded-full px-4 py-1 text-xs font-semibold ${
                              item.status === "New"
                                ? "bg-orange-100 text-orange-600"
                                : "bg-green-100 text-green-600"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <h3 className="mb-5 text-lg font-bold">Quick Actions</h3>

                    <div className="grid gap-6 sm:grid-cols-2">
                      {[
                        "Add Project",
                        "Add Service",
                        "View Enquiries",
                        "Update Website",
                      ].map((item) => (
                        <button
                          key={item}
                          className="rounded-xl border border-gray-100 bg-gray-100 p-6 text-left font-semibold transition hover:border-yellow-200 hover:bg-yellow-100"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : active === "Users" ? (
              <div>
                <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    {
                      title: "Total Users",
                      value: usersData.length,
                      icon: Users,
                      color: "bg-blue-100 text-blue-600",
                    },
                    {
                      title: "Active Users",
                      value: usersData.filter((u) => u.status === "Active")
                        .length,
                      icon: UserCheck,
                      color: "bg-green-100 text-green-600",
                    },
                    {
                      title: "Inactive Users",
                      value: usersData.filter((u) => u.status === "Inactive")
                        .length,
                      icon: UserX,
                      color: "bg-red-100 text-red-600",
                    },
                    {
                      title: "New Users",
                      value: "1",
                      icon: UserPlus,
                      color: "bg-orange-100 text-orange-600",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}
                          >
                            <Icon size={24} />
                          </div>

                          <div>
                            <p className="text-sm text-gray-500">
                              {item.title}
                            </p>
                            <h3 className="mt-1 text-2xl font-bold">
                              {item.value}
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <h2 className="text-xl font-bold">All Users</h2>

                    <button className="rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-5 py-2 text-sm font-semibold text-black shadow-sm transition hover:shadow-md">
                      + Add New User
                    </button>
                  </div>

                  <div className="mb-6 flex flex-col gap-3 md:flex-row">
                    <input
                      type="text"
                      placeholder="Search by name, email or phone..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-400 md:max-w-sm"
                    />

                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-400"
                    >
                      <option>All Status</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[750px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-gray-50 text-gray-600">
                          <th className="px-4 py-4 font-semibold">Name</th>
                          <th className="px-4 py-4 font-semibold">Email</th>
                          <th className="px-4 py-4 font-semibold">Phone</th>
                          <th className="px-4 py-4 font-semibold">Status</th>
                          <th className="px-4 py-4 font-semibold">
                            Joined On
                          </th>
                          <th className="px-4 py-4 font-semibold">Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {filteredUsers.map((user) => (
                          <tr
                            key={user.email}
                            className="border-b border-gray-100 transition hover:bg-orange-50/40"
                          >
                            <td className="px-4 py-4 font-semibold">
                              {user.name}
                            </td>
                            <td className="px-4 py-4 text-gray-600">
                              {user.email}
                            </td>
                            <td className="px-4 py-4 text-gray-600">
                              {user.phone}
                            </td>
                            <td className="px-4 py-4">
                              <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                  user.status === "Active"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-red-100 text-red-600"
                                }`}
                              >
                                {user.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-gray-600">
                              {user.date}
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-3">
                                <button className="text-gray-500 hover:text-blue-600">
                                  <Eye size={17} />
                                </button>
                                <button className="text-gray-500 hover:text-orange-500">
                                  <Pencil size={17} />
                                </button>
                                <button className="text-gray-500 hover:text-red-500">
                                  <Trash2 size={17} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[80vh] items-center justify-center rounded-2xl border-2 border-dashed border-gray-400 bg-white">
                <p className="text-sm text-gray-500">
                  {active} content will be added here
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}