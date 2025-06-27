import { supabase } from "@/lib/supabaseClient";
import { useStore } from "@/stores/useStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchProfile = useStore((state) => state.fetchProfile);
  const fetchProjects = useStore((state) => state.fetchProjects);
  const resetStore = useStore((state) => state.resetStore);

  const signUp = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
      } else {
        router.push("/account");
      }
    } catch (err) {
      console.error("error signing up:", err);
    }
  };

  const logIn = async (email, password) => {
    setLoading(true);
    setError(null);
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      const userId = data.user?.id;
      if (userId) {
        const { error: errorMessage } = await supabase.from("profiles").upsert({
          id: userId,
          email: email,
        });

        if (errorMessage) {
          console.error("error inserting profile", errorMessage.message);
          setError(errorMessage.message);
        }
      }
      await fetchProfile(userId);
      await fetchProjects();
      router.push("/account");
    }
  };

  const logOut = async () => {
    await supabase.auth.signOut();
    resetStore();
    router.push("/");
  };

  return { signUp, logIn, logOut, loading, error };
}
