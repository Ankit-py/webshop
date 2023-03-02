import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";
import { wishlistReducer } from "./wishlist.slice";

const reducer = {
  cart: cartReducer,
  wishlist: wishlistReducer,
};

const store = configureStore({
  reducer,
});

export default store;