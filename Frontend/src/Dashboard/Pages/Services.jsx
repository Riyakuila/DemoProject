import { useState } from "react";
import {
Wrench,
CheckCircle,
Star,
FileText,
Pencil,
Trash2,
} from "lucide-react";

function Services() {
const [search, setSearch] = useState("");

const servicesData = [
{
name: "Website Development",
category: "Development",
status: "Active",
},
{
name: "Mobile App Development",
category: "Development",
status: "Active",
},
{
name: "UI/UX Design",
category: "Design",
status: "Draft",
},
];

const filteredServices = servicesData.filter((service) =>
service.name.toLowerCase().includes(search.toLowerCase())
);

return ( <div> <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
{[
{
title: "Total Services",
value: servicesData.length,
icon: Wrench,
color: "bg-blue-100 text-blue-600",
},
{
title: "Active Services",
value: servicesData.filter(
(s) => s.status === "Active"
).length,
icon: CheckCircle,
color: "bg-green-100 text-green-600",
},
{
title: "Featured",
value: "2",
icon: Star,
color: "bg-yellow-100 text-yellow-600",
},
{
title: "Draft",
value: servicesData.filter(
(s) => s.status === "Draft"
).length,
icon: FileText,
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

  <div className="rounded-2xl bg-white p-6 shadow-sm">
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <h2 className="text-xl font-bold">
        All Services
      </h2>

      <button className="rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-5 py-2 text-sm font-semibold text-black">
        + Add Service
      </button>
    </div>

    <input
      type="text"
      placeholder="Search services..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-6 w-full max-w-sm rounded-xl border border-gray-200 px-4 py-3 outline-none"
    />

    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-left">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-4">
              Service Name
            </th>
            <th className="px-4 py-4">
              Category
            </th>
            <th className="px-4 py-4">
              Status
            </th>
            <th className="px-4 py-4">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredServices.map((service) => (
            <tr
              key={service.name}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition"
            >
              <td className="px-4 py-4">
                {service.name}
              </td>

              <td className="px-4 py-4">
                {service.category}
              </td>

              <td className="px-4 py-4">
                {service.status}
              </td>

              <td className="px-4 py-4">
                <div className="flex gap-3">
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

export default Services;
