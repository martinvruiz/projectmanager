export default function Button({ title, onClick }) {
  return (
    <button
      className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-200 cursor-pointer min-w-3xs"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
