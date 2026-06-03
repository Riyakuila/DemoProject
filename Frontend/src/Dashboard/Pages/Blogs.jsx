import { useState } from "react";
import {
FileText,
PenSquare,
Eye,
Star,
Pencil,
Trash2,
} from "lucide-react";

function Blogs() {
const [search, setSearch] = useState("");

const blogsData = [
{
title: "Top Web Development Trends in 2026",
author: "Admin",
category: "Technology",
status: "Published",
date: "10 Jun 2026",
},
{
title: "Why Every Business Needs a Website",
author: "Admin",
category: "Business",
status: "Draft",
date: "08 Jun 2026",
},
{
title: "React vs Next.js: Complete Guide",
author: "Admin",
category: "Development",
status: "Published",
date: "05 Jun 2026",
},
];

const filteredBlogs = blogsData.filter(
(blog) =>
blog.title
.toLowerCase()
.includes(search.toLowerCase()) ||
blog.category
.toLowerCase()
.includes(search.toLowerCase())
);

return ( <div>
{/* Stats Cards */} <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
{[
{
title: "Total Blogs",
value: blogsData.length,
icon: FileText,
color: "bg-blue-100 text-blue-600",
},
{
title: "Published",
value: blogsData.filter(
(b) => b.status === "Published"
).length,
icon: Eye,
color: "bg-green-100 text-green-600",
},
{
title: "Drafts",
value: blogsData.filter(
(b) => b.status === "Draft"
).length,
icon: PenSquare,
color: "bg-orange-100 text-orange-600",
},
{
title: "Featured",
value: "2",
icon: Star,
color: "bg-yellow-100 text-yellow-600",
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

  {/* Blogs Management */}
  <div className="rounded-2xl bg-white p-6 shadow-sm">
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <h2 className="text-xl font-bold">
        All Blogs
      </h2>

      <button className="rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-5 py-2 text-sm font-semibold text-black">
        + Create Blog
      </button>
    </div>

    <input
      type="text"
      placeholder="Search blogs..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-6 w-full max-w-sm rounded-xl border border-gray-200 px-4 py-3 outline-none"
    />

    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-left">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-4">
              Blog Title
            </th>

            <th className="px-4 py-4">
              Author
            </th>

            <th className="px-4 py-4">
              Category
            </th>

            <th className="px-4 py-4">
              Status
            </th>

            <th className="px-4 py-4">
              Date
            </th>

            <th className="px-4 py-4">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredBlogs.map((blog) => (
            <tr
              key={blog.title}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="px-4 py-4">
                <div>
                  <p className="font-semibold">
                    {blog.title}
                  </p>
                </div>
              </td>

              <td className="px-4 py-4">
                {blog.author}
              </td>

              <td className="px-4 py-4">
                {blog.category}
              </td>

              <td className="px-4 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    blog.status === "Published"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {blog.status}
                </span>
              </td>

              <td className="px-4 py-4">
                {blog.date}
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

export default Blogs;
