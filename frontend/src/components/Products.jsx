import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
  return (
    <>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <li key={product._id}>
                    <Link to={`/shop/product/${product._id}`} className="group block overflow-hidden">
                    <img
                        src={product.imageUrls[0]}
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />
        
                    <div className="relative bg-transparent pt-3">
                        <h3
                        className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                        {product.title}
                        </h3>
        
                        <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>        
                        <span className="tracking-wider text-gray-900">&#8377;{product.price}</span>
                        </p>
                    </div>
                    </Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Products