import React, { useContext } from "react";
import { productsContext } from "../context/ProductsProvider";
import ProductCard from "../components/ProductCard";

const TopRated = () => {
  const { data: { products, loading, error } } = useContext(productsContext)
  let content;

  if (loading) {
    content = <p className="h-screen text-center mt-12">Loading ......</p>
  }
  else if (error) {
    content = <p className="h-screen text-center mt-12">Something went wrong !!!</p>
  }
  else if (!loading && !error && products.length > 0) {
    content =
      products?.filter(product => product.rating >= 4)
        .map((product, index) => <ProductCard key={index} product={product}></ProductCard>)

  }

  else if (!loading && !error && !products.length > 0) {
    content = <p className="h-screen text-center mt-12">No products available</p>
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default TopRated;
