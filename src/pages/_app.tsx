import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { wishlistReducer } from "../../redux/wishlist.slice";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../../redux/cart.slice";


const reducer = {
  cart: cartReducer,
  wishlist: wishlistReducer,
};

const updatedStore = configureStore({
  reducer,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={updatedStore}>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
