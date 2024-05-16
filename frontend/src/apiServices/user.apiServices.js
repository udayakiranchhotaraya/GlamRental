import axios from 'axios';
import { getToken } from '../utils/tokenHelper';

class UserApiService {
    constructor () {
        this.api = String(import.meta.env.VITE_BACKEND_API);
    }

    async userLogin ( user ) {
        try {
            const res = await axios.post(`${this.api}/api/users/signin`, user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return { data: res.data, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }

    async userRegister ( user ) {
        try {
            const res = await axios.post(`${this.api}/api/users/signup`, user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return { data: res.data, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }

    async userDetails () {
        try {
            const res = await axios.get(`${this.api}/api/users`, {
                headers : {
                    'Authorization' : `Bearer ${getToken()}`
                }
            })
            // console.log(res.data);
            return { data: res.data, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }

    async newAddress (address) {
        try {
            const res = await axios.put(`${this.api}/api/users/newAddress/`, address, {
                headers : {
                    'Authorization' : `Bearer ${getToken()}`
                }
            })
            console.log(res.data);
            return { data: res.data, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }
}

const userApiService = new UserApiService();
export default userApiService;