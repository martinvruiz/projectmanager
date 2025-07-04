import Button from "./Button";

export default function EditTask({
  editTask,
  onChangeName,
  onChangeDescription,
  onChangeStatus,
  onChangePriority,
  onSubmit,
}) {
  return (
    <div className="w-full max-w-lg mx-auto p-2 bg-white rounded-2xl">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Edit Task
        </h3>

        <input
          type="text"
          value={editTask.name}
          onChange={onChangeName}
          placeholder="Task name"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 min-w-3xs"
        />

        <input
          type="text"
          value={editTask.description}
          onChange={onChangeDescription}
          placeholder="Task description (optional)"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 min-w-3xs"
        />

        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="status"
            className="text-sm font-medium text-gray-700 w-full"
          >
            Status:
          </label>
          <select
            name="status"
            id="status"
            value={editTask.status}
            onChange={onChangeStatus}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
          >
            <option value="pending">Pending</option>
            <option value="in process">In process</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="priority"
            className="text-sm font-medium text-gray-700"
          >
            Priority:
          </label>
          <select
            name="priority"
            id="priority"
            value={editTask.priority}
            onChange={onChangePriority}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 min-w-3xs"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="pt-2">
          <Button title="Save" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
}
