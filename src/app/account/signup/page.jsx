"use client";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { useStore } from "@/stores/useStore";
import { showSuccessToast } from "@/toasts/showSuccesToast";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignUp() {
  const { signUp, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!email || !password) {
      alert("password o email missing");
    }
    signUp(email, password);
    if (error) {
      toast.warning(error);
    } else {
      showSuccessToast("Check your inbox or spam for confirmation link");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 text-gray-800">
      <div className="md:pt-24 pt-8 flex flex-col items-center w-full">
        <h3 className="md:text-3xl font-bold">Sign up</h3>
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="border border-gray-300 bg-white rounded px-3 py-2 w-full my-2 md:min-w-sm"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border border-gray-300 bg-white rounded px-3 py-2 w-full my-2 md:min-w-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="border border-gray-300 bg-white rounded px-3 py-2 w-full my-2 md:min-w-sm"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="flex gap-2">
            <Link href={"/account"}>
              <Button title={"Log in"} />
            </Link>
            <Button title={"Sign up"} onClick={() => handleSignUp()} />
          </div>
        </div>
      </div>
    </div>
  );
}
