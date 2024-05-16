import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cartApiService from "../apiServices/cart.apiServices";

const Cart = () => {
  const [cart, setCart] = useState(null);

  async function getCart() {
    const res = await cartApiService.viewCart();
    if (res) {
      localStorage.setItem("cartId", res.data?.cart?._id);
      setCart(res.data?.cart);
    }
  }

  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);

  // if (!cart) return;

  return (
    <>
      <div className="w-full h-full flex justify-center items-center mb-20">
        <div id="cart-slideover-container" className="w-full h-full">
          {/* <div id="cart-slideover-bg" className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-700 opacity-50 -z-10"></div> */}
          {/* <div id="cart-slideover" className="absolute w-full h-full md:w-[45%] bg-green-500 left-0.5 top-0"></div> */}
          <div
            id="cart-container"
            className="block w-full h-fit md:w-[45%] mx-auto mt-6 bg-inherit"
          >
            <div
              className="relative w-full max-w-full border rounded shadow-md border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
              aria-modal="true"
              role="dialog"
              tabIndex="-1"
            >
              {/* <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
                <span className="sr-only">Close cart</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button> */}

              <div className="mt-4 space-y-6">
                {cart ? (
                  <ul className="space-y-4">
                    {cart.items.map((item) => (
                      <li key={item.id} className="flex items-center gap-4">
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

                            {/* <div>
                              <dt className="inline">Color:</dt>
                              <dd className="inline">White</dd>
                            </div> */}
                          </dl>
                        </div>

                        {/* <div className="flex flex-1 items-center justify-end gap-2">
                          <form>
                            <label htmlFor="Line1Qty" className="sr-only">
                              {" "}
                              Quantity{" "}
                            </label>

                            <input
                              type="number"
                              min="1"
                              defaultValue={item.quantity}
                              id="Line1Qty"
                              className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            />
                          </form>

                          <button className="text-gray-600 transition hover:text-red-600">
                            <span className="sr-only">Remove item</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div> */}

                        <div className="flex flex-1 justify-end">
                          <span className="flex justify-end overflow-hidden rounded-md border bg-white shadow-sm text-xs">
                            <button
                              type="button"
                              className="size-10 leading-10 text-gray-600 transition hover:opacity-75 text-sm"
                            >
                              &minus;
                            </button>

                            <input
                              type="number"
                              id="Quantity"
                              defaultValue={item.quantity}
                              className="text-xs w-4 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-xs [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            />

                            <button
                              type="button"
                              className="size-10 leading-10 text-gray-600 transition hover:opacity-75 text-sm"
                            >
                              &#43;
                            </button>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="italic text-center">No items in cart...</div>
                )}

                <div className="space-y-5 text-center">
                  <div className="border" />

                  <div className="flex mb-10 px-3 justify-between text-sm font-semibold">
                    <div className="mx-4">
                      <h2>Total Amount : </h2>
                    </div>
                    <div className="mx-4">
                      <h2>{cart?.total_price}</h2>
                    </div>
                  </div>
                  <br />

                  <Link
                    type="submit"
                    to={"/place-order"}
                    // onClick={handleLoginSubmit}
                    className="group inline-block relative w-4/5"
                  >
                    <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 transition-transform bg-yellow-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="w-full relative inline-block border border-current text-sm font-semibold px-8 py-[6px] group-active:text-opacity-75">
                      Continue to checkout
                    </span>
                  </Link>

                  <Link
                    to={'/shop'}
                    className="inline-block text-sm text-gray-500 transition duration-150 hover:underline hover:underline-offset-8  hover:decoration-yellow-400"
                  >
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
