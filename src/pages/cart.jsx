import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart, } from "../../redux/cart.slice";
import Head from "next/head";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div>
      <Head>
        <title>WebShop | Cart</title>
      </Head>
      {cart.length === 0 ? (
        <h1 className="text-3xl font-bold mb-64 mt-20 text-center justify-center h-screen">
          Your Cart is Empty !!!
        </h1>
      ) : (
        <>
          <div class="bg-white pt-10">
            <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div class="rounded-lg md:w-2/3">
                {cart.map((item) => (
                  <div
                    class="justify-between mb-6 rounded-lg bg-white border border-black p-6 shadow-lg sm:flex sm:justify-start"
                    key={item}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      class="w-40 rounded-lg"
                    />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div class="mt-5 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-900">
                          {item.title}
                        </h2>
                        <p class="mt-2 text-xs text-gray-700">
                          {item.description.substring(0, 120)}...
                        </p>
                      </div>
                      <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                          <button
                            onClick={() => dispatch(decrementQuantity(item.id))}
                            class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-[#9400D3] hover:text-blue-50"
                          >
                            {" "}
                            -{" "}
                          </button>
                          <input
                            class="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value="1"
                          />
                          <button
                            onClick={() => dispatch(incrementQuantity(item.id))}
                            class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-[#9400D3] hover:text-blue-50"
                          >
                            {" "}
                            +{" "}
                          </button>
                        </div>
                        <div class="flex items-center space-x-4">
                          <p class="text-sm">${item.price}</p>
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div class="mt-6 mb-6 h-full rounded-lg border border-black bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div class="mb-2 flex justify-between">
                  <p class="text-gray-700">Subtotal</p>
                  <p class="text-gray-700">${getTotalPrice()}</p>
                </div>
                <div class="flex justify-between">
                  <p class="text-gray-700">Shipping</p>
                  <p class="text-gray-700">$0.00</p>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between">
                  <p class="text-lg font-bold">Total</p>
                  <div class="">
                    <p class="mb-1 text-lg font-bold">${getTotalPrice()} USD</p>
                    <p class="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <button class="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-white hover:bg-[#9400D3]">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
