import React from "react";
import { useAuth } from "../contexts/UserAuthContext";
import userApiService from "../apiServices/user.apiServices";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const UserDetails = () => {
  const { user } = useAuth();

  const [User, setUser] = useState();

  async function getUserDetails() {
    const res = await userApiService.userDetails();
    if (res.status) {
      setUser(res.data);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  if (!User) return;

  return (
    <div className="px-[10%] mt-10 mb-40">
      <div className="border rounded shadow-lg bg-white px-5 md:px-20 py-8">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg/loose font-bold leading-7 text-gray-900">
            Personal details
          </h3>
          {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"></p> */}
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {`${User.name.firstName} ${User.name.lastName}`}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Mobile
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {User.mobile}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {User.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Addresses
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {User.address && (
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    {User.address.map((address) => (
                      <li
                        key={address.id}
                        className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
                      >
                        <div className="flex w-0 flex-1 items-center">
                          {/* <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      /> */}
                          <div className="ml-4 flex flex-col min-w-0 flex-1 gap-1">
                            <span className="font-medium">{address.name}</span>
                            <span className="text-sm font-medium">
                              {`${address.addressLine1}, ${address.addressLine2}, ${address.addressLine3}`}
                            </span>
                            <span className="text-sm font-medium">
                              {`${address.city}, ${address.state}`}
                            </span>
                            <span className="text-sm flex-shrink-0 text-gray-400">
                              Contact Number: {address.mobile}
                            </span>
                          </div>
                        </div>
                        {/* <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Delete
                      </a>
                    </div> */}
                      </li>
                    ))}
                  </ul>
                )}
                <Link to={'/add-address'}
                  className="block text-center w-fit border rounded-md shadow-sm bg-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 cursor-pointer active:bg-yellow-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 px-2 py-1 font-semibold text-sm mx-auto mt-5"
                >New Address</Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
