import axios from 'axios';
import { getToken } from '../utils';

class UserApiService {
    constructor () {
        this.api = String(import.meta.env.VITE_BACKEND_API);
    }

    async userLogin (user) {
        try {
            const res = await axios.post(`${this.api}/api/admin/signin`, user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return { data: res.data, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }

    async getNumberOfEndUsers () {
        try {
            const res = await axios.get(`${this.api}/api/admin/endUsers`, {
                headers : {
                    'Authorization' : `Bearer ${getToken()}`
                }
            })
            return { data: res.data.length, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }

    async getNumberOfOrders () {
        try {
            const res = await axios.get(`${this.api}/api/admin/orders`, {
                headers : {
                    'Authorization' : `Bearer ${getToken()}`
                }
            })
            // console.log(res.data);
            return { data: res.data.length, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }

    async getOrders () {
        try {
            const res = await axios.get(`${this.api}/api/admin/orders`, {
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

    async addNewProduct (newProduct) {
        try {
            const res = await axios.post(`${this.api}/api/admin/addDress`, newProduct, {
                headers : {
                    'Authorization' : `Bearer ${getToken()}`
                }
            })
            // console.log(res.data);
            return { data: res.data.length, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }

}

const userApiService = new UserApiService();
export default userApiService;