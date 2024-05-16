import { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserAuthContext';
import userApiService from '../apiServices/user.apiServices';
import { getToken } from '../utils';

const Signin = () => {

    const token = getToken();
    // useEffect(() => {
    //     if (token) {
    //         <Navigate to={`/`} replace/>
    //     }
    // }, []);

    const navigate = useNavigate();
    const userAuthContext = useAuth();
    const { login } = userAuthContext;

    // const [ username, setUsername ] = useState(null);
    // const [ password, setPassword ] = useState(null);

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            username: usernameRef.current.value, 
            password: passwordRef.current.value
        }
        // console.log(user);

        const res = await userApiService.userLogin(user);
        // console.log(res);
        if (res.status) {
            login(res.data?.token);
            navigate('/');
        }
    }

  return (
    <>{token ? <Navigate to={'/'} /> : (
        <>
            <h1 className='fixed w-dvw text-center font-extrabold text-5xl'>Internal Application</h1>
            <div className="h-full flex justify-center items-center">
                <div className="w-[85%] md:w-[20rem] bg-slate-50 border border-black rounded overflow-hidden shadow-lg">
                    <form action="" method='POST' onSubmit={handleSubmit}>
                        <div className="px-6 pt-4 pb-2 border-b-[1px] border-gray-500 bg-gray-100">
                            <h3 className="font-semibold text-xl">Sign In</h3>
                        </div>
                        <div className="px-6 pb-4 pt-2">
                            {/* <div className="font-semibold text-xl/loose">Sign In</div> */}
                            <label className="block mb-2">
                                <span className="text-gray-700 text-sm font-semibold">Username </span>
                                <input ref={usernameRef} type="text" className="mt-1 block w-full rounded-md bg-slate-50 border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 px-2 text-sm " placeholder="" required />
                            </label>
                            <label className="block mb-2">
                                <span className="text-gray-700 text-sm font-semibold">Password </span>
                                <input ref={passwordRef} type="password" className="mt-1 block w-full rounded-md bg-slate-50 border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 px-2 text-sm " placeholder="" required />
                            </label>
                            <div className='flex justify-center items-center'>
                                <input type="submit" value="Submit" className='border rounded-md shadow-sm bg-indigo-400 hover:border-indigo-500 hover:bg-indigo-500 cursor-pointer active:bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 px-2 py-1 font-semibold text-sm justify-self-center mx-auto my-2 text-center' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )}  
    </>
  )
}

export default Signin