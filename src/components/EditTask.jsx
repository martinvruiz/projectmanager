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
    <div>
      <div className="flex flex-col items-center">
        <h3 className="py-2 text-md">Edit task</h3>
        <input
          type="text"
          value={editTask.name}
          onChange={onChangeName}
          className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
          placeholder="Task name"
        />
        <input
          type="text"
          value={editTask.description}
          onChange={onChangeDescription}
          className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
          placeholder="Task description(optional)"
        />
        <div className="flex flex-row w-full items-center">
          <h3 className="text-center py-2 mb-4">Status: </h3>
          <select
            name="status"
            value={editTask.status}
            onChange={onChangeStatus}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
          >
            <option value="pending">Pending</option>
            <option value="in process">In process</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="flex flex-row w-full items-center">
          <h3 className="text-center py-2 mb-4">Prority: </h3>
          <select
            name="priority"
            value={editTask.priority}
            onChange={onChangePriority}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <Button title={"Save"} onClick={onSubmit} />
      </div>
    </div>
  );
}
