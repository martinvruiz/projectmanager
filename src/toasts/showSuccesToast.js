import { toast } from "react-toastify";

export const showSuccessToast = (message) => {
  toast.success(message, {
    autoClose: 700,
    closeButton: false,
    className:
      "bg-green-500 text-white font-semibold px-4 py-3 rounded-md shadow-md w-full max-w-[90vw] sm:max-w-sm",
    progressClassName: "bg-green-200",
    pauseOnHover: false,
    pauseOnFocusLoss: false,
  });
};
