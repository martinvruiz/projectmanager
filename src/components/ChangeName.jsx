import Button from "./Button";

export default function ChangeName({
  name,
  onChange,
  updating,
  onClickButton,
}) {
  return (
    <div className="w-full flex flex-col items-center">
      <label htmlFor="nameInput" className="block text-gray-700 mb-2">
        Update name
      </label>
      <input
        id="nameInput"
        type="text"
        placeholder="Enter full name"
        className="border border-gray-300 bg-white rounded px-3 py-2 w-full mb-4"
        value={name}
        autoComplete="name"
        onChange={onChange}
        disabled={updating}
      />
      <Button
        title={updating ? "Updating..." : "Save Profile"}
        onClick={onClickButton}
        disabled={updating}
      />
    </div>
  );
}
