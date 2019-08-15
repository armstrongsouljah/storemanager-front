
import axios from 'axios'
const { VUE_APP_API_URL} = process.env
const baseUrl = VUE_APP_API_URL
class AxiosCalls {
    static async post(path, data, config) {
        return await axios.post(`${baseUrl}${path}`, data, config)
               .then(response => response)
               .catch(error => error.response)
    }
}
export default AxiosCalls
