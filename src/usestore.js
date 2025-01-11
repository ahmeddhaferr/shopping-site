import { create } from "zustand";

export const useStore = create((set) => ({
  wishListItem: [],
  setWishListItem: (wishListItem) => set({ wishListItem }),
  cartItem: [],
  setCartItem: (cartItem) => set({ cartItem }),
}));
