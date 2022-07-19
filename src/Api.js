import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {'X-Custom-Header': 'foobar'}
});

class Api {

    static getData(start, end) {
        return api.get(`/events?date_gte=${start}&date_lte=${end}`);
    }

    static postData(data){
        return api.post(`/events`, data)
    }
    static updateData(data, dataId){
        return api.patch(`/events/${dataId}`, data )
    }
}

export default Api