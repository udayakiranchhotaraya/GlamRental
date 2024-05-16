import React from "react";
import cartApiService from "../apiServices/cart.apiServices";

const PreOrderSummary = () => {
  const [cart, setCart] = useState(null);

  async function getCart() {
    const res = await cartApiService.viewCart();
    if (res) {
    //   sessionStorage.setItem("cartId", res.data?.cart?._id);
      setCart(res.data?.cart);
    }
  }

  if (!cart) return;

  return (
    <div
      className="relative w-full max-w-full border rounded shadow-md border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex={"-1"}
    >
      pre order
    </div>
  );
};

export default PreOrderSummary;
