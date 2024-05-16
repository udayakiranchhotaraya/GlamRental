import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { storage } from "../configs/firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import userApiService from "../apiServices/user.apiServices";
import { useParams } from "react-router-dom";
import dressApiService from "../apiServices/dress.apiServices";

const UpdateProduct = () => {
  const { id } = useParams();

  const [gender, setGender] = useState("");
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const designerRef = useRef(null);
  const genderRef = useRef(null);
  const sizeRef = useRef(null);
  const colorRef = useRef(null);
  const priceRef = useRef(null);
  const materialRef = useRef(null);
  const descriptionRef = useRef(null);
  const imgRef = useRef(null);
  const totalQuantityRef = useRef(null);
  const availableQuantityRef = useRef(null);
  const ownerIdRef = useRef(null);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  async function getProductDetails(id) {
    const res = await dressApiService.fetchDressDetails(id);
    console.log(res);
    if (res.status) {
      setProduct(res.data);
      //   setGender(product.gender);
      //   setColors(product.colors);
      //   setSizes(product.sizes);
      //   setImageUrls(product.imageUrls);
    }
  }

  const handleProductDetailsSubmit = async (event) => {
    event.preventDefault();
    const updatedProduct = {
      title: titleRef.current.value,
      category: categoryRef.current.value,
      designer: designerRef.current.value,
      gender: gender,
      sizes: [...product.sizes, ...sizes],
      colors: [...product.colors, ...colors],
      material: materialRef.current.value,
      price: priceRef.current.value,
      imageUrls: imageUrls,
      description: descriptionRef.current.value,
      total_quantity: totalQuantityRef.current.value,
      available_quantity: availableQuantityRef.current.value,
      ownerIdRef: ownerIdRef.current.value,
    };
    console.log(updatedProduct);

    // const res = await userApiService.updateProduct(updatedProduct);
    // if (res.status) {
    //     alert('new dress added');
    // }
  };

  function handleSizeAdd() {
    event.preventDefault();
    // sizes.push(sizeRef.current.value);
    setSizes([...sizes, sizeRef.current.value]);
    sizeRef.current.value = "";
  }

  function handleColorAdd() {
    event.preventDefault();
    setColors([...colors, colorRef.current.value]);
    colorRef.current.value = "";
  }

  const handleGenderChange = (e) => {
    event.preventDefault();
    setGender(e.target.value);
  };

  const handlePreImageUpload = (event) => {
    setImage(event.target.files[0]);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleImageUpload = () => {
    event.preventDefault();

    if (image == null) return;

    const imageRef = ref(storage, `dress-images/${v4() + image.name}`);
    const uploadTask = uploadBytesResumable(imageRef, image);
    uploadTask.on(
      "status-changed",
      (snapshot) => {
        // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');
        // switch (snapshot.state) {
        // case 'paused':
        //     console.log('Upload is paused');
        //     break;
        // case 'running':
        //     console.log('Upload is running');
        //     break;
        // }
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
          setImageUrls([...imageUrls, downloadURL]);
        });
      }
    );

    setImage(null);
    setImagePreview(null);
    imgRef.current.value = "";
  };

  if (!product) return;

  return (
    <>
      {product && (
        <div className="w-4/5 border border-slate-300 rounded-md shadow-sm mt-5 p-5 mx-auto">
          <form action="" className="w-[75%] mx-auto">
            <h2 className="text-2xl/loose font-light">
              Update product details
            </h2>
            <br />
            <label className="block mb-2">
              <span className="text-gray-700 font-semibold">
                Product Title:{" "}
              </span>
              <input
                ref={titleRef}
                defaultValue={product.title}
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                placeholder=""
                required
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700 font-semibold">Category: </span>
              <input
                ref={categoryRef}
                defaultValue={product.category}
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                placeholder=""
                required
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700 font-semibold">Designer: </span>
              <input
                ref={designerRef}
                defaultValue={product.designer}
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                placeholder=""
                required
              />
            </label>
            {/* <label className="block mb-2">
                    <span className="text-gray-700 font-semibold">Gender: </span>
                    <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 px-2 text-sm " placeholder="" required />
                </label> */}
            <div className="block mb-2">
              <label htmlFor="" className="text-gray-700 font-semibold">
                Gender:{" "}
              </label>
              <fieldset>
                <div className="flex items-center justify-around">
                  <div className="flex items-center">
                    <input
                      ref={genderRef}
                      type="radio"
                      id=""
                      name="gender"
                      value={`female`}
                      checked={product.gender === "female"}
                      onChange={handleGenderChange}
                    />
                    <label>Female</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      ref={genderRef}
                      type="radio"
                      id=""
                      name="gender"
                      value={`male`}
                      checked={product.gender === "male"}
                      onChange={handleGenderChange}
                    />
                    <label>Male</label>
                  </div>
                </div>
              </fieldset>
            </div>
            <label htmlFor="" className="block mb-2">
              <span className="text-gray-700 font-semibold">Size(s): </span>
              <fieldset>
                <div className="mt-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:outline-none focus-within:border-indigo-500 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 p-1 px-2 text-sm ">
                  <span className="flex flex-wrap text-xs font-medium text-gray-700">
                    {product.sizes.map((size, index) => (
                      <ArrayBoxes key={index} item={size} />
                    ))}
                    {sizes.map((size, index) => (
                      <ArrayBoxes key={index} item={size} />
                    ))}
                  </span>
                  <div className="flex">
                    <input
                      ref={sizeRef}
                      type="text"
                      className="mt-1 ml-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                    <input
                      type="button"
                      value={`Add`}
                      id="add-size"
                      onClick={handleSizeAdd}
                      className="border rounded-md shadow-sm bg-indigo-400 hover:border-indigo-500 hover:bg-indigo-500 cursor-pointer active:bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 px-2 py-1 font-semibold text-sm"
                    />
                  </div>
                </div>
              </fieldset>
            </label>
            <label htmlFor="" className="block mb-2">
              <span className="text-gray-700 font-semibold">Color(s): </span>
              <fieldset>
                <div className="mt-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:outline-none focus-within:border-indigo-500 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 p-1 px-2 text-sm ">
                  <span className="text-xs font-medium text-gray-700 flex">
                    {product.colors.map((color, index) => (
                      <ArrayBoxes key={index} item={color} />
                    ))}
                    {colors.map((color, index) => (
                      <ArrayBoxes key={index} item={color} />
                    ))}
                  </span>
                  <div className="flex">
                    <input
                      type="text"
                      ref={colorRef}
                      className="mt-1 ml-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                    <input
                      type="button"
                      value={`Add`}
                      id="add-color"
                      onClick={handleColorAdd}
                      className="border rounded-md shadow-sm bg-indigo-400 hover:border-indigo-500 hover:bg-indigo-500 cursor-pointer active:bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 px-2 py-1 font-semibold text-sm"
                    />
                  </div>
                </div>
              </fieldset>
            </label>
            {/* <label className="block mb-2">
                    <span className="text-gray-700 font-semibold">Color(s): </span>
                    <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 px-2 text-sm " placeholder="" required />
                </label> */}
            <label className="block mb-2">
              <span className="text-gray-700 font-semibold">Price: </span>
              <input
                ref={priceRef}
                defaultValue={product.price}
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                placeholder=""
                required
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700 font-semibold">Material: </span>
              <ReactQuill
                style={{
                  height: `125px`,
                  width: `100%`,
                  display: `inline-block`,
                  backgroundColor: `white`,
                }}
                ref={materialRef}
                scrollingContainer={`white`}
                className={`mt-2 bg-white`}
                defaultValue={product.material}
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700 font-semibold">Description: </span>
              <ReactQuill
                style={{
                  height: `125px`,
                  width: `100%`,
                  display: `inline-block`,
                  backgroundColor: `white`,
                }}
                ref={descriptionRef}
                scrollingContainer={`white`}
                className={`mt-2 bg-white`}
                defaultValue={product.description}
              />
            </label>
            <label htmlFor="" className="block mb-2">
              <span className="text-gray-700 font-semibold">Images: </span>
              <div className="mt-1 flex w-full rounded-md bg-white border border-gray-300 shadow-sm p-1 px-2 items-center justify-between">
                <input
                  type="file"
                  ref={imgRef}
                  name=""
                  id=""
                  onChange={handlePreImageUpload}
                  className="block-inline"
                />
                <input
                  type="button"
                  value="Upload Image"
                  onClick={handleImageUpload}
                  className="block-inline border rounded-md shadow-sm bg-indigo-400 hover:border-indigo-500 hover:bg-indigo-500 cursor-pointer active:bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 px-2 py-1 font-semibold text-sm"
                />
              </div>
              <div
                id="image-preview"
                className="border border-dashed my-2 mx-1 px-2"
              >
                <span className="text-gray-500 font-semibold text-sm">
                  Preview Image:{" "}
                </span>
                <img
                  src={imagePreview}
                  alt=""
                  className={`object-contain ${
                    imagePreview ? "h-48" : ""
                  } mx-auto mb-1`}
                />
              </div>
              {imageUrls && (
                <div className="flex flex-wrap justify-around border border-dashed my-2 mx-1 px-2 py-1">
                  {product.imageUrls.map((imageUrl) => (
                    <ImageFrames key={""} imageUrl={imageUrl} />
                  ))}
                  {imageUrls.map((imageUrl) => (
                    <ImageFrames key={""} imageUrl={imageUrl} />
                  ))}
                </div>
              )}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700 font-semibold">
                Total Quantity:{" "}
              </span>
              <input
                ref={totalQuantityRef}
                defaultValue={product.total_quantity}
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                placeholder=""
                required
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700 font-semibold">
                Available Quantity:{" "}
              </span>
              <input
                ref={availableQuantityRef}
                defaultValue={product.available_quantity}
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                placeholder=""
                required
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700 font-semibold">
                Owner ID(If Applicable):{" "}
              </span>
              <input
                ref={ownerIdRef}
                defaultValue={null}
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 px-2 text-sm "
                placeholder=""
              />
            </label>

            <input
              type="submit"
              id="submit-form"
              onClick={handleProductDetailsSubmit}
              className="border rounded-md shadow-sm bg-indigo-400 hover:border-indigo-500 hover:bg-indigo-500 cursor-pointer active:bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 px-2 py-1 font-semibold text-sm mx-1 mt-5"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateProduct;

const ArrayBoxes = ({ item }) => {
  return (
    <>
      <div className="border border-gray-400 rounded mx-1 mt-0.5 px-2 py-1">
        {item}
      </div>
    </>
  );
};

const ImageFrames = ({ imageUrl }) => {
  return (
    <>
      <div className="border border-gray-400 rounded mx-2 my-1 px-2 py-1">
        <img src={`${imageUrl}`} alt="" className="object-contain h-16" />
      </div>
    </>
  );
};
