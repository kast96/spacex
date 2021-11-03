import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.spacexdata.com/v4/',
});

export const rocketsAPI = {
    getList() {
        return instance.get(`rockets`).then(response => {
            return response.data;
        });
    }
}