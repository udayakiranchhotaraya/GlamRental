import React from "react";

const OrderSummary = ({ order }) => {
  console.log(order);

  return (
    <div
      className="relative w-full max-w-full border rounded shadow-md border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex={"-1"}
    >
      {order && (
        <div className="w-full h-full">
          <h2 className="text-2xl/loose font-bold mb-3">
            Order placed successfully!!
          </h2>
          <ul className="space-y-4">
            {order.items.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <img
                  src={`${item.thumbnail}`}
                  alt=""
                  className="size-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-gray-900">{item.dress_title}</h3>

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
          <div className="mt-5 space-y-5 text-center">
            <div className="border" />
            <div className="flex mb-10 px-3 justify-between text-sm font-semibold">
              <div className="mx-4">
                <h2>Total Amount : </h2>
              </div>
              <div className="mx-4">
                <h2>{order.total_price}</h2>
              </div>
            </div>
            <div className="border" />
          </div>
          <label className="flex justify-between gap-4 rounded-lg border border-gray-100 bg-inherit px-2 py-1 mt-4 text-sm shadow-sm">
            <div className="px-3 py-2">
              <h6 className="text-base/loose font-semibold">Address</h6>
              <p className="text-gray-700 text-sm font-semibold">
                {order.address.name}
              </p>
              <p className="text-gray-700 text-sm font-medium">
                {order.address.addressLine1}, {order.address.addressLine2},{" "}
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
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
