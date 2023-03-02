import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/wishlist.slice";
import { addToCart } from "../../redux/cart.slice";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return wishlist.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="">
      {wishlist.length === 0 ? (
        <h1 className="text-3xl font-bold text-center justify-center mt-6">
          Your Wishlist is Empty!
        </h1>
      ) : (
        <>
          <div className="container m-4 lg:m-12 border border-black p-2 lg:p-4 rounded-lg">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Wishlist</h1>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
            </div>
            {wishlist.map((item) => (
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
                        <div className="flex-inline flex-wrap">
                          <button
                            onClick={() =>
                              dispatch(removeFromWishlist(item.id))
                            }
                            className="hover:bg-[#9400D3] mr-3 hover:text-white border border-black rounded-lg p-1 w-fit"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <span class="text-center w-1/5 font-semibold text-sm">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WishlistPage;
