import Link from "next/link";
import Button from "./Button";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const { logIn, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
    if (!email || !password) {
      toast.warn("email or password missing");
    }
    logIn(email, password);
    if (error) {
      toast.warn(error);
      return;
    }
  };
  return (
    <div className="h-full flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          Log in
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="border border-gray-300 rounded-xl px-4 py-2 w-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="border border-gray-300 rounded-xl px-4 py-2 w-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex flex-col justify-center gap-4 pt-4">
            <Button title="Log in" onClick={handleLogIn} />
            <Link href="/account/signup" className="w-full md:w-auto">
              <Button title="Sign up" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
