import { toast } from "react-toastify";

export const showSuccessToast = (message) => {
  toast.success(message, {
    autoClose: 2500,
    closeButton: true,
    className: "bg-green-500 text-white font-semibold px-4 py-3 rounded-md",
    progressClassName: "bg-green-200",
    pauseOnHover: false,
    pauseOnFocusLoss: false,
  });
};
