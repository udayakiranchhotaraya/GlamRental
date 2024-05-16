import React from "react";
import { useState } from "react";

const AddressSelector = ({ children, addresses, setAddressId }) => {

  return (
    <div
      className="relative w-full max-w-full border rounded shadow-md border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex={"-1"}
    >
      <fieldset className="space-y-4">
        <legend className="mx-auto">Addresses</legend>
        {addresses.map((address) => (
          <div key={address._id}>
            <label className="flex justify-between gap-4 cursor-pointer rounded-lg border border-gray-100 bg-white px-2 py-1 mx-1 text-sm shadow-sm hover:border-yellow-500 has-[:checked]:border-yellow-500 has-[:checked]:ring-1 has-[:checked]:ring-yellow-400 capitalize">
              <div className="px-3 py-2">
                <p className="text-gray-700 text-sm font-semibold">{address.name}</p>
                <p className="text-gray-700 text-sm font-medium">{address.addressLine1}, {address.addressLine2}, {address.addressLine3}</p>
                <p className="text-gray-700 text-sm font-medium">{address.city}</p>
                <p className="text-gray-700 text-sm font-medium">{address.state}</p>
                <p className="text-gray-700 text-sm font-medium">{address.mobile}</p>
              </div>
              <input
                type="radio"
                name="address"
                id=""
                value={address._id}
                // checked={String(addressId) === String(address._id)}
                onChange={(e) => setAddressId(e.currentTarget.value)}
                className="size-5 mt-2 me-2 border-gray-300 text-yellow-500"
              />
            </label>
          </div>
        ))}
      </fieldset>
      <div className=" mt-7 space-y-5 text-center">
      {children}
      </div>
    </div>
  );
};

export default AddressSelector;
