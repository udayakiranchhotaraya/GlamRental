import { useState } from "react";
import { Link } from "react-router-dom";
import { Headroom } from "react-headroom";
import { useAuth } from "../contexts/UserAuthContext";

const Navbar = () => {
  const { user } = useAuth();
  // console.log(user);

  function toggleSlideover() {
    document
      .getElementById("cart-slideover-container")
      .toggleAttribute("invisible");
    document.getElementById("cart-slideover-bg").toggleAttribute("opacity-0");
    document.getElementById("cart-slideover-bg").toggleAttribute("opacity-50");
    document
      .getElementById("cart-slideover")
      .toggleAttribute("translate-x-full");
  }

  return (
    <>
      <div
        className={`flex sticky top-0 justify-around items-center py-4 px-3 bg-white border-b-[3px] border-yellow-300 shadow-md shadow-yellow-200 mb-2 z-40`}
      >
        {/* <Headroom> */}
        <div className=" w-full flex items-center justify-between px-3 md:w-4/5 md:px-8">
          <div className="flex items-center justify-center h-full w-fit">
            <Link className="h-full w-full">
              {/* <div
              className="h-full w-full"
              style={{
                backgroundImage: `url('/assets/logo.jpg')`,
                backgroundSize: `contain`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center'
              }}
            ></div> */}
              <img src="/assets/logo.jpg" alt="" className="h-14" />
            </Link>
          </div>
          <div className="flex gap-5">
            <FlyOutLink href={"#"} FlyOutContent={UserFlyOutContent}>
              <div className="h-7 w-7">
                <img
                  src="https://img.icons8.com/ios/100/user--v1.png"
                  alt="user--v1"
                />
              </div>
            </FlyOutLink>
            {user && (
              <Link to={"/cart"} className="h-7 w-7">
                <div>
                  <img
                    src="https://img.icons8.com/ios/100/shopping-cart--v1.png"
                    alt="shopping-cart--v1"
                  />
                </div>
              </Link>
            )}
          </div>
          {/* {user && (
            <>
              <div onClick={toggleSlideover} className="cursor-pointer flex">
                {user.name.firstName}
                
              </div>
            </>
          )} */}
        </div>
        {/* </Headroom> */}
      </div>
    </>
  );
};

export default Navbar;

const FlyOutLink = ({ children, href, FlyOutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyOutContent && open;

  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit h-fit"
      >
        <a href={href} className="relative">
          {children}
        </a>
        {showFlyout && (
          <div className="absolute left-1/2 top-8 -translate-x-1/2 text-black">
            <div className="absolute -top-1 left-0 right-0 h-6" />
            <FlyOutContent />
          </div>
        )}
      </div>
    </>
  );
};

const UserFlyOutContent = () => {
  const { user, logout } = useAuth();

  const logoutUser = () => {
    logout();
  };

  return (
    <div className="w-max h-fit border rounded p-6 shadow-xl bg-white">
      {user ? (
        <>
          <div className="mt-1">
            <Link
              to="/user-profile"
              className="w-full inline-block text-sm text-gray-500 transition duration-150 hover:underline hover:underline-offset-8  hover:decoration-yellow-400"
            >
              {user.name.firstName}&apos;s Profile
            </Link>
          </div>
          <div className="mt-3">
            <Link
              to="/user-profile"
              className="w-full inline-block text-sm text-gray-500 transition duration-150 hover:underline hover:underline-offset-8  hover:decoration-yellow-400"
            >
              Order History
            </Link>
          </div>
          <div>
            <input
              type="button"
              id="logout"
              onClick={logoutUser}
              value={`LOGOUT`}
              className="border rounded-md shadow-sm bg-yellow-400 hover:border-rose-500 hover:bg-rose-500 cursor-pointer active:bg-rose-700 text-white focus:outline-none focus:ring-2 focus:ring-rose-300 px-2 py-1 font-semibold text-sm mx-1 mt-5"
            />
          </div>
        </>
      ) : (
        <Link
          to={`/signin`}
          type="button"
          id="signin"
          value={`SIGNIN`}
          className="border rounded-md shadow-sm bg-[#e1e1e7] hover:border-yellow-500 hover:bg-yellow-500 cursor-pointer active:bg-yellow-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-200 px-2 py-1 font-semibold text-sm mx-1 mt-5"
        >
          SIGNIN
        </Link>
      )}
    </div>
  );
};
