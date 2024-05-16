import { createContext, useContext, useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom'

export const UserAuthContext = createContext(null);

export const UserAuthProvider = (props) => {
    const [ token, setToken ] = useState(null);
    const [ user, setUser ] = useState(null);
    // const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setTokenOnReload(token);
        }
    }, []);

    async function setTokenOnReload(token) {
        setToken(token);
        const decoded = await decodeToken(token);
        setUser(decoded);
    }

    const login = async (token) => {
        localStorage.setItem('token', token);
        setToken(token);
        const decoded = await decodeToken(token);
        setUser(decoded);
    }

    const logout = () => {
        localStorage.removeItem('token');
        // navigate('/');
    }

    return (
        <UserAuthContext.Provider value={{ token, user, login, logout }}>
            {props.children}
        </UserAuthContext.Provider>
    )
}

export const useAuth = () => {
    const userAuthContext = useContext(UserAuthContext);
    return userAuthContext
}