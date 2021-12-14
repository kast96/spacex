import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.spacexdata.com/v4/',
});

export const rocketsAPI = {
    getList() {
        return instance.get(`rockets`).then(response => {
            return response.data;
        });
    },

    getById(id) {
        return instance.get(`rockets/${id}`).then(response => {
            return response.data;
        });
    }
}

export const starlinksAPI = {
    query(query, options) {
        return instance.post(`starlink/query`, {query, options}).then(response => {
            return response.data;
        });
    },
    
    getList() {
        return instance.get(`starlink`).then(response => {
            return response.data;
        });
    },

    getById(id) {
        return instance.get(`starlink/${id}`).then(response => {
            return response.data;
        });
    }
}