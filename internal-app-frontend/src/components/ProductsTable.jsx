import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import dressApiService from '../apiServices/dress.apiServices';

const ProductsTable = () => {

    const [products, setProducts] = useState([]);

    async function getProducts () {
        const res = await dressApiService.fetchDresses();
        console.log(res.data);
        if (res.status) {
            setProducts(res.data);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    if (!products) return;

  return (
    <>
        <div className="">
            <table className="border-collapse table-auto w-full mx-auto mt-5">
                <thead>
                <tr className="bg-gray-300">
                    <th className="border-b font-medium text-center text-slate-600 p-1 pt-5 pb-2 rounded-tl-md">Product ID</th>
                    <th className="border-b font-medium text-center text-slate-600 p-1 pt-5 pb-2">Product Title</th>
                    <th className="border-b font-medium text-center text-slate-600 p-1 pt-5 pb-2 rounded-tr-md">Options</th>
                </tr>
                </thead>
                <tbody className="divide-y">
                {products.map((product) => (
                    // console.log(product)
                    <tr key={product._id} className='bg-white'>
                    <td className="text-center p-2 font-semibold w-[22%]">{product._id}</td>
                    <td className="text-center p-2 w-3/5">{product.title}</td>
                    <td className='w-[18%]'>
                        <table className="w-full px-2 mx-auto">
                        <tbody>
                            <tr className="flex justify-center">
                            <td><Link to={`/productDetails/${product._id}`} className="border rounded-md shadow-sm hover:border-indigo-500 active:bg-indigo-700 active:text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 px-2 py-1 font-semibold text-sm mx-[1px]">View Details</Link></td>
                            <td><Link to={``} onClick={()=>deleteProduct(product.id)} className="border rounded-md shadow-sm hover:border-rose-500 active:bg-rose-700 active:text-white focus:outline-none focus:ring-2 focus:ring-rose-300 px-2 py-1 font-semibold text-sm mx-[1px]">Delete</Link></td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                    </tr>
                ))}
                <tr className="bg-gray-300">
                    <td className="border-t w-1 rounded-bl-md">&nbsp;</td>
                    <td className="border-t w-1">&nbsp;</td>
                    <td className="border-t w-1 rounded-br-md">&nbsp;</td>
                </tr>
                </tbody>
            </table> 
        </div>
    </>
  )
}

export default ProductsTable