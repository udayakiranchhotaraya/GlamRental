import React from "react";
import { useRef } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { getToken } from "../utils/tokenHelper";
import { useAuth } from "../contexts/UserAuthContext";
import userApiService from "../apiServices/user.apiServices";

const Signin = () => {
  const token = getToken();

  const navigate = useNavigate();
  const { login } = useAuth();

  const mobileEmailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const user = {
      identification: mobileEmailRef.current.value,
      password: passwordRef.current.value,
    };
    // console.log(user);

    const res = await userApiService.userLogin(user);
    if (res.status) {
      login(res.data?.token);
      navigate("/");
    }
  };

  return (
    <>
      {token ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <div className="h-full flex justify-center items-center">
            <div className="flex border border-black rounded bg-slate-50 p-2">
              <div
                className="m-1 h-inherit w-40"
                style={{
                  backgroundColor: "#e5e5f7",
                  opacity: "0.8",
                  backgroundImage:
                    "linear-gradient(30deg, #eab308 12%, transparent 12.5%, transparent 87%, #eab308 87.5%, #eab308), linear-gradient(150deg, #eab308 12%, transparent 12.5%, transparent 87%, #eab308 87.5%, #eab308), linear-gradient(30deg, #eab308 12%, transparent 12.5%, transparent 87%, #eab308 87.5%, #eab308), linear-gradient(150deg, #eab308 12%, transparent 12.5%, transparent 87%, #eab308 87.5%, #eab308), linear-gradient(60deg, #eab30877 25%, transparent 25.5%, transparent 75%, #eab30877 75%, #eab30877), linear-gradient(60deg, #eab30877 25%, transparent 25.5%, transparent 75%, #eab30877 75%, #eab30877)",
                  backgroundSize: "20px 35px",
                  backgroundPosition:
                    "0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px",
                }}
              ></div>
              <div className="border rounded mx-[2px]"></div>
              <div className=" m-1 p-2">
                <form action="" method="POST">
                  <div className="flex items-end mx-6 mb-4 pt-4 pb-2">
                    <h3 className="font-bold text-slate-700 text-xl">Signin</h3>
                  </div>
                  <div className="mx-6 pb-3 pt-2">
                    <label className="block h-10 mb-3 border rounded focus-within:border-black">
                      <input
                        ref={mobileEmailRef}
                        type="text"
                        placeholder="Mobile Number or Email"
                        className="w-full bg-slate-50 h-full rounded focus:outline-none p-2 px-4 text-sm focus:placeholder:text-transparent"
                        required
                      />
                    </label>
                    <label className="block h-10 mb-3 border rounded focus-within:border-black">
                      <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        className="w-full bg-slate-50 h-full rounded focus:outline-none p-2 px-4 text-sm focus:placeholder:text-transparent"
                        required
                      />
                    </label>
                  </div>
                  <div className="mx-6 pb-3 pt-2">
                    <p className="text-xs text-gray-500">
                      By continuing, I agree to the{" "}
                      <span className="text-glam-accent-text cursor-pointer">
                        Terms of Use
                      </span>{" "}
                      &{" "}
                      <span className="text-glam-accent-text cursor-pointer">
                        Privacy Policy
                      </span>
                      .
                    </p>
                  </div>
                  <div className="relative mx-6 pb-4 pt-2 text-center">
                    <button
                      type="submit"
                      onClick={handleLoginSubmit}
                      className="group inline-block relative w-4/5"
                    >
                      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 transition-transform bg-[#e1e1e0] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                      <span className="w-full relative inline-block border border-current text-sm font-semibold px-8 py-[6px] group-active:text-opacity-75">
                        Continue
                      </span>
                    </button>
                  </div>
                </form>
                <div className="text-xs flex w-full mt-3 mb-1 justify-center">
                  New User?&nbsp;&nbsp;
                  <Link
                    to="/signup"
                    className="inline-block text-gray-500 transition duration-150 hover:underline hover:underline-offset-8  hover:decoration-yellow-400"
                  >
                    Signup here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Signin;
