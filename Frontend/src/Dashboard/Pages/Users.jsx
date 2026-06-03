import { useState } from "react";
import {
  Users,
  UserCheck,
  UserX,
  UserPlus,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

function UsersPage() {
  const [statusFilter, setStatusFilter] = useState("All Status");

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
            value: usersData.filter((u) => u.status === "Active").length,
            icon: UserCheck,
            color: "bg-green-100 text-green-600",
          },
          {
            title: "Inactive Users",
            value: usersData.filter((u) => u.status === "Inactive").length,
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
          <h2 className="text-xl font-bold">
            All Users
          </h2>

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
                <th className="px-4 py-4 font-semibold">
                  Name
                </th>

                <th className="px-4 py-4 font-semibold">
                  Email
                </th>

                <th className="px-4 py-4 font-semibold">
                  Phone
                </th>

                <th className="px-4 py-4 font-semibold">
                  Status
                </th>

                <th className="px-4 py-4 font-semibold">
                  Joined On
                </th>

                <th className="px-4 py-4 font-semibold">
                  Action
                </th>
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
  );
}

export default UsersPage;