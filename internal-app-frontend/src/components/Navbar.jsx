import React, { useState } from 'react'
import { useAuth } from '../context/UserAuthContext'

const Navbar = () => {
  const authContext = useAuth();
  const { user } = authContext;
  console.log(authContext);
  console.log(user);

  return (
    <>{user && (
        <div className={`flex justify-around items-center pt-2 py-3 bg-slate-50 border-b drop-shadow-md`}>
          <h1 className={`font-bold text-2xl`}>GlamRental Internal Application</h1>
          <div>  
            <FlyOutLink href={'#'} FlyOutContent={AdminFlyOutContent}>Welcome, {user.name.firstName}</FlyOutLink>
          </div>
        </div>
    )}
    </>
  )
}

export default Navbar

const FlyOutLink = ({children, href, FlyOutContent}) => {

  const [open, setOpen] = useState(false);

  const showFlyout = FlyOutContent && open;

  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className='relative w-fit h-fit'
      >
        <a href={href} className='relative'>
        {children}
        </a>
        {showFlyout && (
          <div className='absolute left-1/2 top-8 -translate-x-1/2 text-black'>
            <div className="absolute -top-6 left-0 right-0 h-6 " />
            <FlyOutContent />
          </div>
        )}
      </div>
    </>
  )
}

const AdminFlyOutContent = () => {
  const { logout } = useAuth();

  const logoutUser = () => {
    logout()
  }
  return (
    <div className="w-fit h-fit border rounded p-6 shadow-xl bg-white">
      <input type='button' id='logout' onClick={logoutUser} value={`LOGOUT`} className='border rounded-md shadow-sm bg-indigo-400 hover:border-rose-500 hover:bg-rose-500 cursor-pointer active:bg-rose-700 text-white focus:outline-none focus:ring-2 focus:ring-rose-300 px-2 py-1 font-semibold text-sm mx-1 mt-5' />
    </div>
  )
}