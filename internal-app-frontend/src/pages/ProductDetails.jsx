import React, { useEffect, useState } from 'react'
import dressApiService from '../apiServices/dress.apiServices';
import { Link, useParams } from 'react-router-dom';
import parser from 'html-react-parser';

const ProductDetails = () => {

    const { id } = useParams();
    const [ product, setProduct ] = useState(null);

    async function getProductDetails(id) {
        const res = await dressApiService.fetchDressDetails(id);
        if (res.status) {
            setProduct(res.data);
        }
    }

    useEffect(() => {
        getProductDetails(id);
    }, [id]);
    console.log(product);

    if (!product) return;

  return (
    <>
        {product && (
            <div className='flex my-2'>
                <div className='w-3/5 flex flex-wrap justify-center px-2'>
                    <div className='flex flex-wrap w-full mx-auto'>
                        {product.imageUrls.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt="" className='w-[45%] m-1'/>
                        ))}
                    </div>
                </div>
                <div className='w-2/5 pe-2'>
                    <div className='font-semibold mt-3'>Product ID: #{product._id}</div>
                    <div className="border my-3" />
                    <div className='font-semibold text-xl mt-2'>{product.designer}</div>
                    <div className='font-light text-2xl mt-2'>{product.title}</div>
                    <div className="border my-3" />
                    <div className='font-bold text-2xl'>&#8377;{product.price}<span className='text-sm font-semibold text-gray-500'>&nbsp;&nbsp;&nbsp;inclusive of all taxes</span></div>
                    <div className='block mt-2 font-semibold'>Sizes Available: </div>
                    <div className="flex flex-wrap">
                        {product.sizes.map((size, index) => (
                            <div key={index} className='border rounded mx-2 my-1 px-2 py-1 text-sm'>{size}</div>
                        ))}
                    </div>
                    <div className="block mt-2 font-semibold">Color(s): </div>
                    <div className="flex flex-wrap">
                        {product.colors.map((color, index) => (
                            <div key={index} className='border rounded mx-2 my-1 px-2 py-1 text-sm capitalize'>{color}</div>
                        ))}
                    </div>
                    <div className="border my-3" />
                    <div className="block mt-2 font-semibold text-xl">Product Description: </div>
                    {parser(product.description)}
                    <div className="block mt-2 font-semibold">Material: </div>
                    {parser(product.material)}
                    <div className="border my-3" />
                    <div className="block mt-2 font-semibold text-xl">Inventory: </div>
                    <div className="block mt-2 font-semibold">Total Quantity:&nbsp;<span className='font-medium text-gray-500'>{product.total_quantity}</span></div>
                    <div className="block mt-2 font-semibold">Available Quantity:&nbsp;<span className='font-medium text-gray-500'>{product.available_quantity}</span></div>
                    <div className="block mt-2 font-semibold">Availability:&nbsp;<span className='font-medium text-gray-500'>{String(product.availability)}</span></div>
                    <div className="text-end mt-6">
                        <Link to={`/updateProduct/${product._id}`} className="border rounded-md shadow-sm hover:border-indigo-500 active:bg-indigo-700 active:text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 px-2 py-1 font-semibold text-sm mx-1">Update Product Details</Link>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default ProductDetails