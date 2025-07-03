export default function TaskCard({ task }) {
  const priorityColor =
    task.priority === "high"
      ? "bg-red-100 text-red-600"
      : task.priority === "medium"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-green-100 text-green-600";

  const statusColor =
    task.status === "done"
      ? "bg-green-100 text-green-600"
      : task.status === "in process"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-red-100 text-red-600";

  return (
    <div className="bg-white border border-gray-200 hover:shadow-md transition-all duration-300 rounded-lg p-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-center gap-4 w-full text-sm sm:text-base animate-fadeIn md:min-w-2xl min-w-xs">
      <h4 className="font-semibold text-gray-800 w-full md:text-start">
        {task.name}
      </h4>

      <div className="flex gap-3 w-4/5 justify-end">
        <span
          className={`px-3 py-1 rounded-lg text-xs font-medium ${priorityColor}`}
        >
          Priority:{" "}
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>

        <span
          className={`px-3 py-1 rounded-lg text-xs font-medium ${statusColor}`}
        >
          Status: {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
        </span>
      </div>
    </div>
  );
}
