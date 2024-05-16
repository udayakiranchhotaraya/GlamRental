import axios from 'axios';

class DressApiService {
    constructor () {
        this.api = String(import.meta.env.VITE_BACKEND_API);
    }

    async fetchDresses (gender) {
        try {
            let url = `${this.api}/api/dress?`;

            if (gender === "men") url = url.concat('gender=male&');
            if (gender === "women") url = url.concat('gender=female&');

            // console.log(url);
            const res = await axios.get(url);
            return { url: url, data: res.data, status: true };
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

    async searchDress (searchTerm) {
        try {
            const res = await axios.post(`${this.api}/api/dress/search`, {searchTerm}, {
                headers : {
                    'Content-Type': 'application/json'
                }
            });
            return { data: res.data, status: true };
        } catch (error) {
            console.error(error);
            return { status: false, message: error?.response?.data?.message };
        }
    }
}

const dressApiService = new DressApiService();
export default dressApiService;