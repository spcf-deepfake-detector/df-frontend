import { create } from "zustand";
import axiosInstance from "../global/axios";

export const useDeepFakeStore = create((set) => ({
  data: null,

  analyzeDeepfake: async (payload) => {
    // The `payload` must be a FormData object
    const url = `detector/upload-video/`;

    try {
      const response = await axiosInstance.post(url, payload);
      set({ data: response.data });
    } catch (error) {
      console.error(`Error on analyzing DeepFake: `, error);
    }
  },

  resetDeepfake: () => {
    set({ data: null });
  },
}));
