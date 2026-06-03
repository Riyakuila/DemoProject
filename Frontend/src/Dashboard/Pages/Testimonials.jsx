import { useState } from "react";
import {
MessageSquare,
Star,
CheckCircle,
Eye,
Pencil,
Trash2,
} from "lucide-react";

function Testimonials() {
const [search, setSearch] = useState("");

const testimonialsData = [
{
name: "Rahul Sharma",
company: "ABC Industries",
rating: 5,
status: "Published",
review:
"Outstanding service and excellent project delivery.",
},
{
name: "Priya Singh",
company: "Vision Tech",
rating: 4,
status: "Published",
review:
"Professional team with strong technical expertise.",
},
{
name: "Amit Kumar",
company: "NextGen Solutions",
rating: 5,
status: "Draft",
review:
"Great communication and timely project completion.",
},
];

const filteredTestimonials = testimonialsData.filter(
(testimonial) =>
testimonial.name
.toLowerCase()
.includes(search.toLowerCase()) ||
testimonial.company
.toLowerCase()
.includes(search.toLowerCase())
);

return ( <div>
{/* Stats Cards */} <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
{[
{
title: "Total Testimonials",
value: testimonialsData.length,
icon: MessageSquare,
color: "bg-blue-100 text-blue-600",
},
{
title: "Published",
value: testimonialsData.filter(
(t) => t.status === "Published"
).length,
icon: CheckCircle,
color: "bg-green-100 text-green-600",
},
{
title: "Average Rating",
value: "4.8",
icon: Star,
color: "bg-yellow-100 text-yellow-600",
},
{
title: "Featured",
value: "2",
icon: MessageSquare,
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

  {/* Testimonials Management */}
  <div className="rounded-2xl bg-white p-6 shadow-sm">
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <h2 className="text-xl font-bold">
        All Testimonials
      </h2>

      <button className="rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-5 py-2 text-sm font-semibold text-black">
        + Add Testimonial
      </button>
    </div>

    <input
      type="text"
      placeholder="Search testimonials..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-6 w-full max-w-sm rounded-xl border border-gray-200 px-4 py-3 outline-none"
    />

    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-left">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-4">
              Client
            </th>

            <th className="px-4 py-4">
              Company
            </th>

            <th className="px-4 py-4">
              Review
            </th>

            <th className="px-4 py-4">
              Rating
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
          {filteredTestimonials.map(
            (testimonial) => (
              <tr
                key={testimonial.name}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-4 font-medium">
                  {testimonial.name}
                </td>

                <td className="px-4 py-4">
                  {testimonial.company}
                </td>

                <td className="max-w-xs px-4 py-4 text-gray-600">
                  {testimonial.review}
                </td>

                <td className="px-4 py-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map(
                      (_, index) => (
                        <Star
                          key={index}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      testimonial.status ===
                      "Published"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {testimonial.status}
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
            )
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>

);
}

export default Testimonials;
