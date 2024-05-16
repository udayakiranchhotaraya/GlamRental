import axios from 'axios';
import { getToken } from '../utils/tokenHelper';

class OrderApiService {
    constructor () {
        this.api = String(import.meta.env.VITE_BACKEND_API);
    }

    async placeOrder ( cartId, addressId ) {
        try {
            const res = await axios.post(`${this.api}/api/order/`, {
                cartId: cartId,
                addressId: addressId
            }, {
                headers : {
                    'Authorization' : `Bearer ${getToken()}`
                }
            });
            return { data: res.data, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }

    async viewOrders () {
        try {
            const res = await axios.get(`${this.api}/api/order/`, {
                headers : {
                    'Authorization' : `Bearer ${getToken()}`
                }
            });
            console.log(res.data);
            return { data: res.data, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }
}

const orderApiService = new OrderApiService();
export default orderApiService;