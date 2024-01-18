import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SampleStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useSampleStore = create<SampleStore>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
      }),
      { name: "sample-store", storage: createJSONStorage(() => AsyncStorage) }
    )
  )
);

export default useSampleStore;
