import { SahwaUser } from "@/constants";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface IUserStore {
  user: SahwaUser | null;
  setUser: (user: SahwaUser | null) => void;
}

export const useUserStore = create<IUserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user: SahwaUser | null) => set({ user }),
      }),
      {
        name: "user-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
