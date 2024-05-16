import React, { useEffect, useState } from "react";
import dressApiService from "../apiServices/dress.apiServices";
import { Link, useParams, useNavigate } from "react-router-dom";
import parser from "html-react-parser";
import { getToken } from '../utils/tokenHelper';
import cartApiService from "../apiServices/cart.apiServices";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar, DateRange, DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

const ProductDetails = () => {

  const token = getToken();

  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [range, setRange] = useState(0);

  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: "selection",
  //   },
  // ]);

  async function getProductDetails(id) {
    const res = await dressApiService.fetchDressDetails(id);
    if (res.status) {
      setProduct(res.data);
    }
  }

  const handleAddToCart = async (dressId) => {
    if (token) {
      // console.log(1);
      const res = await cartApiService.addToCart(dressId);
      if (res) {
        alert(res.data?.message);
      }
    } else {
      // console.error(0);
      alert('please sign in');
      navigate('/signin');
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
        <div className="container w-4/5 mx-auto mt-10 mb-40">
          <div className="flex my-2 flex-col md:flex-row">
            <div className="md:w-3/5 flex flex-wrap justify-center px-2">
              <div className="grid gap-1 w-full sm:grid-cols-1 lg:grid-cols-2 h-fit mr-8">
                {product.imageUrls.map((imageUrl, index) => (
                  //<div key={index} src={imageUrl} alt="" className='w-full'>
                  <img
                    key={index}
                    src={imageUrl}
                    alt=""
                    className="object-contain"
                  />
                  //</div>
                ))}
              </div>
            </div>
            <div className="md:w-2/5 pe-2">
              {/* <div className='font-semibold mt-3'>Product ID: #{product._id}</div> */}
              {/* <div className="border my-3" /> */}
              <div className="font-semibold text-xl mt-2">
                {product.designer}
              </div>
              <div className="font-light text-2xl mt-2">{product.title}</div>
              <div className="border my-3" />
              <div className="font-bold text-2xl">
                &#8377;{product.price}
                <span className="text-sm font-semibold text-gray-500">
                  &nbsp;&nbsp;&nbsp;inclusive of all taxes
                </span>
              </div>
              <fieldset className="block mt-2">
                <legend className="font-semibold mb-1">
                  Sizes Available:{" "}
                </legend>
                {/* <div className='block mt-2 font-semibold'>Sizes Available: </div> */}
                <div className="flex flex-wrap">
                  {product.sizes.map((size, index) => (
                    <div key={index} className="">
                      <label className="block cursor-pointer rounded border border-gray-100 bg-white px-2 py-1 mx-1 text-sm shadow-sm hover:border-yellow-500 has-[:checked]:border-yellow-500 has-[:checked]:ring-1 has-[:checked]:ring-yellow-400 ">
                        {size}
                        <input
                          type="radio"
                          name="size"
                          id=""
                          value={size}
                          className="sr-only"
                        />
                      </label>
                    </div>
                    // <input key={index} type="radio" name="size" id="" value={size} placeholder={size}/>
                  ))}
                </div>
              </fieldset>
              <fieldset className="block mt-2">
                {/* <div className="block mt-2 font-semibold">Color(s): </div> */}
                <legend className="font-semibold mb-1">Colors Available:</legend>
                <div className="flex flex-wrap">
                  {product.colors.map((color, index) => (
                    <div key={index} className="">
                      <label className="block cursor-pointer rounded border border-gray-100 bg-white px-2 py-1 mx-1 text-sm shadow-sm hover:border-yellow-500 has-[:checked]:border-yellow-500 has-[:checked]:ring-1 has-[:checked]:ring-yellow-400 capitalize">
                        {color}
                        <input
                          type="radio"
                          name="color"
                          id=""
                          value={color}
                          className="sr-only"
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <div className="border my-3" />
              <fieldset className="block mt-2">
                {/* <div className="block mt-2 font-semibold">Color(s): </div> */}
                <legend className="font-semibold mb-1">Rent Period: </legend>
                <div className="flex flex-wrap">
                  <div className="">
                    <label
                      onClick={() => setRange(3)}
                      className="block cursor-pointer rounded border border-gray-100 bg-white px-2 py-1 mx-1 text-sm shadow-sm hover:border-yellow-500 has-[:checked]:border-yellow-500 has-[:checked]:ring-1 has-[:checked]:ring-yellow-400 capitalize"
                    >
                      3 Days
                      <input
                        type="radio"
                        name="range"
                        id=""
                        value={3}
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <div className="">
                    <label
                      onClick={() => setRange(5)}
                      className="block cursor-pointer rounded border border-gray-100 bg-white px-2 py-1 mx-1 text-sm shadow-sm hover:border-yellow-500 has-[:checked]:border-yellow-500 has-[:checked]:ring-1 has-[:checked]:ring-yellow-400 capitalize"
                    >
                      5 Days
                      <input
                        type="radio"
                        name="range"
                        id=""
                        value={5}
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <div className="">
                    <label
                      onClick={() => setRange(7)}
                      className="block cursor-pointer rounded border border-gray-100 bg-white px-2 py-1 mx-1 text-sm shadow-sm hover:border-yellow-500 has-[:checked]:border-yellow-500 has-[:checked]:ring-1 has-[:checked]:ring-yellow-400 capitalize"
                    >
                      7 Days
                      <input
                        type="radio"
                        name="range"
                        id=""
                        value={7}
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                {/* <legend className="font-semibold mb-1">Colors Available:</legend>
                <Calendar />
                <DateRange
                  onChange={(item) => setState([item.selection])}
                  minDate={addDays(new Date(), 0)}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                /> */}
              </fieldset>
              <div className="border my-3" />
              <div className="block mt-2 font-semibold text-xl">
                Product Description:{" "}
              </div>
              {parser(product.description)}
              <div className="block mt-2 font-semibold">Material: </div>
              {parser(product.material)}
              <div className="border my-3" />
              <div className="text-end mt-6">
                <button
                  type="submit"
                  onClick={() => handleAddToCart(product._id)}
                  className="group inline-block relative"
                >
                  <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 transition-transform bg-yellow-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <div className="w-full relative flex items-center border border-current text-sm font-semibold px-8 py-[6px] group-active:text-opacity-75">
                    <div
                      className="h-6 w-6 me-2"
                      style={{
                        backgroundImage: `url('https://img.icons8.com/ios/100/add-shopping-cart--v1.png')`,
                        backgroundSize: `contain`,
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <span>Add to Cart</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
