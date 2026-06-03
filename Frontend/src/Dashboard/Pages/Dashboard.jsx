function Dashboard() {
  return (
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

            <h3 className="mt-3 text-3xl font-bold">
              {item.value}
            </h3>

            <p className="mt-3 text-xs font-medium text-orange-500">
              Updated this month
            </p>
          </div>
        ))}
      </div>

      <div className="mt-9 grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl bg-white p-7 shadow-sm">
          <h3 className="mb-5 text-lg font-bold">
            Recent Enquiries
          </h3>

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
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

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
          <h3 className="mb-5 text-lg font-bold">
            Quick Actions
          </h3>

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
  );
}

export default Dashboard;