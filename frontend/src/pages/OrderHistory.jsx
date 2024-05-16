import React from "react";
import { useState } from "react";
import orderApiService from "../apiServices/order.apiServices";
import { useEffect } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  async function getPastOrders() {
    const res = await orderApiService.viewOrders();
    if (res.status) {
      setOrders(res.data.orders);
    }
  }

  useEffect(() => {
    getPastOrders();
  }, []);
  console.log(orders);

  if (!orders) return;

  return (
    <>
      <div className="w-full h-full flex justify-center items-center mb-20">
        <div className="h-full w-full">
          <div className="block w-full md:w-[45%] mx-auto mt-6 bg-inherit">
            <div
              className="w-full max-w-full border rounded shadow-md border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
              aria-modal="true"
              role="dialog"
              tabIndex={"-1"}
            >
              <div className="w-full h-full">
                <h2 className="text-2xl/loose font-bold mb-3">Order History</h2>
                {orders && (
                  <ul className="space-y-4">
                    {orders.map((order) => (
                      <li
                        key={order._id}
                        className="border border-gray-400 rounded p-3 text-sm"
                      >
                        <h5 className="font-semibold mb-1">
                          Order ID: #{order._id}
                        </h5>
                        <div className="border" />
                        <ul className="space-y-4 mt-4">
                          {order.items.map((item) => (
                            <li
                              key={item.id}
                              className="flex items-center gap-4"
                            >
                              <img
                                src={`${item.thumbnail}`}
                                alt=""
                                className="size-16 rounded object-cover"
                              />
                              <div>
                                <h3 className="text-sm text-gray-900">
                                  {item.dress_title}
                                </h3>

                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                  <div>
                                    <dt className="inline">Price:</dt>
                                    <dd className="inline">{item.price}</dd>
                                  </div>

                                  <div>
                                    <dt className="inline">Quantity:</dt>
                                    <dd className="inline">{item.quantity}</dd>
                                  </div>
                                </dl>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 space-y-3 text-center">
                          <div className="border" />
                          <div className="flex px-3 justify-between text-sm font-semibold">
                            <div className="mx-4">
                              <h2>Total Amount : </h2>
                            </div>
                            <div className="mx-4">
                              <h2>{order.total_price}</h2>
                            </div>
                          </div>
                          <div className="border" />
                        </div>
                        <label className="flex justify-between gap-4 bg-inherit px-3 py-1 text-sm">
                          <div className="px-3">
                            <h6 className="text-base/loose font-semibold">
                              Address
                            </h6>
                            <p className="text-gray-700 text-sm font-semibold">
                              {order.address.name}
                            </p>
                            <p className="text-gray-700 text-sm font-medium">
                              {order.address.addressLine1},{" "}
                              {order.address.addressLine2},{" "}
                              {order.address.addressLine3}
                            </p>
                            <p className="text-gray-700 text-sm font-medium">
                              {order.address.city}
                            </p>
                            <p className="text-gray-700 text-sm font-medium">
                              {order.address.state}
                            </p>
                            <p className="text-gray-700 text-sm font-medium">
                              {order.address.mobile}
                            </p>
                          </div>
                        </label>
                        <div className="border" />
                        <p className="text-xs my-1.5 px-4 font-semibold text-right">Order Status: {order.status}</p>
                        <div className="border" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
