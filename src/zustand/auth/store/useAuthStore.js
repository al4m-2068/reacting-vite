import { create } from "zustand";
import { persist } from "zustand/middleware";

const MOCK_USERS = [
  {
    id: 1,
    email: 'fulan@gmail.com',
    name: 'Fulan',
    role: 'user',
    password: '123',
  },
  {
    id: 2, // Fixed: ID kedua dibuat unik
    email: 'fulano@gmail.com',
    name: 'Fulano',
    role: 'admin',
    password: '123',
  },
];

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      error: null,
      count: 0,

      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),

      login: (email, password) => {
        const foundUser = MOCK_USERS.find(
          (u) => u.email === email && u.password === password
        );

        if (foundUser) {
          const { password: _, ...userData } = foundUser;
          set({
            user: userData,
            error: null,
          });
          return true;
        } else {
          set({ error: 'Email atau Password salah!' });
          return false;
        }
      },

      // Fixed: logout harus menggunakan set()
      logout: () => set({ user: null, error: null }),

      // Fixed: Menggunakan ...state.user, bukan ...state
      setUsername: (newUsername) =>
        set((state) => ({
          user: state.user ? { ...state.user, name: newUsername } : null,
        })),

      setRole: (newRole) =>
        set((state) => ({
          user: state.user ? { ...state.user, role: newRole } : null,
        })),

      // Helper tambahan untuk pembaruan profil secara fleksibel
      updateUser: (updatedFields) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updatedFields } : null,
        })),
    }),
    {
      name: "auth-store",
    }
  )
);

// create() used to create Zustand store
// (set) is a param used to bridge state change logic