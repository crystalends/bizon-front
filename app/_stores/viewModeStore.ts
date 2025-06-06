import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import ViewMode from "../_types/ViewMode";

interface ViewModeState {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const useViewModeStore = create<ViewModeState>()(
  persist(
    (set) => ({
      viewMode: "list",
      setViewMode: (mode) => set({ viewMode: mode }),
    }),
    {
      name: "view-mode-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
