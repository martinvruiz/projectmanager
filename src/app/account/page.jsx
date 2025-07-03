"use client";
import { useStore } from "@/stores/useStore";
import UserProfile from "../../components/UserProfile";
import Login from "@/components/Login";
import { AnimatePresence, motion } from "framer-motion";

export default function Account() {
  const user = useStore((state) => state.profile);
  return (
    <div className="w-full min-h-screen bg-gray-200 text-gray-800">
      <div className="md:pt-24 flex flex-col items-center justify-start min-h-screen">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            layout
            className="w-full flex flex-col items-center"
          >
            {user ? <UserProfile /> : <Login />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
