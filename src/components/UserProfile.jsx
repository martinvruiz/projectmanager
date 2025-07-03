import Button from "@/components/Button";
import ChangeName from "@/components/ChangeName";
import Modal from "@/components/Modal";
import Stadistics from "@/components/Stadistics";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { useStadistics } from "@/hooks/useStadistics";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function UserProfile() {
  const { profile, loading, updateProfile } = useProfile();
  const { logOut } = useAuth();
  const [name, setName] = useState("");
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const stadistics = useStadistics();

  useEffect(() => {
    if (profile?.full_name) {
      setName(profile.full_name);
    }
  }, [profile]);

  if (loading) return <p className="p-4">Loading...</p>;

  const handleUpdateProfile = async () => {
    if (name.trim() === "") {
      alert("Name cannot be empty");
      return;
    }
    setUpdating(true);
    try {
      await updateProfile(name);
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Error updating profile");
    }
    setUpdating(false);
    setModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      layout
      className="min-h-screen flex flex-col items-center px-4 py-6 pb-24"
    >
      <header className="w-full max-w-md mb-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-lg p-8 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-2">
          Welcome,{" "}
          <span className="text-yellow-300">
            {profile?.full_name || "Usuario"}
          </span>
          !
        </h2>
        <p className="text-indigo-100 font-medium">
          Created at:{" "}
          <span className="underline">
            {profile ? new Date(profile.created_at).toLocaleDateString() : "—"}
          </span>
        </p>
      </header>

      <section className="bg-white max-w-md w-full rounded-3xl shadow-md p-8 text-center">
        <p className="text-gray-700 mb-6">
          {profile?.full_name
            ? "Here you can track your tasks and projects progress."
            : "Please complete your profile by entering your full name."}
        </p>

        <div className="mb-8">
          <Stadistics stadistics={stadistics} />
        </div>
        <div className="flex flex-col gap-4 md:justify-center">
          <Button
            title="Change Name"
            onClick={() => setModalOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md px-6 py-3 transition"
          />
          <Button
            title="Log Out"
            onClick={() => logOut()}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-xl shadow-md px-6 py-3 transition"
          />
        </div>

        {message && (
          <p
            className={`mt-6 font-semibold ${
              message.includes("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ChangeName
          name={name}
          onChange={(e) => setName(e.target.value)}
          updating={updating}
          onClickButton={() => handleUpdateProfile()}
        />
      </Modal>
    </motion.div>
  );
}
