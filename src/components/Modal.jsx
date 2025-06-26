"use client";

export default function Modal({ children, onClose, isOpen }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-45"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 relative w-5/6 md:w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-grey-500 hover:text-gray-700 float-right font-bold"
          onClick={onClose}
        >
          X
        </button>
        <div className="py-4">{children}</div>
      </div>
    </div>
  );
}
