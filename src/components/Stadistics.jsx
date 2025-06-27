export default function Stadistics({ stadistics }) {
  const cards = [
    { label: "Total Projects", value: stadistics.totalProjects },
    { label: "Total Tasks", value: stadistics.totalTasks },
    { label: "Pending", value: stadistics.pendingTasks, color: "text-red-500" },
    {
      label: "In Process",
      value: stadistics.inProcessTasks,
      color: "text-yellow-500",
    },
    { label: "Done", value: stadistics.doneTasks, color: "text-green-500" },
    {
      label: "Progress",
      value: `${stadistics.progress}%`,
      color: "text-indigo-500",
    },
  ];

  return (
    <div className="w-full my-2">
      <h3 className="text-xl font-semibold text-center mb-4">
        Your Statistics
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center"
          >
            <span className="text-sm text-gray-500">{stat.label}</span>
            <span
              className={`text-2xl font-bold ${stat.color || "text-gray-800"}`}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
