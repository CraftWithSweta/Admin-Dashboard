import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const appStore = persist(
  (set) => ({
    dopen: true,
    updateOpen: (dopen) => set({ dopen }),
  }),
  {
    name: 'my-app-store', // name of the item in storage (must be unique)
  }
);

export const useAppStore = create(appStore);
