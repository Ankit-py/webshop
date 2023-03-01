import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
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
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="2">
                  <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
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
                    key={product}
                  >
                    <Link href={`/products/${product.id}`}>
                        <Image
                          className="object-contain w-full h-80"
                          src={product.image}
                          alt={product.title}
                          width={100}
                          height={250}
                        />
                    </Link>

                    <div className="p-4">
                      <h4 className="text-xl text-black">
                        {product.title.substring(0, 12)}
                      </h4>
                      <p className="mb-2 leading-normal font-bold">
                        ₹{product.price}
                      </p>
                      <div className="flex mx-4">
                        <button className="p-2 text-sm shadow-lg border border-black rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black">
                          Add to Cart
                        </button>
                        <button className="p-2 border text-sm shadow-lg border-black rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black">
                          Add to Wishlist
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