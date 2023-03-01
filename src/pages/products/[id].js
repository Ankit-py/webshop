import { useRouter } from "next/router";
import Image from "next/image";
import Header from '../../components/Header';

const Product = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />

      <div className="flex flex-wrap justify-evenly m-4 p-4 border border-black rounded-lg shadow-xl">
        <Image
          className="justify-start"
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
        />
        <div>
          <h1 className="text-3xl font-semibold mt-4 lg:mt-20 text-center">
            {product.title}
          </h1>
          <p className="text-center text-grey mt-2">{product.description}</p>
          <p className="text-xl font-bold text-center mt-3">₹{product.price}</p>
        </div>
        <div className="flex flex-wrap mt-6">
          <button className="p-2 text-sm shadow-lg border border-black rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black">
            Add to Cart
          </button>
          <button className="p-2 border text-sm shadow-lg border-black rounded-lg font-semibold mx-2 mb-2 hover:text-white hover:bg-black">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default Product;
