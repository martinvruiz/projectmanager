import { toast } from "react-toastify";

export const toastConfirmDelete = (taskName, onConfirm) => {
  const ToastContent = ({ closeToast }) => (
    <div className="flex flex-col gap-3 p-2">
      <p className="text-center">
        Delete <strong>{taskName}</strong>?
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => {
            onConfirm();
            closeToast();
          }}
          className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
        >
          Yes
        </button>
        <button
          onClick={closeToast}
          className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400 transition"
        >
          No
        </button>
      </div>
    </div>
  );

  toast.info(<ToastContent />, {
    position: "top-center",
    autoClose: false,
    closeOnClick: false,
    closeButton: false,
    draggable: false,
    pauseOnHover: false,
    className:
      "bg-white text-gray-800 rounded-lg shadow-md w-full max-w-[90vw] sm:max-w-md mt-2",
  });
};
