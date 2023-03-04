import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/wishlist.slice";
import Head from "next/head";

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
    <div className="m-4 lg:m-12">
      <Head>
        <title>WebShop | Cart</title>
      </Head>
      {wishlist.length === 0 ? (
        <h1 className="text-3xl font-bold text-center justify-center mt-20 mb-64">
          Your Wishlist is Empty!
        </h1>
      ) : (
        <>
          <div className="container border border-black p-2 lg:p-4 rounded-lg">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Wishlist</h1>
            </div>
            {wishlist.map((item) => (
              <div key={item}>
                <div className="bg-white px-10 py-10">
                  <div className="flex items-center hover:bg-white-mx-8 px-3 py-5">
                    <div className="flex w-2/5">
                      <div className="w-2000">
                        <Image
                          src={item.image}
                          alt={item.title}
                          height={200}
                          width={200}
                        />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{item.title}</span>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          {item.price}
                        </span>
                        <span className="text-[#808080] text-sm">
                          {item.description.substring(0, 80)}
                        </span>
                        <div className="flex-inline flex-wrap mt-6">
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
