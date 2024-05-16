import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userApiService from '../apiServices/user.apiServices';

const OrdersTable = () => {

    const [orders, setOrders] = useState([]);

    async function getOrders () {
        const res = await userApiService.getOrders();
        console.log(res.data);
        if (res.status) {
            setOrders(res.data);
        }
    }

    useEffect(() => {
        getOrders();
    }, []);

    if (!orders) return;

  return (
    <>
        <div className="">
            <table className="border-collapse table-auto w-[70%] mx-auto mt-5">
                <thead>
                <tr className="bg-gray-300">
                    <th className="border-b font-medium text-center text-slate-600 p-1 pt-5 pb-2 rounded-tl-md">Order ID</th>
                    <th className="border-b font-medium text-center text-slate-600 p-1 pt-5 pb-2">Order Status</th>
                    <th className="border-b font-medium text-center text-slate-600 p-1 pt-5 pb-2 rounded-tr-md">Options</th>
                </tr>
                </thead>
                <tbody className="divide-y">
                {orders.map((order) => (
                    // console.log(order)
                    <tr key={order._id} className='bg-white'>
                    <td className="text-center p-2 font-semibold">{order._id}</td>
                    <td className="text-center p-2">{order.status}</td>
                    <td className=''>
                        <table className="w-full px-2 mx-auto">
                        <tbody>
                            <tr className="flex justify-center">
                            <td><Link to={`/orderDetails/${order._id}`} className="border rounded-md shadow-sm hover:border-indigo-500 active:bg-indigo-700 active:text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 px-2 py-1 font-semibold text-sm mx-[1px]">View Details</Link></td>
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

export default OrdersTable