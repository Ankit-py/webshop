import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/cart.slice';


const Products = () => {

    const dispatch  = useDispatch();

    const [ data, setData ] = useState([]);
    const [ filter, setFilter ] = useState(data);
    const [ loading, setLoading ] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading (true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                // console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        } 
        getProducts();
    }, [])

    const Loading = () => {
        return (
          <div className=' flex items-center justify-center'>
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000"
            >
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)" strokeWidth="2">
                  <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </svg>
          </div>
        );
    }

    const filterProduct = (cat) => {
      const updatedList = data.filter((x)=>x.category === cat);
      setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
          <>
            <div>
              <button
                onClick={() => setFilter(data)}
                className="p-2 border border-black shadow-lg rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black"
              >
                All
              </button>
              <button
                onClick={() => filterProduct("men's clothing")}
                className="p-2 border border-black shadow-lg rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black"
              >
                Mens Clothing
              </button>
              <button
                onClick={() => filterProduct("women's clothing")}
                className="p-2 border border-black shadow-lg rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black"
              >
                Womens Clothing
              </button>
              <button
                onClick={() => filterProduct("electronics")}
                className="p-2 border border-black shadow-lg rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black"
              >
                Electronics
              </button>
              <button
                onClick={() => filterProduct("jewelery")}
                className="p-2 border border-black shadow-lg rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black"
              >
                Accessories
              </button>
            </div>

            <>
              <div className="grid gap-4 lg:grid-cols-4 m-4 p-4 ml-0 lg:ml-12">
                {filter.map((product) => (
                  <div
                    className="w-full rounded-lg shadow-md lg:max-w-sm mx-2 mb-2 p-3 border border-black bg-white shadow-xl"
                    key={product.id}
                  >
                    <Link href={`/products/${product.id}`}>
                      <Image
                        className="object-contain w-full h-80"
                        src={product.image}
                        alt={product.title}
                        width={250}
                        height={250}
                      />
                    </Link>
                    <div className="p-4">
                      <h4 className="text-xl text-black border-b border-black mb-3">
                        {product.title.substring(0, 12)}
                      </h4>
                      <p className="mb-2 leading-normal text-[#808080]">
                        {product.description.substring(0, 60)}
                      </p>
                      <p className="mb-2 leading-normal font-bold">
                        ₹{product.price}
                      </p>

                      <div className="flex flex-wrap items-center mb-6 mt-6 justify-center">
                        <div className="mb-4 lg:mb-0">
                          <button
                          onClick={() => addToWishlist(product.id)} 
                          className="flex items-center justify-center w-full h-12 p-2 mr-4 text-gray-700 border border-black lg:w-11 hover:text-gray-50 hover:bg-[#9400D3] rounded-lg hover:border-blue-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className=" bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                            </svg>
                          </button>
                        </div>
                        <button
                          onClick={()=> dispatch(addToCart(product))}
                          className="w-full px-4 py-3 text-center text-black bg-transparent border border-black hover:bg-[#9400D3] hover:text-gray-100 lg:w-1/2 rounded-xl"
                        >
                          {" "}
                          Add to cart{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          </>
        );
    }
    

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='font-semibold text-2xl text-center'>Trending Products</h1>
                </div>
            </div>
            <div className='row justify-center align-center text-center'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    </div>
  )
}

export default Products