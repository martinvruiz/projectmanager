import Button from "./Button";

export default function ViewTask({ task, editTask, deleteTask }) {
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
    <div className="w-full flex flex-col items-center space-y-4">
      <p className="text-sm md:text-base text-gray-500">
        Created: {new Date(task.created_at).toLocaleDateString()}
      </p>

      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">{task.name}</h3>
        <p className="text-gray-700">{task.description}</p>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <span
            className={`px-4 py-1 rounded-lg text-sm font-medium ${statusColor}`}
          >
            Status: {task.status}
          </span>
          <span
            className={`px-4 py-1 rounded-lg text-sm font-medium ${priorityColor}`}
          >
            Priority: {task.priority}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <Button title="Edit task" onClick={editTask} />
        <Button title="Delete task" onClick={deleteTask} />
      </div>
    </div>
  );
}
