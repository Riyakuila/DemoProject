import { useState } from "react";
import {
FolderKanban,
CheckCircle,
Clock,
PauseCircle,
Eye,
Pencil,
Trash2,
} from "lucide-react";

function Projects() {
const [search, setSearch] = useState("");

const projectsData = [
{
name: "Corporate ERP System",
client: "ABC Industries",
manager: "Rahul Sharma",
budget: "₹8,50,000",
status: "Active",
priority: "High",
},
{
name: "Inventory Management System",
client: "QuickSign Pvt Ltd",
manager: "Amit Das",
budget: "₹4,20,000",
status: "Completed",
priority: "Medium",
},
{
name: "CRM Dashboard",
client: "Vision Tech",
manager: "Priya Singh",
budget: "₹6,00,000",
status: "On Hold",
priority: "High",
},
];

const filteredProjects = projectsData.filter(
(project) =>
project.name
.toLowerCase()
.includes(search.toLowerCase()) ||
project.client
.toLowerCase()
.includes(search.toLowerCase())
);

return ( <div>
{/* Stats */} <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
{[
{
title: "Total Projects",
value: projectsData.length,
icon: FolderKanban,
color: "bg-blue-100 text-blue-600",
},
{
title: "Active Projects",
value: projectsData.filter(
(p) => p.status === "Active"
).length,
icon: Clock,
color: "bg-green-100 text-green-600",
},
{
title: "Completed",
value: projectsData.filter(
(p) => p.status === "Completed"
).length,
icon: CheckCircle,
color: "bg-purple-100 text-purple-600",
},
{
title: "On Hold",
value: projectsData.filter(
(p) => p.status === "On Hold"
).length,
icon: PauseCircle,
color: "bg-orange-100 text-orange-600",
},
].map((item) => {
const Icon = item.icon;

      return (
        <div
          key={item.title}
          className="rounded-2xl bg-white p-5 shadow-sm"
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

              <h3 className="text-2xl font-bold">
                {item.value}
              </h3>
            </div>
          </div>
        </div>
      );
    })}
  </div>

  {/* Project Management */}
  <div className="rounded-2xl bg-white p-6 shadow-sm">
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <h2 className="text-xl font-bold">
        All Projects
      </h2>

      <button className="rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-5 py-2 text-sm font-semibold text-black">
        + Add Project
      </button>
    </div>

    <input
      type="text"
      placeholder="Search projects..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-6 w-full max-w-sm rounded-xl border border-gray-200 px-4 py-3 outline-none"
    />

    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-left">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-4">
              Project
            </th>

            <th className="px-4 py-4">
              Client
            </th>

            <th className="px-4 py-4">
              Status
            </th>

            <th className="px-4 py-4">
              Priority
            </th>

            <th className="px-4 py-4">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredProjects.map((project) => (
            <tr
              key={project.name}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="px-4 py-4">
                <div>
                  <p className="font-semibold">
                    {project.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    Manager: {project.manager}
                  </p>

                  <p className="text-xs text-gray-500">
                    Budget: {project.budget}
                  </p>
                </div>
              </td>

              <td className="px-4 py-4">
                {project.client}
              </td>

              <td className="px-4 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : project.status ===
                        "Completed"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {project.status}
                </span>
              </td>

              <td className="px-4 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    project.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : project.priority ===
                        "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {project.priority}
                </span>
              </td>

              <td className="px-4 py-4">
                <div className="flex gap-3">
                  <button>
                    <Eye size={17} />
                  </button>

                  <button>
                    <Pencil size={17} />
                  </button>

                  <button>
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

export default Projects;
