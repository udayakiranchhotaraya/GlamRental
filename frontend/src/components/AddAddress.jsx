import React from "react";
import { useRef } from "react";
import userApiService from "../apiServices/user.apiServices";

const AddAddress = () => {

  const nameRef = useRef();
  const mobileRef = useRef();
  const addressLine1Ref = useRef();
  const addressLine2Ref = useRef();
  const addressLine3Ref = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const pinRef = useRef();

  const handleNewAddressSubmit = async (event) => {
    event.preventDefault();
    const newAddress = {
      name: nameRef.current.value,
      mobile: mobileRef.current.value,
      addressLine1: addressLine1Ref.current.value,
      addressLine2: addressLine2Ref.current.value,
      addressLine3: addressLine3Ref.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      pin: pinRef.current.value,
    };
    console.log(newAddress);

    const res = await userApiService.newAddress(newAddress);
    if (res.status) {
        alert('new address added successfully');
    }
  };

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
              <form action="" className="w-[75%] mx-auto">
                <h2 className="text-2xl/loose font-light">
                  Enter new address details
                </h2>
                <br />
                <label className="block mb-2">
                  <input
                    ref={nameRef}
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                    placeholder="Name"
                    required
                  />
                </label>
                <label className="block mb-2">
                  <input
                    ref={mobileRef}
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                    placeholder="Mobile"
                    required
                  />
                </label>
                <label className="block mb-2">
                  <input
                    ref={addressLine1Ref}
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                    placeholder="Address Line #1"
                    required
                  />
                </label>
                <label className="block mb-2">
                  <input
                    ref={addressLine2Ref}
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                    placeholder="Address Line #2"
                    // required
                  />
                </label>
                <label className="block mb-2">
                  <input
                    ref={addressLine3Ref}
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                    placeholder="Address Line #3"
                    // required
                  />
                </label>
                <label className="block mb-2">
                  <input
                    ref={cityRef}
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                    placeholder="City"
                    required
                  />
                </label>
                <label className="block mb-2">
                  <input
                    ref={stateRef}
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                    placeholder="State"
                    required
                  />
                </label>
                <label className="block mb-2">
                  <input
                    ref={pinRef}
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                    placeholder="PIN"
                    required
                  />
                </label>
                <input
                  type="submit"
                  value={`Add`}
                  id="submit-form"
                  onClick={handleNewAddressSubmit}
                  className="block border rounded-md shadow-sm bg-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 cursor-pointer active:bg-yellow-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 px-2 py-1 font-semibold text-sm mx-auto mt-5"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAddress;
