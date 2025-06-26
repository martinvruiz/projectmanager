import Button from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { useState, useEffect } from "react";

export default function UserProfile() {
  const { profile, loading, updateProfile } = useProfile();
  const { logOut } = useAuth();
  const [name, setName] = useState("");
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState(null);

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
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4">
      <h3 className="md:text-2xl">
        Bienvenido{" "}
        <span className="font-bold">{profile.full_name || "Usuario"}</span>!
      </h3>
      <p className="py-2 text-gray-700">
        Created at:{" "}
        <span className="font-semibold">
          {new Date(profile.created_at).toLocaleDateString()}
        </span>
      </p>

      <p className="mb-6">
        {profile.full_name
          ? "This is your profile, here you can track your tasks and projects."
          : "Please complete your profile by entering your full name."}
      </p>

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
          onChange={(e) => setName(e.target.value)}
          disabled={updating}
        />
        <Button
          title={updating ? "Updating..." : "Save Profile"}
          onClick={handleUpdateProfile}
          disabled={updating}
        />
      </div>

      <div className="py-2">
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
    </div>
  );
}
