import React, { useState, useEffect} from 'react';
import Image from 'next/image';

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
          <>
            Loading...
          </>
        );
    }

    const ShowProducts = () => {
        return (
          <>
            <div>
              <button className="p-2 border border-black rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black">
                All Products
              </button>
              <button className="p-2 border border-black rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black">
                Men`s Section
              </button>
              <button className="p-2 border border-black rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black">
                Women`s Section
              </button>
              <button className="p-2 border border-black rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black">
                Electronic Section
              </button>
              <button className="p-2 border border-black rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black">
                Jwellery Section
              </button>
            </div>

            <>
              <div className="grid gap-2 lg:grid-cols-4 mt-6 mb-10 ml-4 mr-4">
                {filter.map((product) => (
                  <div
                    className="w-full rounded-lg shadow-md lg:max-w-sm mx-2 mb-2 p-3 border border-black"
                    key={0}
                  >
                    <Image
                      className="object-fit w-full h-80"
                      src={product.image}
                      alt={product.title}
                      width={100}
                      height={100}
                    />
                    <div className="p-4">
                      <h4 className="text-xl font-semibold text-black">
                        {product.title}
                      </h4>
                      <p className="mb-2 leading-normal">₹{product.price}</p>
                      <div className="flex mx-4">
                        <button className="p-2 border border-black rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black">
                          Add to Cart
                        </button>
                        <button className="p-2 border border-black rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black">
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