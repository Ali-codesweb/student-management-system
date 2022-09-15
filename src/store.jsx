import create from "zustand";

export const mainStore = create((set) => ({
  user: {},
  token: "",
  setUser: (data) => set((state) => ({ user: data })),
  getUserFromLocalStorage: () =>
    set((state) => ({
      token: localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : "",
    })),
}));
