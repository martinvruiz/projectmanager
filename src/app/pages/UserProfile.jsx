import Button from "@/components/Button";
import ChangeName from "@/components/ChangeName";
import Modal from "@/components/Modal";
import Stadistics from "@/components/Stadistics";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { useStadistics } from "@/hooks/useStadistics";
import { useState, useEffect } from "react";

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
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4">
      <h3 className="md:text-2xl text-xl">
        Welcome{" "}
        <span className="font-bold">{profile?.full_name || "Usuario"}</span>!
      </h3>
      <p className="py-2 text-gray-700">
        Created at:{" "}
        <span className="font-semibold">
          {new Date(profile?.created_at).toLocaleDateString()}
        </span>
      </p>

      <p className="mb-2 text-center">
        {profile?.full_name
          ? "This is your profile, here you can track your tasks and projects."
          : "Please complete your profile by entering your full name."}
      </p>
      <div>
        {profile ? (
          <div>
            <Stadistics stadistics={stadistics} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="py-2 gap-3 flex flex-col justify-center items-center">
        <Button title={"Change name"} onClick={() => setModalOpen(true)} />
        <Button title={"Log out"} onClick={() => logOut()} />
      </div>

      {message && (
        <p
          className={`mt-4 text-center ${
            message.includes("Error") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ChangeName
          name={name}
          onChange={(e) => setName(e.target.value)}
          updating={updating}
          onClickButton={() => handleUpdateProfile()}
        />
      </Modal>
    </div>
  );
}
