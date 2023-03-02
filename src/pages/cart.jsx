import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../redux/cart.slice';

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
    <div className="">
      {cart.length === 0 ? (
        <h1 className="text-3xl font-bold text-center justify-center mt-6">Your Cart is Empty!</h1>
      ) : (
        <>
          <div className="container m-4 lg:m-12">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {cart.map((item) => (
            <div key={item}>
              <div class="bg-white px-10 py-10">
                <div class="flex items-center hover:bg-white-mx-8 px-3 py-5">
                  <div class="flex w-2/5">
                    <div class="w-2000">
                      <Image
                        src={item.image}
                        alt={item.title}
                        height={200}
                        width={200}
                      />
                    </div>
                    <div class="flex flex-col justify-between ml-4 flex-grow">
                      <span class="font-bold text-sm">{item.title}</span>
                      <span class="text-[#808080] text-sm">
                        {item.description.substring(0, 80)}
                      </span>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="hover:bg-[#9400D3] hover:text-white border border-black rounded-lg p-1 w-fit"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div class="flex justify-center w-1/5">
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +{" "}
                    </button>

                    <input
                      class="mx-2 border text-center w-8"
                      type="text"
                      value="1"
                    />

                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -{" "}
                    </button>
                  </div>
                  <span class="text-center w-1/5 font-semibold text-sm">
                    {item.price}
                  </span>
                  <span class="text-center w-1/5 font-semibold text-sm">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center m-6">
            <h2 className="text-xl font-bold">
              Grand Total: $ {getTotalPrice()}
            </h2>
            <button className="hover:bg-[#9400D3] hover:text-white border border-black rounded-lg p-3 ml-4 w-2/5">
              Checkout
            </button>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
