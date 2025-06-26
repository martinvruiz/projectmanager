export default function TaskCard({ task }) {
  return (
    <div className="bg-white hover:bg-gray-200 cursor-pointer shadow-md rounded-lg p-3 mb-2 flex flex-col md:flex-row justify-between gap-4 text-sm sm:text-base md:min-w-2xl min-w-xs">
      <h4 className="font-semibold md:w-2/4 md:text-start">{task.name}</h4>
      <div className="flex flex-row justify-between w-full">
        <p className="text-gray-600 md:w-3/6 text-center">
          Priority:{" "}
          <span
            className={`font-medium ${
              task.priority === "high"
                ? "text-red-500"
                : task.priority === "medium"
                ? "text-yellow-500"
                : "text-green-500"
            } text-center`}
          >
            {task.priority}
          </span>
        </p>
        <p className="text-md text-gray-500">
          Status:{" "}
          <span
            className={`font-medium ${
              task.status === "done"
                ? "text-green-500"
                : task.status === "in process"
                ? "text-yellow-500"
                : "text-red-500"
            } text-center`}
          >
            {task.status}
          </span>
        </p>
      </div>
    </div>
  );
}
