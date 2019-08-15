
import axios from 'axios'
const { VUE_APP_API_URL} = process.env
const baseUrl = VUE_APP_API_URL
class AxiosCalls {
    post = (path, data, config) => {
        return axios.post(`${baseUrl}${path}`, data, config)
               .then(response => response)
               .catch(error => error)
    }
}
export default AxiosCalls
