import { useState } from "react";
import {
Mail,
PhoneCall,
CheckCircle,
Users,
Eye,
Pencil,
Trash2,
} from "lucide-react";

function Enquiries() {
const [search, setSearch] = useState("");

const enquiriesData = [
{
name: "Rahul Sharma",
company: "ABC Industries",
service: "ERP Development",
phone: "+91 9876543210",
status: "New",
date: "24 Jun 2026",
},
{
name: "Priya Singh",
company: "Vision Tech",
service: "Website Development",
phone: "+91 9876543211",
status: "Contacted",
date: "22 Jun 2026",
},
{
name: "Amit Kumar",
company: "NextGen Solutions",
service: "Mobile App Development",
phone: "+91 9876543212",
status: "Converted",
date: "20 Jun 2026",
},
];

const filteredEnquiries = enquiriesData.filter(
(enquiry) =>
enquiry.name
.toLowerCase()
.includes(search.toLowerCase()) ||
enquiry.company
.toLowerCase()
.includes(search.toLowerCase())
);

return ( <div> <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
{[
{
title: "Total Enquiries",
value: enquiriesData.length,
icon: Mail,
color: "bg-blue-100 text-blue-600",
},
{
title: "New Enquiries",
value: enquiriesData.filter(
(e) => e.status === "New"
).length,
icon: PhoneCall,
color: "bg-yellow-100 text-yellow-600",
},
{
title: "Converted",
value: enquiriesData.filter(
(e) => e.status === "Converted"
).length,
icon: CheckCircle,
color: "bg-green-100 text-green-600",
},
{
title: "Clients",
value: "12",
icon: Users,
color: "bg-purple-100 text-purple-600",
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
        All Enquiries
      </h2>

      <button className="rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-5 py-2 text-sm font-semibold text-black">
        + Add Enquiry
      </button>
    </div>

    <input
      type="text"
      placeholder="Search enquiries..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-6 w-full max-w-sm rounded-xl border border-gray-200 px-4 py-3 outline-none"
    />

    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-left">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-4">Name</th>
            <th className="px-4 py-4">Company</th>
            <th className="px-4 py-4">Service</th>
            <th className="px-4 py-4">Phone</th>
            <th className="px-4 py-4">Status</th>
            <th className="px-4 py-4">Date</th>
            <th className="px-4 py-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEnquiries.map((enquiry) => (
            <tr
              key={enquiry.phone}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="px-4 py-4">
                {enquiry.name}
              </td>

              <td className="px-4 py-4">
                {enquiry.company}
              </td>

              <td className="px-4 py-4">
                {enquiry.service}
              </td>

              <td className="px-4 py-4">
                {enquiry.phone}
              </td>

              <td className="px-4 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    enquiry.status === "New"
                      ? "bg-blue-100 text-blue-600"
                      : enquiry.status ===
                        "Contacted"
                      ? "bg-yellow-100 text-yellow-600"
                      : enquiry.status ===
                        "Converted"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {enquiry.status}
                </span>
              </td>

              <td className="px-4 py-4">
                {enquiry.date}
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

export default Enquiries;
