import axios from "axios";

class Api {

    static getData(start, end) {
        return axios.get(`http://localhost:5000/events?date_gte=${start}&date_lte=${end}`)
    }
}

export default Api