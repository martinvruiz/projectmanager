"use client";

import { useStore } from "@/stores/useStore";

export default function Initializer() {
  const initializeProfile = useStore((state) => state.initializeProfile);

  initializeProfile();

  return null;
}
