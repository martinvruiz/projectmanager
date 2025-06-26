import Button from "./Button";

export default function ViewTask({ task, editTask, deleteTask }) {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="md:text-lg text-gray-600 my-2 text-center">
        Created: {new Date(task.created_at).toLocaleDateString()}
      </p>
      <div className="md:min-w-xs mx-auto flex flex-col items-center bg-white rounded-lg p-4">
        <h3 className="text-2xl  font-semibold mb-2">{task.name}</h3>
        <p className="text-gray-700 mb-2">{task.description}</p>
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
      </div>
      <div className="flex flex-row items-center justify-center mt-4 space-x-4">
        <Button title={"Edit task"} onClick={editTask} />
        <Button title={"Delete task"} onClick={deleteTask} />
      </div>
    </div>
  );
}
