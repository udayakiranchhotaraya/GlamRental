import axios from 'axios';

class DressApiService {
    constructor() {
        this.api = String(import.meta.env.VITE_BACKEND_API);
    }

    async fetchDresses() {
        try {
            const res = await axios.get(`${this.api}/api/dress`);
            return { data: res.data, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }

    async dressCount() {
        try {
            const res = await axios.get(`${this.api}/api/dress`);
            // console.log(res.data);
            return { data: res.data.length, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }

    async fetchDressDetails (id) {
        try {
            const res = await axios.get(`${this.api}/api/dress?_id=${id}`);
            return { data: res.data[0], status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }
}

const dressApiService = new DressApiService();
export default dressApiService;