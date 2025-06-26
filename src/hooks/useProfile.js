import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export function useProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    const { data: userData } = await supabase.auth.getUser();
    const userId = userData.user?.id;

    if (!userId) return;

    const { data, error } = await supabase
      .from("profiles")
      .select("")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Error fetching profile", error);
    } else {
      setProfile(data);
    }

    setLoading(false);
  };

  const updateProfile = async (fullName) => {
    try {
      const { data, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;

      const userId = data.user?.id;
      const userEmail = data.user?.email;
      if (!userId || !userEmail) throw new Error("User not authenticated");

      const { error: upsertError } = await supabase.from("profiles").upsert({
        id: userId,
        email: userEmail,
        full_name: fullName,
      });

      if (upsertError) throw upsertError;

      setProfile((prev) => ({ ...prev, full_name: fullName }));
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { profile, loading, updateProfile };
}
