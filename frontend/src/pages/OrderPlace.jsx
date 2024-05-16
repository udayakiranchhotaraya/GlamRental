import React from "react";
import { AddressSelector, OrderSummary } from "../components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userApiService from "../apiServices/user.apiServices";
import orderApiService from "../apiServices/order.apiServices";

const OrderPlace = () => {
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [addressId, setAddressId] = useState("");
  const [order, setOrder] = useState(null);

  async function getAddresses() {
    const res = await userApiService.userDetails();
    setAddresses(res.data.address);
  }

  useEffect(() => {
    getAddresses();
  }, []);
  console.log(addresses);

  const handleProceedToPayment = async () => {
    setShowOrderSummary(!showOrderSummary);
    const cartId = localStorage.getItem("cartId");
    // console.log(cartId, addressId);
    if (cartId) {
      const res = await orderApiService.placeOrder(cartId, addressId);
      if (res.status) {
        setOrder(res.data?.order);
        localStorage.removeItem("cartId");
      }
    } else {
        alert('enter items to cart');
    }
  };

  if (!addresses) return;

  return (
    <>
      {addresses && (
        <div className="w-full h-full flex justify-center items-center mb-20">
          <div
            id="place-order-container"
            className="block w-full h-fit md:w-[45%] mx-auto mt-6 bg-inherit"
          >
            {!showOrderSummary && (
              <AddressSelector
                addresses={addresses}
                setAddressId={setAddressId}
              >
                <button
                  type="submit"
                  to={"/place-order"}
                  onClick={handleProceedToPayment}
                  className="group inline-block relative w-4/5"
                >
                  <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 transition-transform bg-yellow-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="w-full relative inline-block border border-current text-sm font-semibold px-8 py-[6px] group-active:text-opacity-75">
                    Order
                  </span>
                </button>
              </AddressSelector>
            )}
            {showOrderSummary && <OrderSummary order={order}></OrderSummary>}
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPlace;
