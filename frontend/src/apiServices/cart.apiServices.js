import axios from 'axios';
import { getToken } from '../utils/tokenHelper';

class CartApiService {
    constructor () {
        this.api = String(import.meta.env.VITE_BACKEND_API);
    }

    async addToCart ( dressId ) {
        try {
            const res = await axios.post(`${this.api}/api/cart/addToCart/${dressId}`, null, {
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

    async viewCart () {
        try {
            const res = await axios.get(`${this.api}/api/cart/viewCart/`, {
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

const cartApiService = new CartApiService();
export default cartApiService;