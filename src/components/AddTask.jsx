import Button from "./Button";

export default function AddTask({
  task,
  onClick,
  onChangeName,
  onChangeDescription,
  onChangePriority,
}) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="py-2 text-md">Add task</h3>
      <input
        type="text"
        value={task.name}
        onChange={onChangeName}
        className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
        placeholder="Task name"
      />
      <input
        type="text"
        value={task.description}
        onChange={onChangeDescription}
        className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
        placeholder="Task description(optional)"
      />
      <select
        name="priority"
        value={task.priority}
        onChange={onChangePriority}
        className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <Button title={"Add task"} onClick={onClick} />
    </div>
  );
}
