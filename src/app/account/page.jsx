"use client";
import Navbar from "@/components/Navbar";
import { useStore } from "@/stores/useStore";
import Link from "next/link";
import UserProfile from "../pages/UserProfile";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import Button from "@/components/Button";
import { showSuccessToast } from "@/toasts/showSuccesToast";
import { toast } from "react-toastify";

export default function Account() {
  const user = useStore((state) => state.profile);
  const { logIn, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
    if (!email || !password) {
      alert("email or password missing");
    }
    logIn(email, password);
    if (error) {
      toast.warn(error);
      return;
    }
  };
  return (
    <div className="w-full min-h-screen bg-gray-200 text-gray-800">
      <div className="md:pt-24 flex flex-col items-center w-full">
        {user ? (
          <UserProfile />
        ) : (
          <div className="w-full min-h-screen bg-gray-200 text-gray-800">
            <div className="flex flex-col items-center w-full">
              <h3 className="md:text-3xl text-xl font-bold">Log in</h3>
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  className="border border-gray-300 bg-white rounded px-3 py-2 w-full my-2 min-w-xs"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="border border-gray-300 bg-white rounded px-3 py-2 w-full my-2 min-w-xs"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex gap-2">
                  <Button title={"Log in"} onClick={() => handleLogIn()} />
                  <Link href={"/account/signup"}>
                    <Button title={"Sign up"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
