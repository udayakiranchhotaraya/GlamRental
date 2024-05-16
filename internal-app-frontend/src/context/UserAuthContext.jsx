import { createContext, useContext, useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';


export const UserAuthContext = createContext(null);

export const UserAuthProvider = (props) => {
    const [ token, setToken ] = useState(null);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ user, setUser ] = useState(null);

     useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setTokenOnReload(token);
        } else {
            console.warn(1);
        }
    }, []);

    async function setTokenOnReload(token) {
        setToken(token);
        setIsLoggedIn(true);
        const decoded = await decodeToken(token);
        setUser(decoded);
        // console.log(user);
    }

    const login = async (token) => {
        localStorage.setItem('token', token);
        setToken(token);
        setIsLoggedIn(true);
        const decoded = await decodeToken(token);
        // console.log(decoded);
        setUser(decoded);
        // console.log(user);
    }

    const logout = () => {
        localStorage.removeItem('token');
        // setIsLoggedIn(false);
    }

    return (
        <UserAuthContext.Provider value = {{token, isLoggedIn, user, login, logout}}>
            {props.children}
        </UserAuthContext.Provider>
    )
}

export const useAuth = () => {
    const userAuthContext = useContext(UserAuthContext);
    return userAuthContext
}